import { Text, VStack, Box } from '@chakra-ui/react'
import Section from '../components/Section'

function SetupSection() {
  return (
    <Section
      id="setup"
      title="Mon Setup"
      subtitle="Deux outils, zero friction"
    >
      <VStack align="start" gap={6}>
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Cursor
          </Text>
          <Text color="gray.600">
            Mon editeur principal. L'AI est integree directement -
            je selectionne du code, je demande une modification, c'est fait.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Claude Code
          </Text>
          <Text color="gray.600">
            Pour les taches plus larges: architecture, refactoring,
            creation de plusieurs fichiers d'un coup.
          </Text>
        </Box>

        <Box bg="gray.50" p={4} borderRadius="md" w="100%">
          <Text fontWeight="medium">
            Pourquoi ce combo? Cursor pour le micro (edits rapides),
            Claude Code pour le macro (features completes).
          </Text>
        </Box>
      </VStack>
    </Section>
  )
}

export default SetupSection
