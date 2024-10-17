import * as React from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";

export const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const isEmailError = email.length === 0;
  const isMessageError = message.length === 0;

  return (
    <Box bg="green.900" p="10" id="contact">
      <Flex align="center" gap="5" pb="3">
        <Heading color="brand.100">Contact</Heading>
        <Divider borderColor="brand.100" />
        <Button
          w="fit-content"
          type="submit"
          bg="brand.200"
          _hover={{ bg: "brand.100" }}
        >
          Send Message
        </Button>
      </Flex>

      <FormControl isInvalid={isEmailError || isMessageError}>
        <Stack gap="6" py="3" divider={<StackDivider color="green.900" />}>
          <Stack direction="row" gap="0" justifyContent="space-between">
            <FormLabel color="brand.100">Preferred Name</FormLabel>
            <Input type="name" bg="brand.100" maxW="60%" />
          </Stack>

          <Stack direction="row" gap="0" justifyContent="space-between">
            <FormLabel color="brand.100">Email * </FormLabel>
            <Stack gap="0" minW="60%">
              <Input
                bg="brand.100"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isEmailError && (
                <FormHelperText color="brand.100">
                  Enter the email you'd like to me to contact you on.
                </FormHelperText>
              )}
            </Stack>
          </Stack>

          <Stack>
            <Stack
              //   pb="3"
              direction="row"
              gap="0"
              justifyContent="space-between"
            >
              <FormLabel color="brand.100">Preferred Package</FormLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="red" value="digital">
                    <Text color="brand.100">Digital</Text>
                  </Radio>
                  <Radio colorScheme="red" value="film">
                    <Text color="brand.100">Film</Text>
                  </Radio>
                  <Radio colorScheme="red" value="complete">
                    <Text color="brand.100">Complete</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>

            <Stack direction="row" gap="0" justifyContent="space-between">
              <FormLabel color="brand.100">Message *</FormLabel>
              <Stack gap="0" minW="60%">
                <Textarea
                  bg="brand.100"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {isMessageError && (
                  <FormHelperText color="brand.100">
                    Enter a message including any questions or booking details.
                  </FormHelperText>
                )}
              </Stack>
            </Stack>

            <Stack
              pt="3"
              direction="row"
              gap="0"
              justifyContent="space-between"
            >
              <FormLabel color="brand.100">Interested in extras</FormLabel>
              <Stack spacing={5} direction="row">
                <Checkbox colorScheme="red" value="digital">
                  <Text color="brand.100">Film</Text>
                </Checkbox>
                <Checkbox colorScheme="red" value="film">
                  <Text color="brand.100">30 min extension</Text>
                </Checkbox>
                <Checkbox colorScheme="red" value="complete">
                  <Text color="brand.100">Additional edits</Text>
                </Checkbox>
                <Checkbox colorScheme="red" value="complete">
                  <Text color="brand.100">All RAWs</Text>
                </Checkbox>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Box position="relative">
          <Divider borderColor="brand.100" />
          <AbsoluteCenter bg="green.900" px="4">
            <Button type="submit" bg="brand.200" _hover={{ bg: "brand.100" }}>
              Send Message
            </Button>
          </AbsoluteCenter>
        </Box>
      </FormControl>
    </Box>
  );
};
