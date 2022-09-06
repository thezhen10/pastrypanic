import { AspectRatio, Box, Image, VStack } from '@chakra-ui/react'
import { AboutContent } from './AboutContent'
import titleSplash from './assets/about/title_splash.png'

export const AboutPanel = () => {
  return (
    <Box>
      <Image maxW="70%" src={titleSplash} mb={'1rem'} />
      <AspectRatio maxW="70%" mb="1.5rem">
        <iframe
          src="https://www.youtube.com/embed/osXbGp-uZPs"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      <VStack maxW="70%" spacing={'3rem'} fontSize={'2rem'} align="center">
        <AboutContent />
      </VStack>
    </Box>
  )
}
