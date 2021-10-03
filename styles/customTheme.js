import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '20em', //320
    md: '30em', //480
    lg: ' 40em', //641
    xl: '60em', //961
    '2xl': '65em', //1025
    '3xl': '80em' //1281
});

const customTheme = extendTheme({
    breakpoints,
    colors: {
        mygreen: {
            500: '#62BCB9',
            800: '#439D9A'
        }
    }
})

export default customTheme;