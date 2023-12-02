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
      <Grid
        gridTemplateColumns="repeat(1fr, 100px,1fr)"
        py="80px"
        mx={marginX}
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
        <GridItem w="100%" gridColumn={3}>
          {/* Add a angle like in the end of the corner of the image */}
          <Box
            pos="relative"
            _after={{
              content: "url('/angle-yellow.svg')",
              position: "absolute",
              bottom: -12,
              right: 10,
            }}
          >
            <Image
              w="590px"
              h="350px"
              objectFit="cover"
              src="/to-learn.jpg"
              alt="what to learn image"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WhatYouWillLearn;
