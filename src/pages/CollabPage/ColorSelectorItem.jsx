import { Circle } from "@chakra-ui/react";
import React from "react";

const ColorSelectorItem = (props) => {
    return (
        <Circle h = '4vh' w='4vh' bg={props.c} onClick={() => props.oc(props.c)} 
            style={{
                border: '1px solid #C3C3C3'
            }}>

        </Circle>
    )
}

export default ColorSelectorItem;