import { forwardRef, ReactNode, RefAttributes } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

interface ModelContainerProps {
  children: ReactNode
}

export const ModelContainer = forwardRef<HTMLDivElement | undefined, ModelContainerProps>(({ children }, ref) => (
  <div style={{marginTop: '20px'}}>
    <Box
      ref={ref as any}
      className="model-container"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 360]}
      h={[280, 480, 360]}
      position="relative"
      margin={['0 auto', '0 auto', '0 auto']}
    >
      {children}
    </Box>
  </div>
))

ModelContainer.displayName = 'ModelContainer'

const Loader = () => {
  return (
    <ModelContainer>
      <div>
        <ModelSpinner />
      </div>
    </ModelContainer>
  )
}

export default Loader