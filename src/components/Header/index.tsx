import { Box, Container, ContainerProps, Flex, FlexProps, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import { Profile } from './Profile'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { AiOutlineGithub } from 'react-icons/ai'

import { useRouter } from 'next/router'
import { Search } from './Search'

interface HeaderProps {
    children: React.ReactNode
}


export const Header = ({children}: HeaderProps) => {

  const { asPath } = useRouter() 
  
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
    maxW:{lg:992,'2xl':1024},
    py:"6",
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Flex {...header}>
      <Container {...container}>
        <Flex gap="8" w="100%" justify="space-between" align="center">
          <Flex gap="8"  w="auto">
            <Image src="/logo.svg" alt='ARTech' width="158" height="30"/>
            {isWideVersion && <Search />}
          </Flex>
          <Flex gap="4" align="center">
            <Flex gap="2" display={{base:"none", sm: "flex"}}>
              <Icon color="gray.700" cursor="pointer" fontSize="3xl" transition="all .15s" transform="auto" _hover={{scale: 1.05, color:"gray.300"}} as={RiLinkedinBoxFill}/>
              <Icon color="gray.700" cursor="pointer" fontSize="3xl" transition="all .15s" transform="auto" _hover={{scale: 1.05, color:"gray.300"}} as={AiOutlineGithub}/>
            </Flex>
              <Profile />
          </Flex>
        </Flex>  
        {!isWideVersion && <Search />}
      </Container>
    </Flex>
  )
}
