import React from 'react'

const VideoButton = () => {
  return (
    <Menu>
            <MenuButton
              as={Button}
              bg={brand}
              right={-10}
              width={'561px'}
              top={20}
              height={'121px'}
              px={20}
              py={10}
              fontSize="4xl"
              fontFamily={'prata'}
              rightIcon={<ChevronDownIcon />}></MenuButton>
            <MenuList bg={brand} height={'500px'} width={'561px'} position={'absolute'}>
              <MenuItem bg={brand}>
                <Box
                  pos={'relative'}
                  title="HIIIIIIIIIIIi"
                  textColor={'black'}
                  width="44%"
                  height="33%"
                  as="iframe"
                  src="https://drive.google.com/file/d/1gTBuCoMupZofPuOLTaYPsshrIoiCcu8h/preview"
                  sx={{
                    aspectRatio: '16/9'
                  }}></Box>
                <span>
                  <Text fontFamily={'prata'}> youtube vid 1</Text>
                </span>
              </MenuItem>
              <MenuItem bg={brand}>
                <Box
                  pos={'relative'}
                  title="HIIIIIIIIIIIi"
                  width="44%"
                  height="33%"
                  as="iframe"
                  src="https://www.youtube.com/embed/iXsM6NkEmFc"
                  sx={{
                    aspectRatio: '16/9'
                  }}></Box>
                <span> youtube vid 2</span>
              </MenuItem>
            </MenuList>
          </Menu>
  )
}

export default VideoButton