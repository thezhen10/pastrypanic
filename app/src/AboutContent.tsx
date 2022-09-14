import { Box, Image, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import about1 from './assets/about/about1.jpg'
import about2 from './assets/about/about2.png'
import about3 from './assets/about/about3.png'
import { namespaces } from './i18n/i18n.constants'

export const AboutContent = (): JSX.Element => {
  const { t } = useTranslation(namespaces.pages.about)

  return (
    <Box>
      <Text>{t('para0')}</Text>
      <Image maxW="50%" src={about1} />
      <Text>
        {t('para1')}
        <br />
        <br />
        {t('para2')}
      </Text>
      <Image maxW="60%" src={about2} />
      <Text>
        {t('para3')}
        <br />
        <br />
        {t('para4')}
        <br />
        <br />
        {t('para5')}
      </Text>
      <Image maxW="60%" src={about3} />
      <Text>
        <Link color="blue" href="https://gdconf.com/alt-ctrl-gdc" isExternal>
          {t('altctrl')}
        </Link>
        <br />
        {t('techniques')}{' '}
        <Link
          color="blue"
          href="https://clementzheng.info/Shape-Haptics"
          isExternal
        >
          Shape Haptics
        </Link>
      </Text>
      <Text>{t('contact')}</Text>
      <Text fontSize={'1.5rem'}>{t('footer')}</Text>
    </Box>
  )
}
