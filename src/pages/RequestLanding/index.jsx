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
    useColorModeValue,
    
} from '@chakra-ui/react';
import Status from '../Status';
const reqLanding = () => {
    return (
        <Box 
        // bgGradient="linear(to-l, brand_pink.300, brand.400)"
        minH="95vh"
        p={4}
        >
            <Tabs colorScheme='brand' variant='soft-rounded' align='center'>
            <TabList>
                <Tab>Status</Tab>
                
                <Tab>Message Admins</Tab>
                <Tab>Delete Request</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                < Status />
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
                <TabPanel>
                <p>four!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
            
            
        </Box>

    );
    }

export default reqLanding;