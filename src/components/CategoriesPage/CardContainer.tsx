import React, { useState } from 'react'
import { Stack, SimpleGrid, Text, Heading, } from '@chakra-ui/react'
import { Card } from './Card';
import { Pagination } from '../ArticlesPage/Pagination';

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
  const maxPages = ( articles ) ? Number((articles.length / 9).toFixed()) : 0

  
  return (
    <Stack spacing="0" >
      {articles ? 
      <>
        <Pagination page={page} setPage={setPage} maxPages={maxPages}/>
        <SimpleGrid gap="8" minChildWidth="312px" justifyItems="center">
          {articles && articles.slice((page - 1) * 9, page * 9)
          .map(article => (
             <Card data={article}/>
          ))}
        </SimpleGrid>
        <Pagination page={page} setPage={setPage} maxPages={maxPages}/>
      </>
      : <Heading>
          Sem resultados :(
        </Heading>
        }
    </Stack>
  )
}
