import { Text, VStack, Box, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/Section'

const Card = ({ title, children }) => (
  <Box
    p={6}
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
    transition="all 0.2s"
    _hover={{
      borderColor: 'accent',
      transform: 'translateY(-2px)',
      shadow: 'md',
    }}
    cursor="default"
  >
    <Text fontWeight="bold" mb={2}>{title}</Text>
    <Text color="gray.600" fontSize="sm">
      {children}
    </Text>
  </Box>
)

function StrategySection() {
  return (
    <Section
      id="strategy"
      title="Ma Strategie"
      subtitle="Ce que j'ai appris"
    >
      <VStack align="start" gap={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%">
          <Card title="Ship vite, polish apres">
            Je fais marcher d'abord. Le pixel-perfect vient apres.
            L'AI est meilleure pour ameliorer que pour deviner.
          </Card>

          <Card title="Contexte > Prompts">
            Un bon contexte (stack, style, exemples) bat
            des prompts elabores a chaque fois.
          </Card>

          <Card title="Composants reutilisables">
            Je demande des composants, pas des pages.
            Plus facile a debugger, plus facile a reutiliser.
          </Card>

          <Card title="Valider souvent">
            Apres chaque changement: refresh, test visuel,
            console check. Pas d'accumulation de bugs.
          </Card>
        </SimpleGrid>

        <Box bg="gray.50" p={6} borderRadius="md" w="100%">
          <Text fontWeight="medium" fontSize="lg">
            Le secret? Y'en a pas. C'est juste de la pratique
            et des iterations. L'AI accelere, mais c'est toi qui guides.
          </Text>
        </Box>
      </VStack>
    </Section>
  )
}

export default StrategySection
