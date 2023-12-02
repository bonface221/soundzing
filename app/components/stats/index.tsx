import { marginX } from "@/app/constants";
import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const statsData = [
  {
    id: 1,
    img: "/student.svg",
    number: "23,000+",
    text: "Students",
  },
  {
    id: 2,
    img: "/video.svg",
    number: "26 Hrs",
    text: "Video Content",
  },
];

const Stats = () => {
  return (
    <Box bg="brand.gray" py="140px">
      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        mx={marginX}
        spacing={{ base: 10, sm: 20 }}
        pos="relative"
        _before={{
          content: "url('/angle-red.svg')",
          position: "absolute",
          top: -12,
          left: 10,
        }}
      >
        {statsData.map((item) => (
          <Stack key={item.id} justifySelf="center" gap={4} align="center">
            <Box>
              <Image boxSize="100px" src={item.img} alt="student" />
              <Text fontWeight={900} fontSize="40px">
                23,000+
              </Text>
              <Text fontWeight={700} fontSize="30px" fontFamily="Alegreya">
                Students
              </Text>
            </Box>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Stats;
