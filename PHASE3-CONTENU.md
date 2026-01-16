# Phase 3: Contenu

> *15 minutes en mode hackathon*

---

## Dashboard

```
Progress: [####      ] 40%

[ ] Hero texte final
[ ] Section Setup - contenu
[ ] Section Process - contenu
[ ] Section Strategy - contenu
[ ] Tous placeholders remplaces
```

| Tache | Status | Temps estime |
|-------|--------|--------------|
| Hero copy | [ ] | 2 min |
| Setup content | [ ] | 4 min |
| Process content | [ ] | 5 min |
| Strategy content | [ ] | 4 min |

---

## Objectifs

- [ ] Textes personnels et authentiques
- [ ] Insights specifiques (pas generiques)
- [ ] Storytelling clair
- [ ] Zero placeholder restant

---

## Idees d'implementation

### Hero - Texte final

```jsx
<Heading as="h1" size="2xl" fontWeight="bold" lineHeight="1.2">
  Comment je build des frontends avec l'AI
</Heading>
<Text fontSize="xl" color="gray.600">
  Mon workflow reel avec Cursor et Claude Code.
  Pas de magie, juste une methode qui marche.
</Text>
```

### Section Setup - Contenu

**Angle:** Pourquoi Cursor + Claude Code?

```jsx
import { Text, VStack, HStack, Box, Icon } from '@chakra-ui/react'
import Section from '../components/Section'

function SetupSection() {
  return (
    <Section
      id="setup"
      title="Mon Setup"
      subtitle="Deux outils, zero friction"
    >
      <VStack align="start" spacing={6}>

        {/* Cursor */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Cursor
          </Text>
          <Text color="gray.600">
            Mon editeur principal. L'AI est integree directement -
            je selectionne du code, je demande une modification, c'est fait.
            Pas besoin de copier-coller entre fenetres.
          </Text>
        </Box>

        {/* Claude Code */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Claude Code
          </Text>
          <Text color="gray.600">
            Pour les taches plus larges: architecture, refactoring,
            creation de plusieurs fichiers d'un coup.
            Je lui donne le contexte complet et il execute.
          </Text>
        </Box>

        {/* Pourquoi ce combo */}
        <Box bg="brand.50" p={4} borderRadius="md" w="100%">
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
```

### Section Process - Contenu

**Angle:** Comment je prompt?

```jsx
import { Text, VStack, Box, Code } from '@chakra-ui/react'
import Section from '../components/Section'

function ProcessSection() {
  return (
    <Section
      id="process"
      title="Mon Process"
      subtitle="Comment je parle a l'AI"
    >
      <VStack align="start" spacing={6}>

        {/* Etape 1 */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            1. Je decris le resultat, pas les etapes
          </Text>
          <Text color="gray.600" mb={3}>
            Mauvais: "Cree un div avec flexbox et padding 20px"
          </Text>
          <Text color="gray.600">
            Bon: "Une card avec titre, description et bouton, style minimaliste"
          </Text>
        </Box>

        {/* Etape 2 */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            2. Je donne des exemples visuels
          </Text>
          <Text color="gray.600">
            "Inspire-toi du style de Linear ou Notion - clean,
            beaucoup d'espace blanc, typo bold"
          </Text>
        </Box>

        {/* Etape 3 */}
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

        {/* Code example */}
        <Box bg="gray.900" color="gray.100" p={4} borderRadius="md" w="100%" fontSize="sm">
          <Code bg="transparent" color="gray.100" display="block" whiteSpace="pre">
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
```

### Section Strategy - Contenu

**Angle:** Ma strategie globale

```jsx
import { Text, VStack, Box, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/Section'

function StrategySection() {
  return (
    <Section
      id="strategy"
      title="Ma Strategie"
      subtitle="Ce que j'ai appris"
    >
      <VStack align="start" spacing={6}>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">

          {/* Tip 1 */}
          <Box p={6} border="1px" borderColor="brand.100" borderRadius="md">
            <Text fontWeight="bold" mb={2}>Ship vite, polish apres</Text>
            <Text color="gray.600" fontSize="sm">
              Je fais marcher d'abord. Le pixel-perfect vient apres.
              L'AI est meilleure pour ameliorer que pour deviner.
            </Text>
          </Box>

          {/* Tip 2 */}
          <Box p={6} border="1px" borderColor="brand.100" borderRadius="md">
            <Text fontWeight="bold" mb={2}>Contexte > Prompts</Text>
            <Text color="gray.600" fontSize="sm">
              Un bon contexte (stack, style, exemples) bat
              des prompts elabores a chaque fois.
            </Text>
          </Box>

          {/* Tip 3 */}
          <Box p={6} border="1px" borderColor="brand.100" borderRadius="md">
            <Text fontWeight="bold" mb={2}>Composants reutilisables</Text>
            <Text color="gray.600" fontSize="sm">
              Je demande des composants, pas des pages.
              Plus facile a debugger, plus facile a reutiliser.
            </Text>
          </Box>

          {/* Tip 4 */}
          <Box p={6} border="1px" borderColor="brand.100" borderRadius="md">
            <Text fontWeight="bold" mb={2}>Valider souvent</Text>
            <Text color="gray.600" fontSize="sm">
              Apres chaque changement: refresh, test visuel,
              console check. Pas d'accumulation de bugs.
            </Text>
          </Box>

        </SimpleGrid>

        {/* Conclusion */}
        <Box bg="brand.50" p={6} borderRadius="md" w="100%">
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
```

---

## Suggestions de test

### Test 1: Pas de placeholder
- Ctrl+F "lorem", "TODO", "contenu a venir"
- **Attendu:** Zero resultat

### Test 2: Lisibilite
- Lire chaque section a voix haute
- **Attendu:** Ca sonne naturel, pas robotique

### Test 3: Coherence du ton
- **Attendu:** Meme voix partout (casual mais pro)

### Test 4: Valeur ajoutee
- Un ami qui lit apprend quelque chose?
- **Attendu:** Au moins 3 tips concrets et actionnables

### Test 5: Longueur appropriee
- Chaque section: 30 secondes de lecture max
- **Attendu:** Dense mais pas overwhelming

---

## Checklist finale Phase 3

```
[ ] Hero texte final et accrocheur
[ ] Section Setup complete
[ ] Section Process complete
[ ] Section Strategy complete
[ ] Zero placeholder
[ ] Ton coherent partout
```

**Phase complete quand:** Tout le contenu est la + ca sonne authentique

---

*Contenu termine? -> PHASE4-DESIGN.md*
