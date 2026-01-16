# Phase 2: Structure

> *10 minutes en mode hackathon*

---

## Dashboard

```
Progress: [##        ] 20%

[ ] Header cree
[ ] Hero section
[ ] Section Setup
[ ] Section Process
[ ] Section Strategy
[ ] Footer
```

| Tache | Status | Temps estime |
|-------|--------|--------------|
| Creer composants | [ ] | 3 min |
| Header + Nav | [ ] | 2 min |
| Hero section | [ ] | 2 min |
| 3 sections contenu | [ ] | 2 min |
| Footer | [ ] | 1 min |

---

## Objectifs

- [ ] Structure de composants claire
- [ ] Layout single-page avec scroll
- [ ] Header avec navigation
- [ ] Hero accrocheur
- [ ] 3 sections de contenu
- [ ] Footer minimal

---

## Idees d'implementation

> **CHAKRA UI v3 - Changements de syntaxe:**
> - `spacing` -> `gap` (sur VStack, HStack, Stack, SimpleGrid)
> - `borderBottom="1px solid"` -> `borderBottom="1px solid"`
> - Les props responsive restent: `{{ base: 'value', md: 'value' }}`

### Structure des fichiers

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Section.jsx       # Composant reutilisable
│   └── Footer.jsx
├── sections/
│   ├── SetupSection.jsx
│   ├── ProcessSection.jsx
│   └── StrategySection.jsx
├── App.jsx
├── theme.js
└── main.jsx
```

### Header.jsx

```jsx
import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react'

function Header() {
  return (
    <Box as="header" py={4} px={8} borderBottom="1px solid" borderColor="brand.100">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading size="md" fontWeight="bold">
          Meta Landing
        </Heading>
        <HStack gap={8}>
          <Link href="#setup" fontWeight="medium">Setup</Link>
          <Link href="#process" fontWeight="medium">Process</Link>
          <Link href="#strategy" fontWeight="medium">Strategy</Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
```

### Hero.jsx

```jsx
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

function Hero() {
  return (
    <Box py={20} textAlign="center">
      <Container maxW="800px">
        <VStack gap={6}>
          <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="1.2">
            Comment je build des frontends avec l'AI
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="600px">
            Mon workflow avec Cursor + Claude Code pour creer des interfaces rapidement.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero
```

### Section.jsx (reutilisable)

```jsx
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

function Section({ id, title, subtitle, children }) {
  return (
    <Box as="section" id={id} py={16} borderTop="1px" borderColor="brand.100">
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
```

### SetupSection.jsx

```jsx
import { Text, VStack } from '@chakra-ui/react'
import Section from '../components/Section'

function SetupSection() {
  return (
    <Section
      id="setup"
      title="Mon Setup"
      subtitle="Les outils que j'utilise au quotidien"
    >
      <VStack align="start" spacing={4}>
        <Text>Contenu a venir...</Text>
      </VStack>
    </Section>
  )
}

export default SetupSection
```

### Footer.jsx

```jsx
import { Box, Container, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" py={8} borderTop="1px" borderColor="brand.100">
      <Container maxW="1200px">
        <Text textAlign="center" color="gray.500">
          Built with Cursor + Claude Code | 2026
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
```

### App.jsx (assemble tout)

```jsx
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SetupSection from './sections/SetupSection'
import ProcessSection from './sections/ProcessSection'
import StrategySection from './sections/StrategySection'

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <SetupSection />
      <ProcessSection />
      <StrategySection />
      <Footer />
    </Box>
  )
}

export default App
```

---

## Suggestions de test

### Test 1: Tous les composants chargent
- **Attendu:** Page complete sans erreur console

### Test 2: Navigation scroll
- Cliquer sur "Setup" dans le header
- **Attendu:** Page scroll vers la section #setup

### Test 3: Responsive basique
- Ouvrir DevTools > Toggle device toolbar (Ctrl+Shift+M)
- Tester sur mobile (375px)
- **Attendu:** Contenu lisible, pas de overflow horizontal

### Test 4: Structure logique
- Inspecter le DOM (F12 > Elements)
- **Attendu:** header > main content > sections > footer

### Test 5: Composant Section reutilisable
- Les 3 sections utilisent le meme composant Section
- **Attendu:** Style coherent entre sections

---

## Checklist finale Phase 2

```
[ ] Header avec navigation
[ ] Hero visible et centre
[ ] 3 sections avec titres
[ ] Footer en bas
[ ] Scroll smooth vers sections
[ ] Pas d'erreur console
```

**Phase complete quand:** Toutes les sections visibles + navigation fonctionne

---

*Structure terminee? -> PHASE3-CONTENU.md*
