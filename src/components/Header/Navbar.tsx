import { Container, ContainerProps, Flex, FlexProps, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Navlink } from './Navlink'
import { useQuery } from "react-query";
import { api } from '@/services/api';

interface CategoriesResponse {
  id: string;
  category: string;
}


export const Navbar = () => {

  const { asPath } = useRouter() 
  
  const nav: FlexProps = {
    as:"nav",
    bg: "gray.600",
    maxW:"100vw",
    px:{base:4,sm:8,md:10,lg:0},
    justify:"space-between",
  }
  const container: ContainerProps = {
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"8",
    w:"100%",
    maxW:{lg: 992, xl: 1024,'2xl': 1280},
    py:"3",
    px: {base: 4, lg: 0}
  }
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })


  // TODO: transformar em SSR e criar um Context para isso
  const {data} = useQuery('categories', async () => {
    const {data} = await api.get<CategoriesResponse[]>("/categories")
    //console.log(response);
    return data
  })

  return (
    <Flex {...nav}>
      <Container {...container}>
        {data && data.map( category => (
          <Navlink href={`/${category.category}`} key={category.id}>
            {category.category}
          </Navlink>
        ))}
      </Container>
    </Flex>
  )
}