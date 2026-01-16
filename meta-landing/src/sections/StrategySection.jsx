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
      id="principes"
      title="Mes Principes"
      subtitle="Ce que j'ai appris"
    >
      <VStack align="start" gap={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%">
          <Card title="Fonction avant forme">
            Ca doit marcher d'abord. Le polish vient apres.
            Un design simple qui fonctionne bat un design complexe qui impressionne.
          </Card>

          <Card title="Contraintes creatives">
            Moins de couleurs, moins de fonts, moins d'elements.
            Les limites forcent la creativite.
          </Card>

          <Card title="Coherence partout">
            Memes espacements, memes proportions, memes rythmes.
            La repetition cree l'harmonie.
          </Card>

          <Card title="Tester souvent">
            Regarder sur mobile, sur grand ecran, de loin.
            Chaque perspective revele quelque chose.
          </Card>
        </SimpleGrid>

        <Box bg="gray.50" p={6} borderRadius="md" w="100%">
          <Text fontWeight="medium" fontSize="lg">
            Le secret? Y'en a pas. C'est juste de la pratique
            et des iterations. Simplifier jusqu'a l'essentiel.
          </Text>
        </Box>
      </VStack>
    </Section>
  )
}

export default StrategySection
