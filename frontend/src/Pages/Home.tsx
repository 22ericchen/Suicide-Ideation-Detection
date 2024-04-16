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
            This web app shows the results of training our three different
            language models. You can also classify any input sentence and choose
            which model to use!
          </Text>
          <Text pt="60px" textAlign="center" fontSize="12px" color="nugray.50">
            Created by Matthew Wang, Jessica Zhao, and Eric Chen
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Home;
