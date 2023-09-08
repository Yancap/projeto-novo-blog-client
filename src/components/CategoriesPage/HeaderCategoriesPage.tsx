import { Heading, Stack, Text, Flex, Icon } from '@chakra-ui/react'
import { MdMonitor, MdColorLens } from 'react-icons/md'
import { TbAtom2Filled } from 'react-icons/tb'
import { FaMobileAlt } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { LuServerCog } from 'react-icons/lu'
import { VscJson } from 'react-icons/vsc'

import React from 'react'

interface HeaderCategoriesPageProps {
    category: "front-end" | "back-end" | "mobile" | "inteligencia artificial" | "data science" | "fullstack";
}

export const HeaderCategoriesPage = ({category}: HeaderCategoriesPageProps) => {
  const info = {
    "front-end": {
        text: `Artigos sobre Front-end Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras tincidunt, elit eget tempor vulputate, odio purus vestibulum ligula, 
        nec dictum odio leo in dolor. Cras fringilla turpis magna, 
        dignissim pharetra nisl blandit dictum. `,
        icon: MdMonitor,
        color: "purple.300"
    },
    "back-end": {
        text: `Artigos sobre back-end Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras tincidunt, elit eget tempor vulputate, odio purus vestibulum ligula, 
        nec dictum odio leo in dolor. Cras fringilla turpis magna, 
        dignissim pharetra nisl blandit dictum. `,
        icon: LuServerCog,
        color: "red.500"
    },
    "mobile": {
        text: `Artigos sobre Mobile Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras tincidunt, elit eget tempor vulputate, odio purus vestibulum ligula, 
        nec dictum odio leo in dolor. Cras fringilla turpis magna, 
        dignissim pharetra nisl blandit dictum. `,
        icon: FaMobileAlt,
        color: "yellow.500"
    },
    "inteligencia artificial": {
        text: `Artigos sobre Inteligencia Artificial Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras tincidunt, elit eget tempor vulputate, odio purus vestibulum ligula, 
        nec dictum odio leo in dolor. Cras fringilla turpis magna, 
        dignissim pharetra nisl blandit dictum. `,
        icon: GiArtificialIntelligence,
        color: "blue.500"
    },
    "data science": {
        text: `Artigos sobre Data Science Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras tincidunt, elit eget tempor vulputate, odio purus vestibulum ligula, 
        nec dictum odio leo in dolor. Cras fringilla turpis magna, 
        dignissim pharetra nisl blandit dictum. `,
        icon: TbAtom2Filled,
        color: "green.500"
    },
    "fullstack": {
        text: `Artigos sobre UX & UI Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras tincidunt, elit eget tempor vulputate, odio purus vestibulum ligula, 
        nec dictum odio leo in dolor. Cras fringilla turpis magna, 
        dignissim pharetra nisl blandit dictum. `,
        icon: VscJson,
        color: "pink.500"
    },
  }
  if(category in info) return (
    <Stack px="10" py="4" spacing="4">
        <Flex gap="4" align="center" >
            <Icon as={info[category].icon} color={info[category].color}  fontSize={{ base: "2.5rem", sm: "3rem" }}/>
            <Heading as="h1" fontSize={{ base: "2rem", sm: "2.5rem", "2xl":"3rem" }} fontWeight="black" textTransform="uppercase">
                {category}
                <Text as="strong" fontWeight="black" color={info[category].color}>!</Text>
            </Heading>
        </Flex>
        <Text>
            {info[category].text}
        </Text>
    </Stack>
  )
}
