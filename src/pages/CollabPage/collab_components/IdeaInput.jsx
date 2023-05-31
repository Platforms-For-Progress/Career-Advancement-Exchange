import { Flex, Textarea, Heading, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const IdeaInput = (props) => {
    const [ideas, setIdeas] = useState(props.value);
    
    const submitData = () => {
        props.setValue(ideas);
    }

    return (
        <Flex align='center' m={4} gap ={5} direction='column' >
            <Heading>Please enter any ideas you have for the website below:</Heading>

            <Textarea onChange={(e) => setIdeas(e.target.value)}></Textarea>

            <Button onClick={submitData}>Save</Button>
        </Flex>
    )
}

export default IdeaInput;