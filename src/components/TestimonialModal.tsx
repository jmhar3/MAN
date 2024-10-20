import * as React from "react";
import {
  Img,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
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
          p="2"
          backdropFilter="blur(2px)"
          backgroundColor="rgba(244,245,241,0.85)"
        >
          <ModalHeader>{props.name}</ModalHeader>
          <ModalBody>
            <Stack gap="5" pb="3">
              <Img src={props.image} />
              {props.testimonial.map((paragraph) => (
                <Text>{paragraph}</Text>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
