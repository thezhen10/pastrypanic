import { Box, Text, Image } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import design2 from './assets/controller/design2.png'
import { namespaces } from './i18n/i18n.constants'

export const ControllerPanel = () => {
  const { t } = useTranslation(namespaces.common)

  return (
    <Box>
      <Text fontSize="1.5rem" mb={'1rem'}>
        {t('construction')}
      </Text>
      <Image maxW="80%" src={design2} />
    </Box>
  )
}
