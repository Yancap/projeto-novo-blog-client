import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Card = () => {
  return (
    <Box bg="gray.600" borderRadius="4" px="4">
        <Box bg="gray.500" display="inline-block" borderRadius="2" px="3" py="1" mt="-2rem">
            <Text color="purple.300" fontWeight="bold">
              FRONT-END  
            </Text>
        </Box>
    </Box>
  )
}
