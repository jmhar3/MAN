import * as React from "react";
import {
  Img,
  Stack,
  Text,
  Flex,
  Heading,
  Divider,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

interface ImageProps {
  image: string;
  name: string;
  location?: string;
}
export const ImageModal = (props: ImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Img src={props.image} onClick={onOpen} cursor="pointer" />

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
            <Text>{props.location}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
