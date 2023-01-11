import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import projectImage from '../public/dev.png'
import kruImage from '../public/kru.png'
import paoImage from '../public/paocortes.png'
import foroImage from '../public/foro.png'
import profileImage from '../public/logo.jpg'
import udemImage from '../public/udem.jpg'
import todolistImage from '../public/todolist.png'
import pokeball from '../public/pokeball.webp'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h1" fontSize={32} mb={4} variant="section-title">
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem
            url='https://forojoventu.com/'
            id="walknote"
            title="Foro joven tú"
            thumbnail={foroImage.src}
          >
            A website for a forum event in Cartagena de Indias Colombia
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={pokeball.src} title="Pokemon page" url='https://pokemon3d-page-1j81vv7wb-bvelasqo.vercel.app/'>
            An implementation of three js for a pokemon page
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={projectImage.src} title="Gif app" url='https://bvelasqo.github.io/Gif-expert-app/'>
            An app for search gifs and share with friends
          </WorkGridItem>
        </Section>


        <Section>
          <WorkGridItem id="KRU360" title="KRU360" thumbnail={kruImage.src} url='https://kru360.com/'>
            A landing page for a startup company in Cartagena de Indias Colombia wich i work since 2022
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            url='https://paolacortes.com/'
            id="fourpainters"
            title="Spa paola cortes"
            thumbnail={paoImage.src}
          >
            A website for a spa in Cartagena de Indias Colombia
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Repositories
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={profileImage.src} title="Github" url='https://github.com/bvelasqo'>
            My github profile
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            url='https://gitlab.com/code-hub-house/backend-opc'
            id="modetokyo"
            thumbnail={udemImage.src}
            title="Backend OPC"
          >
            Space reservation service for internal events of the University of Medellin
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={todolistImage.src} title="Todo List app server" url='https://gitlab.com/brandon.velasquez.osorio/TodoListApp-server'>
            TodoListApp server with an api that makes available the necessary data for the proper functioning of the software
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={projectImage.src} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={projectImage.src}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={projectImage.src} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'