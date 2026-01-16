import { Text, VStack, Box, Code } from '@chakra-ui/react'
import Section from '../components/Section'

function ProcessSection() {
  return (
    <Section
      id="process"
      title="Mon Process"
      subtitle="Comment je parle a l'AI"
    >
      <VStack align="start" gap={6}>
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            1. Je decris le resultat, pas les etapes
          </Text>
          <Text color="gray.600" mb={2}>
            Mauvais: "Cree un div avec flexbox et padding 20px"
          </Text>
          <Text color="gray.600">
            Bon: "Une card avec titre, description et bouton, style minimaliste"
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            2. Je donne des exemples visuels
          </Text>
          <Text color="gray.600">
            "Inspire-toi du style de Linear ou Notion - clean,
            beaucoup d'espace blanc, typo bold"
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            3. J'itere vite
          </Text>
          <Text color="gray.600">
            Premier resultat pas parfait? Normal.
            "Plus d'espace", "Moins de couleur", "Plus gros".
            3-4 iterations et c'est bon.
          </Text>
        </Box>

        <Box bg="gray.900" color="gray.100" p={4} borderRadius="md" w="100%" fontSize="sm">
          <Code bg="transparent" color="gray.100" display="block" whiteSpace="pre-wrap">
{`// Mon prompt typique:
"Cree une section hero minimaliste.
Titre bold, sous-titre en gris, centre.
Style: Linear, Notion, Stripe.
Chakra UI, pas de CSS custom."`}
          </Code>
        </Box>
      </VStack>
    </Section>
  )
}

export default ProcessSection
