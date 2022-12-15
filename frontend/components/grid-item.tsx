import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export interface GridItemProps {
  children: React.ReactNode
  href: string
  title: string
  thumbnail: string
}

export const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        width={400}
        height={300}
        blurDataURL={thumbnail}
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

interface WorkGridItemProps {
  children: React.ReactNode
  id: string
  title: string
  thumbnail: string,
  url: string
}

export const WorkGridItem = ({ children, id, title, thumbnail, url }: WorkGridItemProps) => (
  <Box w="100%" textAlign="center" style={{ transition: 'all 0.2s ease-in-out' }} _hover={{ transform: 'scale(1.05)' }}>
    {/* <NextLink href={`/works/${id}`} passHref scroll={false} legacyBehavior> */}
    <NextLink href={url} passHref scroll={false} legacyBehavior>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          width={400}
          height={300}
          blurDataURL={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)