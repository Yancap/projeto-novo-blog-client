import React from 'react'
import {  Box, Stack, Text, Flex, Heading,FlexProps } from '@chakra-ui/react'
import { useRouter } from '../../../node_modules/next/router';

interface CardSearch {
    article:{
        slug:string;
        image: string;
        title: string;
        author: {
            name: string
        };
        created_at: string;
        text: string;
    }
}

export const CardSearch = ({article}: CardSearch) => {
    const container: FlexProps = {
        border:"2px",
        borderColor:"purple.700",
        borderRadius:"sm",
        bg:"gray.900",
        px:"6",
        py:"4",
        gap:"6"
    }
    const router = useRouter()
    console.log(article);
    
  return (
    <Flex {...container} onClick={ () => router.push(`/article/${article.slug}`)}>
        <Box as="figure" h="10rem" maxW="256px" w="100%" bg="gray.800">
            <img src={article.image} alt={article.slug}/>
        </Box>
        <Stack justify="space-between">
            <Heading fontSize="xl" _after={{content: "'.'", color: "red.500"}}>
                {article.title}
            </Heading>
            <Flex justify="space-between">
                <Text fontSize="sm" fontWeight="bold">
                    <Text as="span" fontSize="12px" color="gray.200" fontWeight="normal">por </Text>
                </Text>
                <Text as="span" fontSize="12px" color="gray.200" fontWeight="normal">{article.created_at}</Text>
            </Flex>
            <Text fontSize="14px" overflow="hidden" display="-webkit-box" lineClamp="2">
                {article.text}
            </Text>
        </Stack>
    </Flex>
  )
}
