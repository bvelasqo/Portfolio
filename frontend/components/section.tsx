import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface SectionProps {
  children: React.ReactNode
  delay?: number
}

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: '0.2', delay: delay.toString() }}
    mt={6}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section