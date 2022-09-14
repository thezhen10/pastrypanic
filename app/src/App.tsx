import {
  ChakraProvider,
  Grid,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  theme,
} from '@chakra-ui/react'
import { AboutPanel } from './AboutPanel'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { ControllerPanel } from './ControllerPanel'
import { HowToPlayPanel } from './HowToPlayPanel'
import { useTranslation } from 'react-i18next'
import { namespaces } from './i18n/i18n.constants'

export function App() {
  const { t, i18n } = useTranslation(namespaces.pages.hello)
  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Select onChange={changeLanguage} variant="filled" size={'md'}>
          <option value="en">🇬🇧 English</option>
          <option value="jp">🇯🇵 日本語</option>
        </Select>
        <Tabs variant="solid-rounded" colorScheme="blue" align="center">
          <TabList>
            <Tab fontSize={'2rem'}>About</Tab>
            <Tab fontSize={'2rem'}>How To Play</Tab>
            <Tab fontSize={'2rem'}>Controller</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AboutPanel />
            </TabPanel>
            <TabPanel>
              <HowToPlayPanel />
            </TabPanel>
            <TabPanel>
              <Text>
                <ControllerPanel />
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Grid>
    </ChakraProvider>
  )
}
