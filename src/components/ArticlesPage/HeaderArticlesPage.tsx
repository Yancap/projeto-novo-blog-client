import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card } from './Card'

export const HeaderArticlesPage = () => {
  return (
    <Stack px="10">
        <Heading as="h1" fontSize="2.25rem" fontWeight="black" maxW="45ch">
            ARTIGOS DA SEMANA
            <Text as="strong" fontWeight="black" color="purple.700">!</Text>
        </Heading>
        <Card />
    </Stack>
  )
}
