import React, { Dispatch, SetStateAction } from 'react'
import { Heading, Stack, Text, Flex, Box, Icon, BoxProps } from '@chakra-ui/react'
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'
import { PaginationIndex } from './PaginationIndex';

interface PaginationProps {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    maxPages: number;
  }
  
export const Pagination = ({page, setPage, maxPages}: PaginationProps) => {
  const arrow = {
    color:"purple.700",
    fontSize:"4xl",
    transition: "all 150ms",
    transform: "auto",
    _hover: {scale: 1.1}
 }
 let paginationButtons = []
  for(var i = 0; i < maxPages; i++) {
    paginationButtons.push(<PaginationIndex key={i+1} page={page} setPage={setPage} number={i+1}/>)
  }
  return (
    <Flex justify="space-between" align="flex-start" p="2" py="4">
        { page !== 1 ?
        <Box cursor="pointer" onClick={() => setPage(page -1)}>
            <Icon as={RiArrowLeftDoubleFill} {...arrow} />
        </Box> :
        <Box></Box>
        }
        <Flex>
            {page > 2 && paginationButtons[0]}
            {page > 3 && 
              <Text color="gray.600">
              ...
              </Text>
            }
            {paginationButtons
            .slice(page === 1 ? page - 1  : page - 2, page === 20 ? page : page + 1)
            }
            {page < maxPages - 2 && 
              <Text color="gray.600">
              ...
              </Text>
            }
            
            {page < maxPages - 1 && paginationButtons[maxPages-1]}
        </Flex>
        {page !== maxPages ? 
        <Box cursor="pointer" onClick={() => setPage(page + 1)}>
            <Icon as={RiArrowRightDoubleFill} {...arrow}/>
        </Box> :
        <Box></Box>
        }          
    </Flex>
  )
}
