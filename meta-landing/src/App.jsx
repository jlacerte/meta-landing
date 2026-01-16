import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react'

function App() {
  return (
    <Box minH="100vh">
      <Container maxW="800px" py={20}>
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Meta Landing Page
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Setup complete! Chakra UI is working.
          </Text>
          <Text color="accent" fontWeight="medium">
            This text should be blue if the theme is loaded.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default App
