import { Box, Image, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import overview from './assets/howToPlay/overview.png'
import { namespaces } from './i18n/i18n.constants'

export function HowToPlayPanel() {
  const { t } = useTranslation(namespaces.common)

  return (
    <Box>
      <Text mb={'1rem'} fontSize="1.5rem">
        {t('construction')}
      </Text>
      <Image maxW="60%" src={overview} />
    </Box>
  )
}
