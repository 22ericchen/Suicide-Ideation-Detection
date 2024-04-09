import { Flex, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Results = () => {
  const LR = require("../Assets/LR.png");
  const LSTM = require("../Assets/LSTM.png");
  const Transformer = require("../Assets/TF.png");

  return (
    <Flex flexDir="column" align="center">
      <Navbar />
      <Heading size="lg" mt="20px">
        Results
      </Heading>
      <HStack spacing="5" mt="10px">
        <VStack>
          <Heading size="md">Logistic Regression</Heading>
          <Image src={LR} width="360px" />
        </VStack>
        <VStack>
          <Heading size="md">LSTM</Heading>
          <Image src={LSTM} width="360px" />
        </VStack>
        <VStack>
          <Heading size="md">Transformer</Heading>
          <Image src={Transformer} width="360px" />
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Results;
