import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

interface WorkImageProps {
  src: string
  alt: string
}

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

interface MetaProps {
  children: React.ReactNode
}

export const Meta = ({ children }: MetaProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)