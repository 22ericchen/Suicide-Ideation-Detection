import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import { useState } from "react";

const Detect = () => {
  const [type, setType] = useState("");
  const [sentence, setSentence] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [prediction, setPrediction] = useState("");

  const toast = useToast();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!type) {
      toast({
        title: "Model type not selected",
        description: "Please select a model type",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
    } else if (!sentence) {
      toast({
        title: "Sentence not entered",
        description: "Please enter a sentence",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      setSubmitted(true);
      try {
        const response = await fetch("http://localhost:5000/detect", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type, sentence }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        setPrediction(responseData["prediction"]);
        setGenerated(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Flex flexDir="column" align="center">
      <Navbar />
      {!submitted && (
        <Flex
          align="center"
          justify="center"
          bg="nugray.600"
          padding="8"
          width="500px"
          rounded="md"
          shadow="md"
          mt="50px"
          flexDir="column"
        >
          <Heading size="md" textAlign="center">
            Detect Suicide Ideation
          </Heading>
          <form onSubmit={onSubmit}>
            <Flex mt="20px" flexDir="column" justify="center" align="center">
              <FormLabel textAlign="center">Select model type:</FormLabel>
              <RadioGroup
                colorScheme="nured"
                onChange={(value) => setType(value)}
                value={type}
              >
                <Stack direction="row">
                  <Radio value="lr">Logistic Regression</Radio>
                  <Radio value="lstm">LSTM</Radio>
                  <Radio value="trans">Transformer</Radio>
                </Stack>
              </RadioGroup>
              <FormLabel pt="30px" textAlign="center">
                Enter sentence:
              </FormLabel>
              <Textarea
                value={sentence}
                width="300px"
                onChange={(e) => setSentence(e.target.value)}
              />
              <Button mt="50px" colorScheme="nured" color="white" type="submit">
                Classify
              </Button>
            </Flex>
          </form>
        </Flex>
      )}
      {submitted && !generated && <Loading />}
      {generated && (
        <Flex
          align="center"
          justify="center"
          bg="nugray.600"
          padding="8"
          width="300px"
          rounded="md"
          shadow="md"
          mt="50px"
          flexDir="column"
        >
          <Heading size="md" textAlign="center">
            Prediction:
          </Heading>
          <Text textAlign="center" pt="10px">
            {prediction.substring(5)}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Detect;
