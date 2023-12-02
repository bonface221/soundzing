import { Box, Heading, SimpleGrid, Stack, Tag } from "@chakra-ui/react";
import Image from "next/image";

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
    <Box>
      <Heading>Latest Posts</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {posts.map((post) => (
          <Stack key={post.id} pos="relative">
            <Box>
              <Image
                src={post.image}
                width={446}
                height="200"
                alt={post.title}
              />
            </Box>
            <Heading
              as="h3"
              fontSize="18px"
              fontWeight="bold"
              fontFamily="Alegreya"
            >
              {post.title}
            </Heading>
            <Tag
              pos="absolute"
              top={0}
              right={0}
              size="sm"
              variant="solid"
              colorScheme="gray"
            />
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LatestPosts;
