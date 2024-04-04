import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex align="center" justify="center" pt="50px">
        <VStack
          bg="nugray.600"
          spacing={4}
          p={8}
          shadow="md"
          rounded="md"
          maxW="500px"
        >
          <Heading size="lg" textAlign="center">
            Welcome to our Suicide Ideation Detection project!
          </Heading>
          <Text textAlign="center">
            Placeholder placeholder placeholder placeholder placeholder
            placeholder placeholder placeholder placeholder placeholder
            placeholder placeholder placeholder placeholder.
          </Text>
          <Text pt="100px" textAlign="center" fontSize="12px" color="nugray.50">
            Created by Matthew Wang, Jessica Zhao, and Eric Chen
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Home;
