import { Box, Text, Image } from '@chakra-ui/react'
import design2 from './assets/controller/design2.png'

export const ControllerPanel = () => {
  return (
    <Box>
      <Text fontSize="1.5rem" mb={'1rem'}>
        Under construction!
      </Text>
      <Image maxW="80%" src={design2} />
    </Box>
  )
}
