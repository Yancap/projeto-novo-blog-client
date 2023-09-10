import { Box, Text, Stack, Heading, Flex, StackProps, BoxProps, TextProps } from '@chakra-ui/react'
import React from 'react'
import Image from '../../../node_modules/next/image'
import { useRouter } from 'next/router';

interface CardProps {
  data: {
    slug: string;
    category: string;
    title: string;
    image: string;
    created_at: string;
    author: {
      name: string;
    };
  }
}

export const Card = ({data}:CardProps) => {
  
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
  const router = useRouter()

  return (
    <Stack {...card} onClick={() => router.push(`/articles/${data.slug}`)}>
        <Stack justify="space-between" flexGrow="1" py="4">
          <Stack flexGrow="1" justify="space-around">
            <Text as="h4" fontSize="md" lineHeight="1.2rem">
              {data.title} 
            </Text>
            <Box as="figure" bg="gray.800" overflow="hidden" flexGrow="1" maxH="8rem" borderRadius="2">
              <img src={data.image} alt={''} />
            </Box>
          </Stack>
          <Flex as="footer" fontSize="12px" justify="space-between">
            <Text>{data.created_at}</Text>
            <Text>{data.author.name}</Text>
          </Flex>
        </Stack>
        
    </Stack>
  )
}
