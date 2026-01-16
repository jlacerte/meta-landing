import { Text, VStack, Box } from '@chakra-ui/react'
import Section from '../components/Section'

function SetupSection() {
  return (
    <Section
      id="approche"
      title="Mon Approche"
      subtitle="Les fondamentaux du minimalisme"
    >
      <VStack align="start" gap={6}>
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Espace blanc genereux
          </Text>
          <Text color="gray.600">
            L'espace n'est pas vide - il guide l'oeil.
            Chaque element respire, rien n'est entasse.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Typographie forte
          </Text>
          <Text color="gray.600">
            Des titres qui s'imposent, du texte qui se lit facilement.
            Une hierarchie claire sans decoration superflue.
          </Text>
        </Box>

        <Box bg="gray.50" p={4} borderRadius="md" w="100%">
          <Text fontWeight="medium">
            Le minimalisme n'est pas l'absence de style -
            c'est le style reduit a l'essentiel.
          </Text>
        </Box>
      </VStack>
    </Section>
  )
}

export default SetupSection
