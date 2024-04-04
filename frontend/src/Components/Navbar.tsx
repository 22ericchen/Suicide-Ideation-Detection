import React from "react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      p="4"
      bg="nugray.700"
      width="full"
      maxH="75px"
      shadow="md"
    >
      <Spacer />
      <Flex gap={4}>
        <Button
          colorScheme="nured"
          color="white"
          width="100px"
          as={RouterLink}
          to="/results"
        >
          Results
        </Button>
        <Button
          colorScheme="nured"
          width="100px"
          color="white"
          as={RouterLink}
          to="/detect"
        >
          Detect
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
