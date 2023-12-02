import { Box, Button, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import Navbar from "../navbar";
import { marginX } from "@/app/constants";
import GithubCTA from "./components/github-cta";

const HeroSection = () => {
  return (
    <Box
      h={{ base: "85vh", sm: "95vh" }}
      bgImage="/home-bg.jpg"
      objectFit="cover"
      bgPos="40% 50%"
      pos="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        zIndex: 9,
      }}
    >
      <Stack h="100%">
        <Stack zIndex={999}>
          <Navbar />
        </Stack>

        <Grid
          gridTemplateColumns={{ base: "1fr", sm: "repeat(5,1fr)" }}
          gridTemplateRows="1fr 1fr auto"
          gap={4}
          marginX={marginX}
          h="100%"
          zIndex={999}
        >
          <GridItem
            gridRowStart={3}
            gridColumn={{ base: "auto", sm: "4/5" }}
            color="brand.white"
          >
            <Stack
              borderX="4px solid var(--chakra-colors-brand-white)"
              borderTop="4px solid var(--chakra-colors-brand-white)"
              p="49px 40px"
              bg="rgba(0, 0, 0, 0.50)"
              backdropFilter="blur(25px)"
              borderTopRadius="20px"
              gap="30px"
              minW={{ base: "100%", sm: "400px" }}
            >
              <Box
                as="h3"
                fontSize="16px"
                _after={{
                  content: '""',
                  display: "block",
                  width: "60px",
                  height: "4px",
                  marginTop: "10px",
                  bg: "brand.red",
                }}
              >
                Sound Design MasterClass
              </Box>
              <Heading
                fontFamily='Alegreya "Open Sans"'
                fontSize={{ base: "30px", sm: "40px" }}
                fontWeight={700}
                lineHeight="normal"
              >
                Learn The Art of Sound Design
              </Heading>
              <Button bg="brand.red" borderRadius="10px" color="brand.white">
                Demo Lesson
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
      <GithubCTA />
    </Box>
  );
};

export default HeroSection;
