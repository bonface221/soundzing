import { marginX } from "@/app/constants";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

const testimonials = [
  {
    id: 1,
    name: "Arlene McCoy",
    testimonial: "This is a great course, I got to learn a lot",
    image: "/t1.jpg",
  },
  {
    id: 2,
    name: "Esther Howard",
    testimonial:
      "I got to learn a lot about Music Production with this course. Thanks",
    image: "/t2.jpg",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    testimonial: "Awesome! Great job!!",
    image: "/t3.jpg",
  },
];

const Testimonials = () => {
  return (
    <Box bg="brand.gray" py="80px">
      <Stack gap={12} marginX={marginX}>
        <Heading
          fontWeight={900}
          _after={{
            content: '""',
            display: "block",
            width: "60px",
            height: "4px",
            marginTop: "10px",
            bg: "brand.red",
          }}
          fontSize="40px"
          color="brand.white"
        >
          What our students say?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {testimonials.map((author) => (
            <Stack key={author.id} pb="4rem" gap={4} align="center">
              <Box>
                <Image
                  src={author.image}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="lg"
                  alt={author.name}
                />
              </Box>
              <Heading
                color="brand.white"
                fontSize="20px"
                fontWeight={700}
                fontFamily="Alegreya"
              >
                {author.name}
              </Heading>
              <Text
                maxW="80%"
                textAlign="center"
                fontSize="16px"
                fontWeight="400"
              >
                {author.testimonial}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Testimonials;
