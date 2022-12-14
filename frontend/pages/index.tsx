import { Box, Container, Heading } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="blue.400" p={4} mb={6} alignContent="center" textAlign="center" textColor="blackAlpha.900">
        Hello, I&apos;m a software developer based in Medellin, Colombia
      </Box>
      <Box display={{md: 'flex'}} justifyContent="space-between" alignItems="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="Page title">Brandon Velasquez</Heading>
          <p>
          Programming lover
          </p>
        </Box>
      </Box>
    </Container>
  )
}
