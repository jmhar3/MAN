import * as React from "react";
import { SectionContainer } from "./SectionContainer";
import { TestimonialModal } from "./TestimonialModal";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./CarouselDots";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";

const testimonials = [
  {
    image: "/nature.png",
    name: "Wilful.Willow",
    testimonial: [
      "My first experience standing in front of a camera was with M.A.N. The end result was photos more beautiful than any that have been taken to this day, even though I had no clue how to stand or pose in front of a camera. I will always remember that experience and every subsequent interaction and photo shoot with great fondness due to M.A.N’s personable, gentle and fun-loving humorous nature. I would recommend him 100 times over and will continue to work with him in the future.",
    ],
  },
  {
    image: "/nature.png",
    name: "TheChelseaPolizzi",
    testimonial: [
      "Working with M.A.N was such a great experience, we got to create some amazing work together. I was always super comfortable especially doing nude work. Always directed me without hesitation. It was really nice to work with someone who was nice and easy to click with. I'm always eager to work with him again!",
    ],
  },
  {
    image: "/nature.png",
    name: "R",
    testimonial: [
      "Having worked with MAN multiple times over the course of a year there are so many words of praise that I struggle to even bring about because there are so many.",
      "My first ever shoot was with MAN. Both his friendliness and matter of fact way of speaking about photography immediately puts you at ease. He is a true professional who wants the best out of himself for every shoot, and that in turn brings out your own best being in front of his camera. The direction he gives you is so clear and you can tell it's from passion to achieve the best shot he can.",
      "You can watch the man behind MAN mull over his choice of location, lighting and composition with true skill and genuine thought.This coupled with his good nature and humour makes for a fantastic shooting experience. His feedback and direction to the people he is working with is always incredibly valuable. If you are novice to how photography works you learn more about the art (but I suspect he could teach even the most experienced photographers a thing or two) but this in turn makes you a better model. So not only will working with MAN provide amazing photographs but it'll elevate future shoots you plan to do. When you get a photo set back from MAN you might want to set aside a good amount of time because I guarantee you will bask in every detail of the amazing art he has delivered you.",
      "A truely 10/10 experience in every aspect of his work and working with him. A true professional with genuine passion for his craft.",
    ],
  },
  {
    image: "/nature.png",
    name: "The Jungle Gypsy",
    testimonial: [
      "I’d only ever been photographed a handful of times previously and I feel like before I’d even gotten the chance to step in front of your lens you put whatever insecurities I had at ease. Though you’re well over a foot taller than me the space you hold has always felt safe and trusting and I believe part of that is from the relationship you helped build between us before ever meeting.You took the time to find out who I was and what past experiences I’d had when it came to photographers and showed me nothing but kindness and understanding.",
      "Unlike me, you’re quite structured in the way you shoot. Setting up the exact moments and details you want to capture with a confidence that flowed from you to me without hesitation. Gosh, you could tell me to get into negative degree waters and I’d know that it would be worth it if not just for one amazing shot. Hahaha",
      "You have these incredible visions that you bring to life but being a creative myself, I’ve loved that you’ve opened up the floor for me to voice how I’m craving to be captured and you find a way to collaborate our ideas and turn them into art. It’s never been just about what you want and you make it known.",
      "I truly cannot wait to see what we can create in the future.",
    ],
  },
  {
    image: "/nature.png",
    name: "F0x Hunt",
    testimonial: [
      "From the initial consultation, to the day of the shoot, my experience with M.A.N felt supported, safe and empowering. Even though it was my first time in front of a camera in this type of setting, I felt super comfortable and loved the direction he gave to ensure we were getting all the amazing angles we needed to capture the shot I was after.",
      "Besides making me feel great, the shoot also taught me so much about photography and how to work with and highlight my favourite parts of my body. A wonderful experience, highly recommend working with M.A.N!",
    ],
  },
  {
    image: "/nature.png",
    name: "Jane Korneyko",
    testimonial: [
      'I was nervous enough to have postponed the shoot with M.A.N at least twice, feeling silly not knowing how to pose or look "sexy" considering the models he would have worked with. Later, I realised I should never have felt that way in the first place as M.A.N made me feel completely at ease before and throughout the shoot.',
      "Helping with angles and poses that worked for my body, the natural light in my apartment and the look I was going for, he interpreted my brief perfectly making me look and feel beautiful, both during the shoot and in the stunning photos.",
    ],
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ stopOnMouseEnter: true }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <SectionContainer label="Testimonials" colorScheme="light">
      <Box ref={emblaRef} className="embla" overflow="hidden" pb="5">
        <Flex className="embla__container">
          {testimonials.map((props) => (
            <Stack className="embla__slide" flex="0 0 30%" minW="0" pr="8">
              <Img src={props.image} />
              <Flex align="center">
                <Heading w="50%" fontFamily="Jost" fontSize="xl">
                  {props.name}
                </Heading>
                <Divider borderColor="brand.800" />
              </Flex>
              <Text>{props.testimonial[0].slice(0, 150)}...</Text>
              <Box textAlign="right">
                <TestimonialModal {...props} />
              </Box>
            </Stack>
          ))}
        </Flex>
      </Box>
      <Flex className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            isSelected={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
            className="embla__dot"
          />
        ))}
      </Flex>
    </SectionContainer>
  );
};
