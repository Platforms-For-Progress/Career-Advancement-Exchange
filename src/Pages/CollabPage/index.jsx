import React from 'react';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {RxText} from 'react-icons/rx';
import {BsSquare, BsLink, BsLightbulb, BsUpload} from 'react-icons/bs';
import ColorSelectorItem from './colorSelectorItem';
import Layer from './Layer';


const CollabPage = () => {
    const [color, setColor] = useState('#6D597A');

    const changeColor = (hee) => {
        setColor(hee)
        alert(color);
    }

    return (
        <Flex bg='#EDE0C6' w='full' direction="row" h={window.innerHeight - 61}>
            {/* LEFT SECTION */}
            <Flex bg='#F2E9E4' direction="column" align='center' w='10%' gap='20px' pt='20px' pb='20px'>
                <Layer/>
                <Layer/>
                <Layer/>
                <Layer/>
                <Layer/>
                <AiOutlinePlus size={50}/>
            </Flex>

            {/* MIDDLE SECTION */}
            <Flex direction="column" align='center' m='20px' w='80%' gap='25px'>
                <Flex 
                    direction='row' 
                    bg='#F2E9E4' 
                    gap='15%' 
                    w='full' 
                    align='center' justifyContent='center'
                    p='20px' 
                    style={{
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '20px',
                    }} 
                >

                    <Box style={{borderRadius: '20px'}} p='20px' bg='#CCA6A6'>
                        <RxText m={20} size={35}/>
                    </Box>

                    <Box style={{borderRadius: '20px'}} p='20px' bg='#CCA6A6'>
                        <BsSquare p={'20px'} size={35}/>
                    </Box>

                    <Box style={{borderRadius: '20px'}} p='20px' bg='#CCA6A6'>
                        <BsLink m={20} size={35}/>
                    </Box>

                    <Box style={{borderRadius: '20px'}} p='20px' bg='#CCA6A6'>
                        <BsLightbulb m={20} size={35}/>
                    </Box>

                    <Box style={{borderRadius: '20px'}} p='20px' bg='#CCA6A6'>
                        <BsUpload m={20} size={35}/>
                    </Box>
                </Flex>

                <Box bg='#FFFFFF' h='64vh' w='full' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                    <Box bg='#AACBC9' h='5vh' w='full'>

                    </Box>
                </Box>
            </Flex>

            {/* RIGHT SECTION */}
            <Flex direction="column" bg='#F2E9E4' w='10%' align='center' gap='20px' pt='20px' pb='20px'>
                <Flex direction='row' gap={'30%'}>
                    <Flex direction={'column'} gap={'5px'}>
                        <ColorSelectorItem c='#6D597A' oc={changeColor}/>
                        <ColorSelectorItem c='#264653' oc={changeColor}/>
                        <ColorSelectorItem c='#81B29A' oc={changeColor}/>
                        <ColorSelectorItem c='#E9C46A' oc={changeColor}/>
                        <ColorSelectorItem c='#F4A261' oc={changeColor}/>
                        <ColorSelectorItem c='#E07A5F' oc={changeColor}/>
                        <ColorSelectorItem c='#AE2012' oc={changeColor}/>
                        <ColorSelectorItem c='#FFFFFF' oc={changeColor}/>
                    </Flex>

                    <Flex direction={'column'} gap={'5px'}>
                        <ColorSelectorItem c='#CCD5AE' oc={changeColor}/>
                        <ColorSelectorItem c='#E9EDC9' oc={changeColor}/>
                        <ColorSelectorItem c='#FEFAE0' oc={changeColor}/>
                        <ColorSelectorItem c='#E9C46A' oc={changeColor}/>
                        <ColorSelectorItem c='#E3D5CA' oc={changeColor}/>
                        <ColorSelectorItem c='#D6CCC2' oc={changeColor}/>
                        <ColorSelectorItem c='#D5BDAF' oc={changeColor}/>
                        <ColorSelectorItem c='#CBAA90' oc={changeColor}/>
                    </Flex>
                </Flex>

                <Flex direction='row' gap={'30%'}>
                    <Flex direction={'column'} gap={'5px'}>
                        <ColorSelectorItem c='#B5E2FA' oc={changeColor}/>
                        <ColorSelectorItem c='#0582CA' oc={changeColor}/>
                        <ColorSelectorItem c='#003554' oc={changeColor}/>
                        <ColorSelectorItem c='#CCE3DE' oc={changeColor}/>
                        <ColorSelectorItem c='#F4A261' oc={changeColor}/>
                        <ColorSelectorItem c='#D7E3FC' oc={changeColor}/>
                        <ColorSelectorItem c='#E7C6FF' oc={changeColor}/>
                        <ColorSelectorItem c='#B8C0FF' oc={changeColor}/>
                    </Flex>

                    <Flex direction={'column'} gap={'5px'}>
                        <ColorSelectorItem c='#FFE3E0' oc={changeColor}/>
                        <ColorSelectorItem c='#F07167' oc={changeColor}/>
                        <ColorSelectorItem c='#FEFAE0' oc={changeColor}/>
                        <ColorSelectorItem c='#FFD6BA' oc={changeColor}/>
                        <ColorSelectorItem c='#F4A259' oc={changeColor}/>
                        <ColorSelectorItem c='#FFEFD3' oc={changeColor}/>
                        <ColorSelectorItem c='#FAD643' oc={changeColor}/>
                        <ColorSelectorItem c='#FFC971' oc={changeColor}/>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default CollabPage;