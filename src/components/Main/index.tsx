import { ReactComponentElement, ReactNode, useEffect } from 'react'
import { Header } from "@/components/Header";
import { Container, ContainerProps, Flex, FlexProps, Stack, StackProps } from "@chakra-ui/react";

interface MainProps {
  headerComponent?: ReactNode;
  children: ReactNode;

}

export const Main = ({children, headerComponent, ...props}: MainProps) => {
  const main: FlexProps = {
    as:"main",
    overflowX:"hidden",
    pb:{base:"71px", md:"12"},
    align:"start",
    justify:"center",
    maxW:"100vw",
    px:{ base:4,sm:8,md:10, lg:0},
    position:"relative",
    minH:"calc(100vh-6.125rem)"
  }
  const container: ContainerProps = {
    as:"section",
    display:"flex",
    flexDirection: "column",
    gap:"16",
    justifyContent:"space-between",
    w:"100%",
    maxW:{lg: 992, xl: 1024,'2xl': 1280},
    px: {base: 4, lg: 0}
  }
  const header: StackProps = {
    as:"header",
    borderBottomRadius: 12,
    w:"100%",
    py:"8",
    bg:"gray.900",
    spacing:'6',
    maxW:"100%"
  }
  const content: StackProps = {
    as:"section",
    w:"100%",
    py:"8",
    spacing:'6',
    maxW:"100%"
  }
  return (
      <>
        <Header />
        <Flex {...main}>
          <Container {...container}>
            {headerComponent && 
            <Stack {...header} {...props}>
              {headerComponent}
            </Stack>
            }
            <Stack {...content}>
              {children}
            </Stack>
          </Container>
        </Flex> 
      </>
 
  )
}
