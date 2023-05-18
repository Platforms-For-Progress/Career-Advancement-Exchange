
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

    useColorModeValue,

} from '@chakra-ui/react';


export default function Status() {
    return (
        <Box
        maxW="100vw"
        minH = "95vh"
        mx={'auto'}
        py={5}
        px={6}
        >
            <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            >
                <Box
                w="100%"
                p={4}
                >
                    <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="black"
                    textAlign="center"
                    mt="10vh"
                    >
                        Your request has been submitted!
                    </Text>
                    <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="black"
                    textAlign="center"
                    mt="10vh"
                    >
                        We will get back to you soon!

                    </Text>
                </Box>
            </Flex>
        </Box>

    );
}