import { extendTheme } from "@chakra-ui/react";


//Estendendo e Personalizando
export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#18191F",
            "800": "#1E2027",
            "700": "#2D3039",
            "600": "#404451",
            "500": "#2F2E41",
            "400": "#3F3D56",
            "300": "#788097",
            "200": "#919AB7",
            "100": "#E0DFFB",
        },
        purple: {
            "900": "#4340FF",
            "800": "#4643F0",
            "700": "#5653F4",
            "300": "#9D9BF2",
            "200": "#868AA8"
        },
        red: {
            "500": "#F5746C",
        },
        yellow: {
            "500": "#E4F53B",
        },
        pink: {
            "500": "#B35FF5",
        },
        blue: {
            "500": "#47A0F5",
        },
        green: {
            "500": "#62F53B",
        }
    },
    breakpoints: {
        
    },
    fonts: {
        heading: 'Poppins',
        body: 'Ubuntu'
    },
    styles: {
        global: {
            body:{
                bg: 'gray.800',
                color: 'gray.100'
            }
        }
    }
})
