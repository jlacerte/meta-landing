import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

function Section({ id, title, subtitle, children }) {
  return (
    <Box as="section" id={id} py={16} borderTop="1px solid" borderColor="gray.200">
      <Container maxW="900px">
        <VStack gap={8} align="stretch">
          <VStack gap={2} align="start">
            <Heading as="h2" size="xl" fontWeight="bold">
              {title}
            </Heading>
            {subtitle && (
              <Text fontSize="lg" color="gray.600">
                {subtitle}
              </Text>
            )}
          </VStack>
          {children}
        </VStack>
      </Container>
    </Box>
  )
}

export default Section
