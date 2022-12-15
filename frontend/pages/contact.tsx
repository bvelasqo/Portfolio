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

const Contact = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Contact
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={profileImage.src} title="Github" url='https://github.com/bvelasqo'>
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            url='https://gitlab.com/code-hub-house/backend-opc'
            id="modetokyo"
            thumbnail={projectImage.src}
            title="Instagram"
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={todolistImage.src} title="Facebook" url='https://gitlab.com/brandon.velasquez.osorio/TodoListApp-server'>
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

export default Contact
export { getServerSideProps } from '../components/chakra'