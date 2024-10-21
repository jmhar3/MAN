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
  useToken,
  useBoolean,
} from "@chakra-ui/react";
import { BiCamera } from "react-icons/bi";

interface TestimonialProps {
  image: string;
  name: string;
  testimonial: string[];
}
export const TestimonialModal = (props: TestimonialProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [green900] = useToken("colors", ["green.900"]);

  const [showPhotos, setShowPhotos] = useBoolean();

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
            {showPhotos && <Img src={props.image} />}
            <Flex align="center" gap="5">
              <Heading color="green.900">{props.name}</Heading>
              <Divider borderColor="green.900" />
              <Button
                w="25%"
                size="sm"
                bg="none"
                color="green.900"
                _hover={{
                  bg: "green.900",
                  color: "brand.white",
                }}
                leftIcon={<BiCamera />}
                onClick={setShowPhotos.toggle}
                border={`solid 1px ${green900}`}
              >
                {showPhotos ? "Hide" : "View"} Photos
              </Button>
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
