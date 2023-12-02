import { marginX } from "@/app/constants";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
} from "@chakra-ui/react";

const posts = [
  {
    id: 1,
    title: "How To Use Drum Machine in Logic Pro X",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    image: "/post1.jpg",
    tag: "DAWE",
    date: "2021-03-21",
  },
  {
    id: 2,
    title: "How To Mix Guitars Effectively",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    image: "/post2.jpg",
    tag: "Mixing",
    date: "2021-04-21",
  },
  {
    id: 3,
    title: "The Real Power of Harmonies in Music Production",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    image: "/post3.jpg",
    tag: "Vox",
    date: "2021-04-21",
  },
];

const LatestPosts = () => {
  return (
    <Box bg="brand.pink" py="80px">
      <Stack gap={6} marginX={marginX}>
        <Heading
          fontWeight={900}
          _after={{
            content: '""',
            display: "block",
            width: "60px",
            height: "4px",
            marginTop: "10px",
            bg: "brand.yellow",
          }}
          fontSize="40px"
          color="brand.white"
        >
          Latest Posts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {posts.map((post) => (
            <Stack
              key={post.id}
              borderRadius="lg"
              pos="relative"
              overflow="hidden"
              bg="brand.white"
              pb="4rem"
              gap={3}
            >
              <Box height="200px" overflow="hidden">
                <Image
                  src={post.image}
                  width="100%"
                  transition="transform .3s ease-in-out"
                  h="100%"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  objectFit="cover"
                  borderBottomRadius="lg"
                  alt={post.title}
                />
              </Box>

              <Heading
                mx=".3rem"
                as="h3"
                fontSize="21px"
                fontWeight="bold"
                fontFamily="Alegreya"
              >
                {post.title}
              </Heading>
              <Tag
                pos="absolute"
                top={2}
                right={2}
                size="sm"
                variant="solid"
                colorScheme="gray"
              >
                {post.tag}
              </Tag>
            </Stack>
          ))}
        </SimpleGrid>
        <Button
          w="fit-content"
          alignSelf="flex-end"
          p="4px 32px"
          bg="brand.white"
          borderRadius="10px"
          fontFamily="Alegreya"
          fontSize="16px"
          fontWeight={700}
        >
          All Posts
        </Button>
      </Stack>
    </Box>
  );
};

export default LatestPosts;
