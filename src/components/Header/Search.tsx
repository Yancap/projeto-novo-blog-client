import React, { useState } from 'react'
import { Icon, Box, Input, FormLabel, Button } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from '../../../node_modules/next/router';

interface SearchForm {
  search: string
}

interface SearchProps {
  value?: string | string[];
}
export const Search = ({value: outValue}:SearchProps) => {
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
  const [ value, setValue] = useState(outValue)
  const router = useRouter()
  const { register, handleSubmit, reset } = useForm<SearchForm>()
  const submit: SubmitHandler<SearchForm> = async () => {
    router.push(`/search?search=${value}`)
  }
  return (
    <Box as="form" w="100%" onSubmit={handleSubmit(submit)}>
      <FormLabel htmlFor="search" {...formLabel} >
          <Input id="search" placeholder="Pesquisar artigos" {...input} {...register('search')} value={value} onChange={ ({currentTarget}) => { setValue(currentTarget.value)}}/>
          <Button type="submit" bg="gray.700" borderRadius="0" _hover={{bg:"gray.600"}}>
            <Icon as={MdSearch} color="gray.300" fontSize="xl"/>
          </Button>
      </FormLabel>
    </Box>
  )
}
