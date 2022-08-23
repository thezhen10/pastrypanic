import {
  Box,
  ChakraProvider,
  Grid,
  Image,
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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
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
    </Box>
  </ChakraProvider>
)
