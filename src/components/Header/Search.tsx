import React from 'react'
import { Icon, Box, Input, FormLabel, Button } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md';

export const Search = () => {
  const formLabel = {
    display:"flex",
    alignItems:"center",
    pl:"4",
    m:"0",
    bg:"gray.700",
    borderRadius:"full",
    overflow:"hidden"
  }
  const input = {
    variant:'unstyled',
    color:"gray.300",
    borderRadius:"full",
    bg:"transparent",
    border:"none",
    size:"sm",
    pl:"1",
    _placeholder:{opacity:1,color:'gray.300'}
  }
  return (
    <Box as="form" w="100%">
      <FormLabel htmlFor="search" {...formLabel}>
          <Input id="search" placeholder="Pesquisar artigos" {...input}/>
          <Button bg="gray.700" borderRadius="0" _hover={{bg:"gray.600"}}>
            <Icon as={MdSearch} color="gray.300" fontSize="xl"/>
          </Button>
      </FormLabel>
    </Box>
  )
}
