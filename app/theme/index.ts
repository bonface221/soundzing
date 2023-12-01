import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontSize: "1.5rem",
        fontweight: "400",
        fontStyle: "normal",
        color: "brand.white",
      },
    },
  },

  colors: {
    brand: {
      main: "#FF6864",
      gray: "#181E1E",
      black: "#000",
      white: "#FFFF",
    },
  },
});
