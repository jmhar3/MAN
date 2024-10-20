import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { Button, Circle, useToken } from "@chakra-ui/react";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

interface PropType extends ComponentPropsWithRef<"button"> {
  isSelected: boolean;
}

export const DotButton: React.FC<PropType> = (props) => {
  const [babyGreen, green900] = useToken("colors", [
    "brand.babyGreen",
    "green.900",
  ]);

  return (
    <Button
      p="0"
      m="0"
      h="fit-content"
      w="fit-content"
      bg="none"
      _hover={{ bg: "none" }}
      {...props}
    >
      <Circle
        bg="brand.200"
        size="20px"
        rounded="full"
        _hover={{ borderColor: "green.900" }}
        border={
          props.isSelected ? `solid 2px ${green900}` : `solid 2px ${babyGreen}`
        }
      />
    </Button>
  );
};
