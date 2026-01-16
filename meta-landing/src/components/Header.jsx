import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react'

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    fontWeight="medium"
    transition="color 0.2s"
    _hover={{
      color: 'accent',
      textDecoration: 'none',
    }}
  >
    {children}
  </Link>
)

function Header() {
  return (
    <Box
      as="header"
      py={4}
      px={8}
      borderBottom="1px solid"
      borderColor="gray.200"
      position="sticky"
      top={0}
      bg="white"
      zIndex={100}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading size="md" fontWeight="bold">
          Meta Landing
        </Heading>
        <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
          <NavLink href="#setup">Setup</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#strategy">Strategy</NavLink>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
