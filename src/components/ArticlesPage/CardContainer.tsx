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
    author: {
      name: string;
    };
  
}
interface CardContainerProps {
    articles: CardProps[] | undefined;
}

export const CardContainer = ( {articles}: CardContainerProps ) => {
  const [page, setPage ] = useState(1)
  const maxPages = ( articles ) ? Number(Math.ceil(articles.length / 3))  : 0
  
  return (
    <Stack spacing="0">
        {maxPages > 1 && <Pagination page={page} setPage={setPage} maxPages={maxPages}/>}
        <Flex justify="flex-start" flexWrap="wrap" gap="4"  py="6">
          {articles && articles.slice((page - 1) * 3, page * 3)
          .map(article => (
             <Card key={article.slug} data={article}/>
          ))}
        </Flex>
    </Stack>
  )
}
