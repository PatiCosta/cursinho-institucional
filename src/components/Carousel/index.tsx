import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Box, Flex } from "@chakra-ui/react";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

interface CarouselProps {
    images: string[]
}

// const ChakraImage = chakra(motion.img, {
//   /**
//    * Allow motion props and non-Chakra props to be forwarded.
//    */
//   shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
// });

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = (
  {images}: CarouselProps
) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>    
      <Box 
        borderRadius='2xl' 
        overflow='hidden' 
        position='relative' 
        h={{base: '200px', lg: '400px'}}
        w={{base: '90vw', lg: '100%'}}
        boxShadow='2xl'
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            style={{
                borderRadius: '1rem', 
                position: 'absolute', 
            }}
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </Box>
      <Flex 
        alignItems='center' 
        flex='1' 
        justifyContent='center' 
        mt={2} 
        gap={2} 
      >
        <>
          <div onClick={() => paginate(1)} style={{cursor: 'pointer'}}>
            <CaretDoubleLeft 
                size={18} 
                color="#2a255a" 
                weight="light" 
            />
          </div>
          <Box h='8px' w='8px' borderRadius='full' bgColor={
              0 === imageIndex ? 'gray.500' : 'gray.300'
          }/>
          {images.map((image, index) => {
            if(index === 0) return null

            if (index > 0) {
              return (
                <Box key={index} h='8px' w='8px' borderRadius='full' bgColor={
                  images.length - index === imageIndex ? 'gray.500' : 'gray.300'
                }/>
              )
            }
          })}
          <div onClick={() => paginate(-1)} style={{cursor: 'pointer'}}>
            <CaretDoubleRight 
                size={18} 
                color="#2a255a" 
                weight="light" 
            />
          </div>
        </>
      </Flex>
    </>
  );
};
