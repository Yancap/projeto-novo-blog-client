import { Box, Container, ContainerProps, Flex, FlexProps, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import { Profile } from './Profile'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { AiOutlineGithub } from 'react-icons/ai'

import { useRouter } from 'next/router'
import { Search } from './Search'
import { Navbar } from './Navbar'
import Link from 'next/link'




export const Header = () => {

  const router = useRouter() 
  
  const header: FlexProps = {
    as:"header",
    maxW:"100vw",
    px:{base:4,sm:8,md:10,lg:0},
    align:"center",
    justify:"center",
    borderBottom: "2px",
    borderColor: "purple.700",

  }
  const container: ContainerProps = {
    alignItems:"center",
    justifyContent:"space-between",
    gap:"8",
    display:"flex",
    flexDirection: "column",
    w:"100%",
    maxW:{lg: 992, xl: 1024,'2xl': 1280},
    py:"6",
    px: {base: 4, lg: 0}
  }
  const icon = {
    color:"gray.700",
    cursor:"pointer",
    fontSize:"3xl",
    transition:"all .15s",
    transform:"auto",
    _hover:{scale: 1.05, color:"gray.300"}
  }
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  
  return (
    <>
      <Flex {...header}>
        <Container {...container}>
          <Flex gap="8" w="100%" justify="space-between" align="center">
            <Flex gap="8"  w="auto" flexGrow="2">
              
              <Image src="/logo.svg" alt='ARTech' width="158" height="30" style={{cursor: "pointer"}}  onClick={ () => {
                router.push(router.asPath === "/articles" ? "/" : "/articles")
              }}/>
              
              {isWideVersion && <Search />}
            </Flex>
            <Flex gap="4" align="center" flexGrow="1">
              <Flex gap="2" display={{base:"none", sm: "flex"}}>
                <Icon {...icon} as={RiLinkedinBoxFill}/>
                <Icon {...icon} as={AiOutlineGithub}/>
              </Flex>
                <Profile />
            </Flex>
          </Flex>  
          {!isWideVersion && <Search />}
        </Container>
      </Flex>
      { router.asPath !== "/" && <Navbar /> }
      
    </>
  )
}
