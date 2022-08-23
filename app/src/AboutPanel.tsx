import {
  Text,
  VStack,
  Image,
  HStack,
  Box,
  Center,
  Link,
  Stack,
  Flex,
  AspectRatio,
} from '@chakra-ui/react'

export const AboutPanel = () => {
  return (
    <Box>
      <Image maxW="70%" src="about/title_splash.png" mb={'1rem'} />
      <AspectRatio maxW="70%" mb="1.5rem">
        <iframe
          src="https://www.youtube.com/embed/osXbGp-uZPs"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      <VStack maxW="70%" spacing={'3rem'} fontSize={'2rem'} align="center">
        <Text>
          An arcade style alt.ctrl game with a haptic and physical twist! Also
          comes with a lazy cat. Try to make as much pastry as possible with a
          controller that challenges your ability to manage multiple input
          sliders, each with different haptic feedback.
        </Text>
        <Image maxW="50%" src="about/about1.JPG" />

        <Text>
          Pastry Panic (with cat) is an arcade style game with a physical
          controller that experiments with physicalizing mechanics through
          swapping inputs with distinct haptic feedback.
          <br />
          <br />
          In this single player game, players must swap input sliders that
          represent baking tools in a pastry factory to complete as many
          pastries as possible in a time limit. There are 2 input slots,
          corresponding to the left and right conveyor belts that pastries
          descend from, and 5 baking actions in the game.
        </Text>
        <Image maxW="60%" src="about/about2.png" />
        <Text>
          Each action is executed through a slider with a distinct haptic and
          motion; cutting with a single press, kneading by repeatedly mashing,
          holding the slider down to fill, sprinkling by shaking a slider that
          can get stuck if pushed down too far, and a knob that locks into place
          for baking (just remember to remove it).
          <br />
          <br />
          Incomplete pastries will appear along the belts, and each type of
          pastry requires a different sequence of actions to complete. The
          specific recipes for the pastries are contained in a physical recipe
          book that players must browse.
          <br />
          <br />
          Between juggling sliders, executing inputs, reading recipes, and
          handling two pastries simultaneously, Pastry Panic presents a frantic
          experience where players must consider both the screen and the
          physical space around them for gameplay.
        </Text>
        <Image maxW="60%" src="about/about3.png" />
        <Text>
          <Link color="blue" href="https://gdconf.com/alt-ctrl-gdc" isExternal>
            alt.ctrl.GDC 2022 Audience award winner
          </Link>
          <br />
          Made with techniques developed in{' '}
          <Link
            color="blue"
            href="https://clementzheng.info/Shape-Haptics"
            isExternal
          >
            Shape Haptics
          </Link>
        </Text>
        <Text>Contact - pastrypanicwithcat@gmail.com</Text>
        <Text fontSize={'1.5rem'}>
          Designed and developed by Yong Zhen Zhou, with support from Clement
          Zheng and the Keio-NUS CUTE Center
        </Text>
      </VStack>
    </Box>
  )
}
