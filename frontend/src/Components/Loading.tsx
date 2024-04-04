import { Flex, Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      direction="column"
      width="full"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="nugray.200"
        color="nured.300"
        size="xl"
      />
      <Text mt="10px" fontSize="20px">
        Loading...
      </Text>
      <Text fontSize="14px">This may take a minute</Text>
    </Flex>
  );
};

export default Loading;
