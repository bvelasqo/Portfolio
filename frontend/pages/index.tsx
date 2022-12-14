import { Box, Button, chakra, Container, Heading, IconButton, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'
import { AddIcon, ChatIcon, ChevronRightIcon, InfoIcon, SunIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Link from 'next/link'
import { GridItem } from '../components/grid-item'
import thumbYouTube from 'public/logo.png'
import thumbInkdrop from 'public/logo.jpg'
import Skills from '../components/skills'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('purple.300', 'yellow.300')} p={4} mb={6} mt={6}
        alignContent="center" textAlign="center" textColor="blackAlpha.900"
        transition={'all 0.2s ease-in-out'}
        _hover={{
          bg: useColorModeValue('yellow.500', '#805aa0'),
          transform: 'scale(1.05)',
        }}
      >
        Hello, I&apos;m a software developer born in Medellin, Colombia
      </Box>
      <Box display={{ md: 'flex' }} justifyContent="space-between" alignItems="center">
        <Box flexGrow={1}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h2"
            variant="Page title">Brandon Velasquez</Heading>
          <p>
            Programming lover
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            mt={4}
            display="inline-block"
            borderRadius={"8px"}
            overflow="hidden"
          >
            <ProfileImage
              src="/logo.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as="h3"
          mb={4}
          variant="section-title">Work</Heading>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptas excepturi, illum itaque modi, quae blanditiis repudiandae, amet quo quos totam? Est vero nulla quaerat exercitationem reiciendis quis iusto? Est.
        </Paragraph>
        <Box
          alignSelf={{ base: 'center', md: 'flex-end' }}
          alignContent={{
            base: 'center',
            md: 'flex-end'
          }}
          textAlign={{ base: 'center', md: 'right' }}
          alignItems={{ base: 'center', md: 'center' }} my={4}>
          <NextLink href="/work" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'yellow')}
              _hover={{
                bg: useColorModeValue('yellow.500', '#805aa0'),
                transform: 'scale(1.05)',
              }}>See my work</Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3"
          mb={4}
          variant="section-title">
            About me
          </Heading>
        <Paragraph style={{ marginBottom: '1.3rem' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptas excepturi, illum itaque modi, quae blanditiis repudiandae, amet quo quos totam? Est vero nulla quaerat exercitationem reiciendis quis iusto? Est.
        </Paragraph>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>2001</BioYear>
          Born in Barbosa, Antioquia
        </BioSection>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>2018</BioYear>
          Graduated of Cooperativo simon Bolivar High School as a Bachiller
        </BioSection>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>2019</BioYear>
          Student of the University of Medellin in the career of Systems Engineering with emphasis in Software Development, I am in the 10th semester of the career and I am a dedicated student with a lot of desire to learn and improve my skills
        </BioSection>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>2020</BioYear>
          Work as a software developer in a company called InversionesIMR
        </BioSection>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>2022 to present</BioYear>
          Work as a software developer in a company called KRU360
        </BioSection>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias inventore
        </Paragraph>
        <Skills />
      </Section>
    </Container>
  )
}
