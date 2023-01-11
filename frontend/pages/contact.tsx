import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import insta from '../public/insta.webp'
import github from '../public/github.webp'
import facebook from '../public/facebook.webp'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Contact = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h1" fontSize={32} mb={4} variant="section-title">
        Contact
      </Heading>
      <hr />
      <Section delay={0.4}>
        <Heading as="h3"
          fontSize={24}
          variant="section-title"
          mb={4}>
          Info
        </Heading>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>Email</BioYear>
          brandon.velasquez.osorio@gmail.com
        </BioSection>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>Cellphone</BioYear>
          (+57) 324 448 30 45
        </BioSection>
        <BioSection _hover={{ bgColor: useColorModeValue('rgba(226,206,227,0.9)', 'rgba(57,57,0,0.8)') }} >
          <BioYear>Status</BioYear>
          Available for hire
        </BioSection>
      </Section>
      <hr />
      <Section delay={0.4}>
        <Heading as="h3"
          fontSize={24}
          variant="section-title"
          mb={4}>
          Social media
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="margelo" thumbnail={github.src} title="Github" url='https://github.com/bvelasqo'>
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              url='https://www.instagram.com/brand.ondev/'
              id="modetokyo"
              thumbnail={insta.src}
              title="Instagram"
            >
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="styly" thumbnail={facebook.src} title="Facebook" url='https://gitlab.com/brandon.velasquez.osorio/TodoListApp-server'>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'