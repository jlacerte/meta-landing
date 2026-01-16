import { Text, VStack, Box } from '@chakra-ui/react'
import Section from '../components/Section'

function ProcessSection() {
  return (
    <Section
      id="methode"
      title="Ma Methode"
      subtitle="Comment je construis"
    >
      <VStack align="start" gap={6}>
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            1. Vision claire du resultat
          </Text>
          <Text color="gray.600">
            Je commence par definir ce que je veux voir, pas comment le faire.
            Une image mentale precise guide tout le reste.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            2. References visuelles
          </Text>
          <Text color="gray.600">
            Je m'inspire des meilleurs: Linear, Notion, Stripe.
            Leur point commun? Simplicite radicale, execution impeccable.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            3. Iteration rapide
          </Text>
          <Text color="gray.600">
            Premier jet rarement parfait - et c'est correct.
            Ajuster, affiner, simplifier. 3-4 passes et c'est la.
          </Text>
        </Box>

        <Box bg="gray.50" p={4} borderRadius="md" w="100%">
          <Text fontWeight="medium">
            La perfection n'est pas quand il n'y a plus rien a ajouter,
            mais quand il n'y a plus rien a enlever.
          </Text>
        </Box>
      </VStack>
    </Section>
  )
}

export default ProcessSection
