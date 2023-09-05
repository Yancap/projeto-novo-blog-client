import { ReactNode, useEffect } from 'react'
import { Header } from "@/components/Header";
import { Container, ContainerProps, Flex, FlexProps, Stack, StackProps } from "@chakra-ui/react";

interface MainProps {
    children: ReactNode;
}

export const Main = ({children, ...props}: MainProps) => {
  const main: FlexProps = {
    as:"main",
    overflowX:"hidden",
    pb:{base:"71px", md:"12"},
    align:"start",
    justify:"center",
    pt:{base:"4",md:"12"},
    maxW:"100vw",
    px:{base:4,sm:8,md:10, lg:0},
    position:"relative",
    minH:"100vh"
  }
  const container: ContainerProps = {
    as:"section",
    display:"flex",
    gap:"24",
    justifyContent:"space-between",
    w:"100%",
    maxW:{lg: 992,'2xl': 1124}
  }
  const stack: StackProps = {
    as:"section",
    borderRadius: 12,
    w:{base:"100%"},
    px:["4","8"],
    py:"8",
    bg:"gray.900",
    spacing:'6',
    maxW:"100%"
  }
  return (
      <>
        <Header />
        <Flex {...main}>
            <Container {...container}>
                <Stack {...stack} {...props}>
                    {children}
                </Stack>
            </Container>
        </Flex> 
      </>
 
  )
}
