"use client";

import { marginX } from "@/app/constants";
import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const icons = [
  {
    id: 1,
    name: "facebook",
    icon: FiFacebook,
    color: "#4267B2",
  },
  {
    id: 2,
    name: "Twitter",
    icon: FaTwitter,
    color: "#1DA1F2",
  },
  {
    id: 3,
    name: "Instagram",
    icon: AiFillInstagram,
    color: "#E1306C",
  },
];

const Footer = () => {
  return (
    <Box bg="brand.black" pt="80px">
      <SimpleGrid
        marginX={marginX}
        gap={6}
        mb="4rem"
        columns={{ base: 1, sm: 2, md: 3 }}
      >
        <Stack gap={4} align="center">
          <Heading color="brand.white" fontWeight={800} fontSize="16px">
            Sound
            <Box as="span" color="brand.red">
              Dzing
            </Box>
          </Heading>
          <Flex gap={2}>
            {icons.map((icon) => (
              <Box key={icon.id}>
                <Icon as={icon.icon} color={icon.color} boxSize={6} />
              </Box>
            ))}
          </Flex>
        </Stack>
        <Stack align="center">
          <Heading
            color="brand.red"
            fontSize="18px"
            fontWeight={700}
            fontFamily="Alegreya"
          >
            Quick Links
          </Heading>
          <Text fontFamily="Alegreya" fontSize="16px" fontWeight={400}>
            Blog
          </Text>
          <Text fontFamily="Alegreya" fontSize="16px" fontWeight={400}>
            Privacy policy
          </Text>
        </Stack>
        <Stack align="center">
          <Heading
            color="brand.red"
            fontSize="18px"
            fontWeight={700}
            fontFamily="Alegreya"
          >
            Contact Us
          </Heading>
          <Text fontFamily="Alegreya" fontSize="16px" fontWeight={400}>
            contact@gmail.com
          </Text>
          <Text fontFamily="Alegreya" fontSize="16px" fontWeight={400}>
            +254797153028
          </Text>
        </Stack>
      </SimpleGrid>
      <Flex color="brand.white" marginX={marginX} py="1rem">
        <Text color="brand.white" opacity={0.5}>
          This website is designed by Douglas Obara © 2023. Developed with{" "}
          <Icon as={FaHeart} color="brand.red" /> by{" "}
          <Link href="https://github.com/bonface221">bonface221</Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
