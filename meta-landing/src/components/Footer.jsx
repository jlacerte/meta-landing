import { Box, Container, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" py={8} borderTop="1px solid" borderColor="gray.200">
      <Container maxW="1200px">
        <Text textAlign="center" color="gray.500">
          Built with Cursor + Claude Code | 2026
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
