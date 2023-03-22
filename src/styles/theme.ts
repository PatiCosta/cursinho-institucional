import { extendTheme } from '@chakra-ui/react'

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "#caded8",
      boxShadow: "0 0 0 2px #caded8"
    },
    _autofill: {
      textFillColor: "#e6cebe",
      transition: "background-color 5000s ease-in-out 0s",
    },
  }
});

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: "#caded8",
      boxShadow: "0 0 0 1px #caded8"
    },
    _autofill: {
      textFillColor: "#e6cebe",
      transition: "background-color 5000s ease-in-out 0s",
    },
  }
});

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: "#caded8",
      boxShadow: "0 1px 0 0 #caded8"
    },
    _autofill: {
      textFillColor: "#e6cebe",
      transition: "background-color 5000s ease-in-out 0s",
    },
  }
});

export const theme = extendTheme({
  fonts: {
    heading: `'NeueHaas', sans-serif`,
    body: `'NeueHaas', sans-serif`,
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
  }},
  colors: {
    yellow: {
      100: "#F4E2B4",
      300: "#FFD15E",
      400: "#E9C46A",
      500: "#FFd500"
    },
    blue: {
      300: "#8ECAE6",
      500: "#219EBC",
      600: "#034464",
      700: "#3b3a65",
      800: "#2a255a",
    },
    orange: {
      500: "#FB8500",
      600: "#E76F51",
    },
    purple: {
      400: "#B600B6",
      500: "#800080",
      600: "#6D006D"
    },
    classes: {
      'tsa': "#f9b03f",
      'tse': "#17304a",
      'tsm': "#ee5e35",
      'tsi': "#800080",
    }
  },
  styles: {
    global: {
      body: {
        bgColor:'#F7FAFC',
        color: 'blue.800',
        },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
 })