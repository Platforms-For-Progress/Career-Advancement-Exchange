import { Heading, Box, Input, Button, HStack, IconButton, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import fontWrapper from "../google-fonts.json"

import {AiOutlineMinus} from 'react-icons/ai';

const FontView = (props) => {
    const [fonts, setFonts] = useState(props.value);
    
    const addInp = () => {
        setFonts(
            [
                ...fonts,
                'Select Font'
            ]
        )
    }

    const onInpChange = (e) => {
        e.preventDefault();
        const ts = fonts.slice();
        ts[e.target.id] = e.target.value;
        setFonts(ts);
    }

    const submitVals = () => {
        props.setValue(fonts);
    }

    const removeInp = (i) => {
        setFonts([...fonts.slice(0, i), ...fonts.slice(i + 1)]);
    }

    return (
        <Flex align='center' m={4} gap ={5} direction='column' >
            <Heading>Please select the fonts you want to use below:</Heading>
            <Flex heehee={fonts} gap={5} direction='column'>
                {
                    fonts.map((site, i) => {
                        return (
                            <HStack>
                                <Select value={fonts[i]} id={i} onChange={(e) => onInpChange(e)}>
                                    {
                                        fontWrapper.items.map((item) => {
                                            return (
                                                <option value={item.family}>{item.family}</option>
                                            )
                                        })
                                    }
                                </Select>
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

export default FontView;