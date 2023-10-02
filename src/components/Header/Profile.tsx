import {  Avatar, Box, Flex, FlexProps, Icon, IconProps, Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/react'



export const Profile = () => {
  //const { profile } = useManagement()

  const notification_container: FlexProps = {
    position:"relative",
    align:"center",
    gap: "2",
    py:"1",
    pl:"3",
    borderLeft:"2px",
    borderColor:"gray.900",
    cursor:"pointer",
  }
  const notification_icon: IconProps = {
    fontSize:"2xl",
    color:"gray.700",
    transition:"all .15s",
    transform:"auto",
    _hover: {scale: 1.05, color:"gray.300"}
  }
  const {data: session} = useSession()
  
  return (
    <Flex gap={{base: "8", xl:"8"}} justify="space-between" flexGrow="" align="center">
        
        { !session ?
        <Flex align="center" gap="2" borderLeft="2px" borderColor="gray.900" pl="3" cursor="pointer" onClick={() => {signIn('github')}}>
          <Text fontSize="md" fontWeight="bold" textTransform="uppercase">
            Login
          </Text>
          <Avatar size="md" bg="transparent" color="gray.700" fill="purple.700" border="2px"/>
        </Flex>
        : 
        <>
          <Flex {...notification_container} >
            <Icon as={BiMessageDetail}  {...notification_icon}/>
            <Icon as={FaStar} {...notification_icon} />
          </Flex>
          <Flex align="center" gap="2" onClick={() => {signOut()}}>
            <Box display={{base: "none",md: "block"}} textAlign="end">
              <Text fontSize={{base: "sm", xl:"md"}}>
                    {session.user?.name}
              </Text>
              <Text  fontSize='xs' color="purple.300">  
                {session.user?.email}
              </Text>
            </Box>
            {session.user?.image ? 
            <Avatar size={{base: "md", xl:"md"}} src={session.user?.image} />
            : 
            <Avatar size={{base: "md", xl:"md"}} bg="transparent" name={session.user?.name as string} color="purple.700" fill="purple.700" border="2px" />
            }
          </Flex>
        </>
        }
    </Flex>
  )
}
