import { Box, Button, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import Navbar from "../navbar";

const HeroSection = () => {
  return (
    <Stack
      bgImage="/home-bg.jpg"
      h="95vh"
      objectFit="cover"
      overflow="hidden"
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
        zIndex: 999,
      }}
    >
      <Stack zIndex={9999} h="100%">
        <Navbar />
        <Grid
          gridTemplateColumns="1fr 1fr 1fr 400px 1fr"
          gridTemplateRows="1fr 1fr max-content"
          gap={4}
          h="100%"
        >
          <GridItem
            gridRowStart={3}
            gridRowEnd={10}
            gridColumn="4/5"
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
                fontSize="40px"
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
    </Stack>
  );
};

export default HeroSection;
