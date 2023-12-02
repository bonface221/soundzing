import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontweight: "600",
        fontStyle: "normal",
        color: "brand.white",
      },
    },
  },
  colors: {
    brand: {
      main: "#FF6864",
      gray: "#181E1E",
      red: "#E63946",
      yellow: "#FFCA28",
      pink: "#FF6864",
      black: "#000",
      white: "#FFFF",
    },
  },
});
