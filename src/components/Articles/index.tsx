import { Article } from '@/pages/articles/article'
import { Avatar, Box, Flex, Heading, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import styles from './articles.module.css'

interface ArticlesProps {
  article: Article
}

export const Articles = ({article}: ArticlesProps) => {
  return (
    <Stack px="10" py="4" spacing="4">
      <Heading as="h1" fontSize={{ base: "2.25rem", "2xl":"2.75rem" }} fontWeight="black">
        {article.title}
        <Text as="strong" fontWeight="black" color="purple.700">!</Text>
      </Heading>
      <Heading as="h2" fontSize="1.25rem" fontWeight="regular" color="gray.200">
        {article.subtitle}
      </Heading>
      <Flex gap="2" align="center" py="6" borderBottom="2px" borderColor="gray.500">
        {article.author.avatar && article.author.avatar !== "" ? 
        <Avatar size="md" name={article.author.name} src={article.author.avatar}/>
        : 
        <Avatar size="md" bg="transparent" name={article.author.name} color="purple.700" fill="purple.700" border="2px" />
        }
        <Box textAlign="start">
            <Text as="span" fontWeight="bold" color="gray.100" fontSize="md">
                <Text as="span" fontWeight="light" color="gray.200" fontSize="sm"> Por </Text>
                {article.author.name}
            </Text>
            <Text fontSize='xs' color="gray.200">
              {article.created_at}
            </Text>
        </Box>
      </Flex>
      <Box as="figure" display="grid" placeItems="center"mt="2" w="100%" maxH="28rem"  overflow="hidden" borderRadius="md">
        <img src={article.image} alt={article.slug} style={{objectFit: "cover", maxWidth: "100%", height: "auto", minHeight: "20rem", borderRadius: ".5rem"}}/>
      </Box>
      <Box className={styles.text} py="8" borderBottom="2px" borderColor="gray.500" dangerouslySetInnerHTML={{__html: article.text}}>
        
      </Box>
      <Box py="8">
        <Heading as="h3" color="purple.700" mb="4">
          Créditos
        </Heading>
        <UnorderedList pl="4">
          {article.credits.map(credit => (
            <ListItem>
              {credit.name}: <Link href={credit.link} color="blue.500">{credit.link}</Link>
            </ListItem>
          ))}
          
        </UnorderedList>
      </Box>
    </Stack>
  )
}
