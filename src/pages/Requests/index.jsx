import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue
} from '@chakra-ui/react';
import Status from './Status';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import MessageAdmin from './MessageAdmin';

const TAB_DATA = [
  { label: 'Status', component: <Status /> },
  
];
const RequestHome = () => {
  return (
    <Box
      // bgGradient="linear(to-l, brand_pink.300, brand.400)"
      minH="95vh"
      p={4}>
      <Tabs colorScheme="brand" variant="soft-rounded" align="center">
        <TabList>
          {TAB_DATA.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {TAB_DATA.map((tab, index) => (
            <TabPanel key={index}>{tab.component}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RequestHome;
