import * as React from "react";
import {
  Img,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Heading,
  Flex,
  Divider,
} from "@chakra-ui/react";

interface TestimonialProps {
  image: string;
  name: string;
  testimonial: string[];
}
export const TestimonialModal = (props: TestimonialProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="link" color="green.900" onClick={onOpen}>
        Read more...
      </Button>

      <Modal
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          backdropFilter="blur(2px)"
          backgroundColor="rgba(244,245,241,0.85)"
        >
          <ModalBody as={Stack} gap="4" p="5">
            <Img src={props.image} />
            <Flex align="center" gap="5">
              <Heading color="green.900">{props.name}</Heading>
              <Divider borderColor="green.900" />
            </Flex>
            {props.testimonial.map((paragraph) => (
              <Text>{paragraph}</Text>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
