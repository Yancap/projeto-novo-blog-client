import { Text } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react'

interface PaginationindexProps {
    number: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

export const PaginationIndex = ({ number, page, setPage}: PaginationindexProps) => {
  const isCurrent = page === number
  if(isCurrent) return (
    <Text fontWeight="bold" color="purple.700" mx="2">
        {number}
    </Text>
  )
  return (
    <Text color="gray.600" mx="2" cursor="pointer" onClick={() => setPage(number)}>
        {number}
    </Text>
  )
}
