import { Heading, Box, Input, Button, HStack, IconButton, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import {AiOutlineMinus} from 'react-icons/ai';

const InspirationInput = (props) => {
    const [sites, setSites] = useState(props.value);
    
    const addInp = () => {
        setSites(
            [
                ...sites,
                ''
            ]
        )
    }

    const onInpChange = (e) => {
        e.preventDefault();
        const ts = sites.slice();
        ts[e.target.id] = e.target.value;
        setSites(ts);
    }

    const submitVals = () => {
        props.setValue(sites);
    }

    const removeInp = (i) => {
        setSites([...sites.slice(0, i), ...sites.slice(i + 1)]);
    }

    return (
        <Flex align='center' m={4} gap ={5} direction='column' >
            <Heading>Please enter the websites that inspired you below:</Heading>
            <Flex heehee={sites} gap={5} direction='column'>
                {
                    sites.map((site, i) => {
                        return (
                            <HStack>
                                <Input value={sites[i]} id={i} onChange={(e) => onInpChange(e)}></Input>
                                <IconButton bg='red.400' textColor={'white'} onClick={() => removeInp(i)} icon={<AiOutlineMinus ></AiOutlineMinus>}></IconButton>
                            </HStack>
                        );
                    })
                }
            </Flex>
            <Button onClick={addInp}>+</Button>
            <Button onClick={submitVals}>Save</Button>
        </Flex>
    )
}

export default InspirationInput;