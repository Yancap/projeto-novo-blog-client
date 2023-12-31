import { Box, BoxProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

interface NavlinkProps {
    href: string;
    children: string;
}

export const Navlink = ({href, children}: NavlinkProps) => {
  const router = useRouter()
  const path = router.asPath.replace(/%20/g, " ")
  
  const box: BoxProps = {
    h:"100%",
    color: path === `/categories/${href}` ? "gray.100" : "gray.200",
    fontWeight: path === `/categories/${href}` ? "bold" : "normal",
    transition: "all 150ms",
    _hover: {color: "gray.100", fontWeight: "bold"},
    textTransform: "uppercase"
  }
  return (
  <Link href={`/categories/${href}`}>
    <Box {...box}>
        {children} 
    </Box>
  </Link>
  )
}
