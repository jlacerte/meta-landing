import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionVStack = motion.create(VStack)

function Hero() {
  return (
    <Box py={{ base: 16, md: 24 }} textAlign="center">
      <Container maxW="800px">
        <MotionVStack
          gap={6}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h1"
            size={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Template Minimaliste
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="600px"
          >
            Moins c'est plus. Espace blanc, typographie bold,
            zero distraction. Une approche qui fonctionne.
          </Text>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default Hero
