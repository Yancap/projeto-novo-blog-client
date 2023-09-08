import { Box, Icon, ListItem, ListItemProps, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useSession } from 'next-auth/react'

interface CommentProps {
  comment: {
    id: string; 
    text: string; 
    created_at: string; 
    user_name: string;
    user_email: string;
  }
}

export const Comments = ({comment}: CommentProps) => {
  const listItem: ListItemProps = {
    display:"flex",
    justifyContent: "space-between",
    listStyleType:"none",
    p:"2",
    
    borderBottom: "2px",
    borderColor: "gray.800"
  }

  const {data: user} = useSession()

  return (
    <ListItem {...listItem}>
        <Box display="flex"_before={{content:'""',borderLeft: "2px",borderColor: "purple.700", py: "1"}}>
          <Box px="2" pb="2">
            <Text fontSize="sm" color="gray.600">
                {comment.user_name} - {new Date(comment.created_at).toLocaleString([], {  month: 'long', day: 'numeric', year: "numeric" })}
            </Text>
            <Text color="gray.100">
              {comment.text} 
            </Text>
          </Box>
        </Box>
        { comment.user_email === user?.user?.email && //TODO - Fazer o Delete
        <Box alignSelf="center" cursor="pointer" color="gray.700" transition="all 150ms" _hover={{color: "gray.200"}}>
          <Icon fontSize="lg" as={RiDeleteBin6Fill}/>
        </Box>
        }
    </ListItem>
  )
}

