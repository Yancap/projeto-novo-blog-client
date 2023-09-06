import { Box, Text, Stack, Heading, Flex, StackProps, BoxProps, TextProps } from '@chakra-ui/react'
import React from 'react'
import Image from '../../../node_modules/next/image'

interface CardProps {
  data: {
    slug: string;
    category: string;
    title: string;
    image: string;
    created_at: string;
    author: string;
  }
  
}

export const Card = ({data}:CardProps) => {

  const color_text_label =  data.category === "front-end" ? "purple.300" : 
  data.category === "back-end" ? "red.500" : 
  data.category === "mobile" ? "yellow.500" :
  data.category === "inteligencia artificial" ? "blue.500" :
  data.category === "data science" ? "green.500" :
  "pink.500"
  
  const card: StackProps = {
    bg:"gray.600",
    borderRadius:"8",
    px:"4",
    w:"100%",
    h:"280px",
    maxW:"296px",
    cursor:"pointer",
    transition: "all 150ms",
    transform: "auto",
    _hover: { scale: 1.05}
  }
  const card_label: BoxProps = {
    bg:"gray.500",
    display:"inline-block",
    borderRadius:"4",
    px:"2",
    py:"1",
    mt:"-.75rem",
    alignSelf:"flex-end"
  }
  const category: TextProps ={
    color: color_text_label,
    fontWeight:"bold",
    fontSize:"sm",
    textTransform:"uppercase"
  }
  return (
    <Stack {...card}>
        <Box {...card_label}>
            <Text {...category}>
              {data.category}  
            </Text>
        </Box>
        <Stack justify="space-between" flexGrow="1" py="4">
          <Stack flexGrow="1" justify="space-between">
            <Text as="h4" fontSize="md" lineHeight="1.2rem">
              {data.title} 
            </Text>
            <Box as="figure" bg="gray.800" flexGrow="1" maxH="8rem" borderRadius="2">
              <Image src={data.image} alt={''}/>
            </Box>
          </Stack>
          <Flex as="footer" fontSize="12px" justify="space-between">
            <Text>{data.created_at}</Text>
            <Text>{data.author}</Text>
          </Flex>
        </Stack>
        
    </Stack>
  )
}
