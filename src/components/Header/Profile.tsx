import {  Avatar, Box, Flex, FlexProps, Icon, Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'



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
  const notification_icon: TextProps = {
    fontSize:"2xl",
    color:"gray.700",
    transition:"all .15s",
    transform:"auto",
    _hover: {scale: 1.05, color:"gray.300"}
  }
  return (
    <Flex gap={{base: "2", xl:"3"}} align="center">
        <Flex {...notification_container} >
          <Icon as={BiMessageDetail}  {...notification_icon}/>
          <Icon as={FaStar} {...notification_icon} />
        </Flex>
        <Box display={{base: "none",md: "block"}} textAlign="end">
            <Text maxW={["8ch","12ch"]} textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden" fontSize={{base: "sm", xl:"md"}}>
                {/* profile.name */}
                Yan Gabriel
            </Text>
            <Text maxW={["15ch","20ch"]} textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden" fontSize='xs' color="purple.300">
                {/*profile.email*/}
                yan@email.com
            </Text>
        </Box>
        {"" !== "" ? 
        <Avatar size={{base: "md", xl:"md"}} name={"Yan Gabriel"} />
        : 
        <Avatar size={{base: "md", xl:"md"}} bg="transparent" color="purple.700" fill="purple.700" border="2px" />
        }
    </Flex>
  )
}
