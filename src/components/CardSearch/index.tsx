import React from 'react'
import {  Box, Stack, Text, Flex, Heading,FlexProps } from '@chakra-ui/react'
import { useRouter } from 'next/router';

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
        <Box as="figure" minH="10rem" maxH="12rem" minW="256px">
            <img src={article.image} alt={article.slug} style={{objectFit: "cover", width: "100%", height:"100%"}}/>
        </Box>
        <Stack justify="space-between" >
            <Heading fontSize="xl" _after={{content: "'.'", color: "red.500"}} overflow="hidden" display="-webkit-box" style={{WebkitLineClamp:"2", WebkitBoxOrient: "vertical"}}>
                {article.title}
            </Heading>
            <Flex justify="space-between">
                <Text fontSize="sm" fontWeight="bold">
                    <Text as="span" fontSize="12px" color="gray.200" fontWeight="normal">por </Text>
                    {article.author.name}
                </Text>
                <Text as="span" fontSize="12px" color="gray.200" fontWeight="normal">{article.created_at}</Text>
            </Flex>
            <Text fontSize="14px" overflow="hidden" display="-webkit-box" style={{WebkitLineClamp:"3", WebkitBoxOrient: "vertical"}} >
                {article.text.replace(/(<[^>]*>|Texto&nbsp;)/g, "")}
            </Text>
        </Stack>
    </Flex>
  )
}
