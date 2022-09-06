import { Box, Image, Text } from '@chakra-ui/react'
import overview from './assets/howToPlay/overview.png'

export const HowToPlayPanel = () => {
  return (
    <Box>
      <Text mb={'1rem'} fontSize="1.5rem">
        Under construction!
      </Text>
      <Image maxW="60%" src={overview} />
    </Box>
  )
}
