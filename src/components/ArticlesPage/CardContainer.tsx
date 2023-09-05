import React, { ReactNode } from 'react'
import { Heading, Stack, Text, Flex, Box, Icon, BoxProps } from '@chakra-ui/react'
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'

interface CardContainerProps {
    children: ReactNode
}

export const CardContainer = ( {children}: CardContainerProps ) => {
  const boxArrow: BoxProps = {

  } 
  const arrow = {
    color:"purple.700",
    fontSize:"4xl",
    transition: "all 150ms",
    transform: "auto",
    _hover: {scale: 1.1}
  }
  return (
    <Stack spacing="0">
        <Flex justify="space-between" align="flex-start" p="2">
            <Box cursor="pointer">
                <Icon as={RiArrowLeftDoubleFill} {...arrow} />
            </Box>
            <Box cursor="pointer">
                <Icon as={RiArrowRightDoubleFill} {...arrow}/>
            </Box>            
        </Flex>
        <Flex justify="space-around" flexWrap="wrap" gap="4">
          {children}  
        </Flex>
    </Stack>
  )
}
