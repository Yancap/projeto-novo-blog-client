import { Container, ContainerProps, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FlexProps, Heading, Icon, IconButton, IconProps, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Navlink } from './Navlink'
import { useQuery } from "react-query";
import { api } from '@/services/api';
import { useNavbarDrawer } from '@/context/NavbarDrawerContext';
import { RiHome5Line, RiMenuLine } from 'react-icons/ri';
import { useRequest } from '@/context/RequestContext';
import { api_client } from '@/services/api_client';
import { CategoriesResponse } from '@/pages/articles/article';


export const Navbar = () => {

  const router = useRouter() 
  
  const nav: FlexProps = {
    as:"nav",
    bg: "gray.700",
    maxW:"100vw",
    px:{base:4,sm:8,md:10,lg:0},
    align: "center",
  }
  const container: ContainerProps = {
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"8",
    w:"100%",
    maxW:{lg: 992, xl: 1024,'2xl': 1280},
    py:{base: 1, lg: 3},
    px: {base: 4, lg: 0}
  }

  const home: IconProps = {
    fontSize:"2xl",
    color:"gray.200",
    cursor:"pointer",
    transform:"auto",
    transition:"all 150ms",
    _hover:{color:"gray.100",scale: 1.1}
  }
  // TODO: transformar em SSR e criar um Context para isso
  const {data} = useQuery('categories', async () => {
    const {data} = await api_client.get<CategoriesResponse>("categories")
    return data.categories
  })
  const { isOpen, onClose, onOpen } = useNavbarDrawer()
  const { categories } = useRequest()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })


  return (
    <>
    <Flex {...nav}>
      
    {!isDrawerSidebar &&
      <Flex justify="center" flexGrow="1">
        <Icon as={RiHome5Line} onClick={() => router.push('/articles')}{...home}/>
      </Flex>
    }
      <Container {...container}>
        {isDrawerSidebar ? 
        <>
        <IconButton icon={<Icon as={RiMenuLine}/>}  
                display="grid" placeContent="center"
                fontSize="24" variant="unstyled" aria-label='Open navigation' 
                onClick={onOpen} mr="2">
        </IconButton>
        </> 
        : 
        data && data.map( category => (
            <Navlink href={`${category.category}`} key={category.id}>
              {category.category}
            </Navlink>
          ))
        }
      </Container>
      {!isDrawerSidebar &&
      <Flex flexGrow="1">
      </Flex>
      }
    </Flex>
    
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
                <DrawerCloseButton mt="6"/>
                <DrawerHeader>
                    Navegação
                </DrawerHeader>
                <DrawerBody>
                <Stack as="aside" py="8" spacing="12">
                  <Flex gap="2">
                    <Icon as={RiHome5Line} onClick={() => router.push('/articles')}{...home}/>
                  </Flex>
                  {data && data.map( category => (
                    <Navlink href={`${category.category}`} key={category.id}>
                      {category.category}
                    </Navlink>
                  ))}
                </Stack>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
    </>
  )
}