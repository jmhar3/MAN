import * as React from "react";
import {
  Img,
  Stack,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  useToken,
  Flex,
} from "@chakra-ui/react";

interface ExampleProps {
  images: string[];
  description: string;
}
export const ExampleModal = (props: ExampleProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [green900] = useToken("colors", ["green.900"]);
  const [focusImage, setFocusImage] = React.useState<string>();

  return (
    <>
      <Button
        size="sm"
        onClick={onOpen}
        w="fit-content"
        bg="brand.white"
        color="green.900"
        _hover={{
          bg: "green.900",
          color: "brand.white",
        }}
        border={`solid 1px ${green900}`}
      >
        See Examples
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
            {focusImage && (
              <Img src={focusImage} onClick={() => setFocusImage(undefined)} />
            )}
            {props.images.map((image) => (
              <Flex>
                <Img w="25%" src={image} onClick={() => setFocusImage(image)} />
              </Flex>
            ))}
            <Text>{props.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
