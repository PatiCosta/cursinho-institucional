
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SubscribeFooter } from '@/components/Footer/subscribe'
import { useSchoolClass } from '@/context/turmas'
import { Box, BoxProps, Flex, FlexProps, Grid, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Book, BookOpen, CalendarCheck, CaretDoubleRight } from 'phosphor-react'

import { ReactNode, useEffect } from 'react'
import { Main } from '@/components/verTurma/main'
import { SelectiveStages } from '@/components/verTurma/selectiveStages'
import { Observations } from '@/components/verTurma/observations'
import { SubscribeSchoolClassFooter } from '@/components/Footer/subscribeSchoolClass'

interface InfoBoxProps extends BoxProps {
  title: string
  info: string
}

function InfoBox({ title, info, ...rest }: InfoBoxProps) {
  return (
    <Box {...rest}>
      <Text
        color="gray.700"
        fontSize={{ base: 16, lg: 18 }}
        letterSpacing={0.8}
        fontWeight="bold"
      >
        {title}
      </Text>
      <Text fontSize={{ base: 14, lg: 16 }}>{info}</Text>
    </Box>
  )
}

interface SubtitleProps extends FlexProps {
  icon: ReactNode
  children: string
  lineColor: string
  hasButton?: boolean
  button?: ReactNode
  size: 'sm' | 'lg'
}

function Subtitle({
  icon,
  children,
  lineColor,
  hasButton = false,
  button,
  size,
  ...rest
}: SubtitleProps) {
  return (
    <Flex alignItems="center" {...rest}>
      <Box>
        <Flex alignItems="center" gap={2}>
          {icon}
          <Text
            fontSize={{
              base: size === 'sm' ? 18 : 24,
              lg: size === 'sm' ? 24 : 28,
            }}
            fontWeight="medium"
            color="gray.700"
          >
            {children}
          </Text>
        </Flex>
        <Box w="76px" h="2px" bgColor={lineColor} />
      </Box>
      {hasButton && button}
    </Flex>
  )
}

 
export default function Turma() {
  const router = useRouter()
  const {schoolClassList} = useSchoolClass()
  const isLg = useBreakpointValue({ base: false, sm: false, lg: true })

  const schoolClass = schoolClassList?.find(schoolClass => schoolClass.id === router.query.id)

  useEffect(() => {
    if (schoolClassList === undefined || schoolClass === undefined) {
      router.push('/turmas')
    }
  })

  if (schoolClass) return (
    <>
      <Header />
      <Main 
        classContent={schoolClass.informations.classContent}
        description={schoolClass.informations.description}
        color={schoolClass.informations.color}
        dateSchedule={schoolClass.informations.dateSchedule}
        hourSchedule={schoolClass.informations.hourSchedule}
        whoCanParticipate={schoolClass.informations.whoCanParticipate}
        title={schoolClass.title}
        subscriptionSchedule={schoolClass.subscriptions.subscriptionSchedule}
        price={schoolClass.subscriptions.price}
      />
      <SelectiveStages 
        color={schoolClass.informations.color}
        stages={schoolClass.selectiveStages}
      />
      <Observations 
        color={schoolClass.informations.color}
        observations={schoolClass.informations.observations}
        documents={schoolClass.documents}
      />
      <Footer mt={{base: 40, lg: 72}}>
          <SubscribeSchoolClassFooter />
      </Footer>
    </>
  )
}