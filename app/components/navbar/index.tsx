import { marginX } from "@/app/constants";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

// course Details Blog Testimonials
const navItems = [
  {
    id: 1,
    text: "About",
    link: "#about",
  },
  {
    id: 2,
    text: "Courses",
    link: "#courses",
  },
  {
    id: 3,
    text: "Blog",
    link: "#blog",
  },
  {
    id: 4,
    text: "Testimonials",
    link: "#testimonials",
  },
];

const Navbar = () => {
  return (
    <Box>
      <Flex
        bg="rgba(0, 0, 0, 0.50)"
        backdropFilter="blur(20px)"
        justify="space-between"
        marginX={marginX}
        borderRadius="10px"
        p="1.2rem"
        mt="1.3rem"
      >
        <Heading fontSize="3xl" color="brand.white" fontWeight={700}>
          Sound
          <Box as="span" color="brand.red">
            DZing
          </Box>
        </Heading>
        <Flex gap={4}>
          {navItems.map((item) => (
            <Text key={item.id} fontSize="xl">
              <Link href={item.link}>{item.text}</Link>
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
