import React, { ReactNode, useState } from 'react'
import { Heading, Stack, Text, Flex, Box, Icon, BoxProps } from '@chakra-ui/react'
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'
import { Pagination } from './Pagination';
import { ArticlesResponse } from '@/pages/articles';
import { Card } from './Card';

interface CardProps {
  
    slug: string;
    category: string;
    title: string;
    image: string;
    created_at: string;
    author: string;
  
}
interface CardContainerProps {
    articles: CardProps[] | undefined;
}

export const CardContainer = ( {articles}: CardContainerProps ) => {
  const [page, setPage ] = useState(1)
  const maxPages = ( articles ) ? Number((articles.length / 3).toFixed())  : 0

  
  return (
    <Stack spacing="0" >
        <Pagination page={page} setPage={setPage} maxPages={maxPages}/>
        <Flex justify="space-around" flexWrap="wrap" gap="4">
          {articles && articles.slice((page - 1) * 3, page * 3)
          .map(article => (
             <Card data={article}/>
          ))}
        </Flex>
    </Stack>
  )
}
