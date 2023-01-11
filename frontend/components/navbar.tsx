import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toogle-button'

interface LinkItemProps {
  href: string
  path?: string
  target?: string
  children: React.ReactNode
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps & any) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const inactiveBg = useColorModeValue('purple.300', 'yellow.300')
  return (
    <NextLink href={href} passHref scroll={false} legacyBehavior>
      <Link
        p={2}
        bg={active ? inactiveBg : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        borderRadius="md"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}

interface NavbarProps {
  path: string
}

const Navbar = (props: NavbarProps) => {
  const { path } = props
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const inactiveBg = useColorModeValue('purple.300', 'yellow.300')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      top={0}
      left={0}
      bg={useColorModeValue('#00008c60', '#20202380')}
      color={'blue.800'}
      css={{ backdropFilter: 'blur(20px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={3}
        as={Flex}
        flexWrap={{ base: 'wrap' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={8}>
          <Heading as="h1" size="md" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={3}
          mt={{ base: 4, md: 0 }}
        >
           <LinkItem href="/" path={path}>
            About me
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={path === "/" ? inactiveBg : undefined}
        color={path === "/" ? '#202023' : inactiveColor}>
                <NextLink href="/" passHref legacyBehavior>
                  <MenuItem as={Link} bg={path === "/" ? inactiveBg : undefined}
        color={path === "/" ? '#202023' : inactiveColor}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref legacyBehavior>
                  <MenuItem as={Link} bg={path === "/" ? inactiveBg : undefined}
        color={path === "/" ? '#202023' : inactiveColor}>Works</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref legacyBehavior>
                  <MenuItem as={Link} bg={path === "/" ? inactiveBg : undefined}
        color={path === "/" ? '#202023' : inactiveColor}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar