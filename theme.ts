import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: "#EA0001",
        secondary: "#FFD52F",
        heading: "#2D3748",
        text: "#575F6D",
        links: "#4EA0DB"
    },
    fonts: {
        heading: `Nunito, ${base.fonts.heading}`,
        body: `Nunito, ${base.fonts.body}`,
      },
})

export default theme;