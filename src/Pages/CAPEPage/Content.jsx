import React from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, Box, Text, Link, StackDivider } from '@chakra-ui/react'
import weekLesson from "./weekLessons.json"
import weekResources from "./weekResources.json"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CAPEResources = ({week}) => {
    return (
        <>
        {Object.keys(weekResources[week.substring(5)][0]).map((title) => {
            const obj = weekResources[week.substring(5)][0]
            return (
            <Card key={title}>
                <CardBody boxShadow={"0px 0px 10px 0px #e1e3e3"} background={"#f0a89e"} borderRadius={"5px"} minWidth={"250px"} maxWidth={"500px"}>
                    <CardHeader>
                        {(title == "Lesson Slides") 
                        ? 
                        <Box>
                            <Heading fontWeight={500} fontSize={"lg"}>{title}</Heading> 
                            <Text paddingTop={"5px"}> The lesson slides follow the same order as the lesson videos </Text>
                        </Box>
                        :
                        <Heading fontWeight={500} fontSize={"lg"}>{title}</Heading> 
                        }
                    </CardHeader>
                    <Stack direction={"column"}>
                        <ResourcesLinks obj={obj} title={title}/> {/* Displays the links for each individual card */}
                    </Stack>
                </CardBody>
            </Card>
            )
        })}
        </>
    )
}

const ResourcesLinks = ({obj, title}) => {
    const resource = obj[title]                  // this has be a bug
    if (typeof(resource) == "string") {
        return (
            <Link fontSize={"sm"} href={obj[title]} isExternal key={obj[title]} paddingLeft={"5"} _hover={{bg: "#FDC0C0", borderRadius: "5px"}}> 
                {obj[title]} {<ExternalLinkIcon/>}
            </Link>
        )
    } else {
        return (
            resource.map((link) => {
                return (
                    <Link fontSize={"sm"} href={link} isExternal key={link} paddingLeft={"5"} _hover={{bg: "#FDC0C0", borderRadius: "5px"}}> 
                        {link} {<ExternalLinkIcon/>}
                    </Link>
                )
            })
        )
    }
}

const CAPELessons = ({week}) => {
    return (
        <>
        {Object.keys(weekLesson[week.substring(5)]).map((lesson) => {
            return (
            <Stack key={lesson} direction={"column"}>
                <Heading fontWeight={500}  fontSize={"lg"}> {weekLesson[week.substring(5)][lesson].Title} </Heading>
                <Box paddingLeft={"5"}>
                    <Text fontSize={"sm"} paddingBottom={"2"}>
                        {weekLesson[week.substring(5)][lesson].Description}
                    </Text>
                    <Link href={weekLesson[week.substring(5)][lesson].Video} isExternal _hover={{bg: "#FDC0C0", borderRadius: "5px"}} padding={"2"}>
                        Video <ExternalLinkIcon/>
                    </Link>
                </Box>
            </Stack>
            )
        })}
        </>
    )
}

const Content = ({week}) => {
    return (
        <Stack direction={{sm: "column", md: "column", lg: "row"}} spacing={"40"}>
            <Box>
            <Heading fontWeight={400} bg={"#f2bfb8"} paddingBottom={"5px"} fontSize={"2xl"} width={"fit-content"} position={"relative"} padding={"3"} borderRadius={"5px"} boxShadow={"0px -0.5px 10px 0px #e1e3e3"} marginBottom={"5"}>Lesson Videos</Heading>
            <Card >
                <CardBody boxShadow={"0px 0px 10px 0px #e1e3e3"} background={"#f0a89e"} borderRadius={"5px"} padding={5} minWidth={"250px"} maxWidth={"500px"}>
                    <Stack spacing={"3"}>
                        <CAPELessons week={week}/> {/* Displays the content for each Lesson Video */}
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            
            <Box>
                <Heading fontWeight={450} bg={"#f2bfb8"} paddingBottom={"5px"} fontSize={"2xl"} width={"fit-content"} position={"relative"} padding={"3"} borderRadius={"5px"} boxShadow={"0px -0.5px 10px 0px #e1e3e3"} marginBottom={"5"}>Lesson Resources</Heading>
                <Stack spacing={"5"} direction={"column"}>
                    <CAPEResources week={week}/>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Content
