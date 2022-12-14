import { NextRouter } from "next/router"
import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../navbar"

interface MainLayoutProps {
  children: React.ReactNode
  router: NextRouter
}

const MainLayout = ({ children, router }: MainLayoutProps) => {
  return (
    <Box as="main" ps={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brandon Velasquez</title>
        <meta name="description" content="Brandon Velasquez's personal website" />
        <meta name="author" content="Brandon Velasquez" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout