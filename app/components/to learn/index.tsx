import { marginX } from "@/app/constants";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const listItems = [
  "What are Frequencies?",
  "Using DAW",
  "Vocals Processing",
  "Mixing",
  "Mixing Console",
  "Mastering",
];

const WhatYouWillLearn = () => {
  return (
    <Box bg="brand.black">
      <Box marginX={marginX} py={{ base: "6rem", sm: "10rem" }}>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(1fr,100px,1fr)" }}
          gap="30px"
        >
          <GridItem display="flex" flexDir="column" gap={3}>
            <Heading
              fontSize="40px"
              fontWeight={900}
              color="brand.white"
              _after={{
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                marginTop: "10px",
                bg: "brand.red",
              }}
            >
              What will you learn?
            </Heading>
            <UnorderedList color="brand.red">
              {listItems.map((item, i) => (
                <ListItem
                  key={i}
                  color="brand.white"
                  fontSize="20px"
                  fontFamily="Alegreya"
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </GridItem>
          <GridItem w="100%" pos="relative" gridColumn={{ base: 1, md: 3 }}>
            {/* Add a angle like in the end of the corner of the image */}
            <Box maxW="590px" maxH="350px">
              <Image
                objectFit="cover"
                w="100%"
                height="100%"
                src="/to-learn.jpg"
                alt="what to learn image"
              />
            </Box>
            <Box
              position="absolute"
              bottom={{ base: -10, sm: -20 }}
              right={{ base: -4, md: -5 }}
            >
              <Image src="/angle-yellow.svg" alt="angle" />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhatYouWillLearn;
