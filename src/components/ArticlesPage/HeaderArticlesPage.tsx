import { Heading, Stack, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Card } from './Card'
import { CardContainer } from './CardContainer'

export const HeaderArticlesPage = () => {
  const data = [
    {
      slug:'teste',
      category:'front-end',
      title:'Titulo do artigo sobre o Front-End e suas tecnologias',
      image:'',
      created_at:'12 de Janeiro de 2022',
      author: 'Yan Gabriel'
    },
    {
      slug:'teste',
      category:'inteligencia artificial',
      title:'Titulo do artigo sobre o Inteligencia Artificial e seus desafios no mundo moderno ',
      image:'',
      created_at:'12 de Janeiro de 2022',
      author: 'Yan Gabriel'
    },
    {
      slug:'teste',
      category:'back-end',
      title:'Titulo do artigo sobre o Back-End e suas tecnologias ',
      image:'',
      created_at:'12 de Janeiro de 2022',
      author: 'Yan Gabriel'
    }
  ]
  return (
    <Stack px="10" py="4" spacing="8">
        <Heading as="h1" fontSize={{ base: "2.5rem", "2xl":"3rem" }} fontWeight="black">
            ARTIGOS DA SEMANA
            <Text as="strong" fontWeight="black" color="purple.700">!</Text>
        </Heading>
        <CardContainer articles={data} />
    </Stack>
  )
}
