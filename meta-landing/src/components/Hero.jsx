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
            Comment je build des frontends avec l'AI
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="600px"
          >
            Mon workflow reel avec Cursor et Claude Code.
            Pas de magie, juste une methode qui marche.
          </Text>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default Hero
