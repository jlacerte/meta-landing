# Phase 4: Design & Polish

> *20 minutes en mode hackathon*

---

## Dashboard

```
Progress: [######    ] 60%

[ ] Typographie ajustee
[ ] Espacements coherents
[ ] Responsive mobile
[ ] Micro-interactions
[ ] Lighthouse check
```

| Tache | Status | Temps estime |
|-------|--------|--------------|
| Typography fine-tuning | [ ] | 4 min |
| Spacing & alignment | [ ] | 4 min |
| Mobile responsive | [ ] | 5 min |
| Hover states | [ ] | 3 min |
| Scroll smooth | [ ] | 2 min |
| Final polish | [ ] | 2 min |

---

## Objectifs

- [ ] Visual polish professionnel
- [ ] Typographie claire et hierarchisee
- [ ] Responsive parfait (mobile-first)
- [ ] Micro-interactions subtiles
- [ ] Lighthouse > 90

---

## Idees d'implementation

### Typographie - Theme update

```javascript
// theme.js - mise a jour
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7f7f7',
      100: '#e3e3e3',
      500: '#1a1a1a',
      900: '#0a0a0a',
    },
    accent: '#2563eb',
  },
  fonts: {
    heading: '"Inter", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3.5rem',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'white',
        color: 'brand.900',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
          color: 'accent',
        },
        transition: 'color 0.2s',
      },
    },
  },
})

export default theme
```

### Ajouter Inter font

Dans `index.html`:
```html
<head>
  <!-- ... -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

### Header - Polish

```jsx
import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react'

function Header() {
  return (
    <Box
      as="header"
      py={4}
      px={8}
      borderBottom="1px"
      borderColor="brand.100"
      position="sticky"
      top={0}
      bg="white"
      zIndex={100}
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        <Heading size="md" fontWeight="bold">
          Meta Landing
        </Heading>
        <HStack
          spacing={8}
          display={{ base: 'none', md: 'flex' }}
        >
          <Link href="#setup">Setup</Link>
          <Link href="#process">Process</Link>
          <Link href="#strategy">Strategy</Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
```

### Hero - Polish avec animation

```jsx
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionVStack = motion(VStack)

function Hero() {
  return (
    <Box py={{ base: 16, md: 24 }} textAlign="center">
      <Container maxW="800px">
        <MotionVStack
          spacing={6}
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
```

### Cards avec hover state

```jsx
<Box
  p={6}
  border="1px"
  borderColor="brand.100"
  borderRadius="md"
  transition="all 0.2s"
  _hover={{
    borderColor: 'accent',
    transform: 'translateY(-2px)',
    shadow: 'sm'
  }}
>
  {/* content */}
</Box>
```

### Responsive breakpoints

```jsx
// Chakra breakpoints par defaut:
// sm: 480px
// md: 768px
// lg: 992px
// xl: 1280px

// Usage dans les composants:
<Heading size={{ base: 'xl', md: '2xl' }}>
<SimpleGrid columns={{ base: 1, md: 2 }}>
<Box py={{ base: 12, md: 20 }}>
<HStack display={{ base: 'none', md: 'flex' }}>
```

### Mobile menu (optionnel si temps)

```jsx
import { IconButton, Drawer, DrawerOverlay, DrawerContent,
         DrawerBody, VStack, Link, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <IconButton
        icon={<HamburgerIcon />}
        onClick={onOpen}
        variant="ghost"
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody pt={12}>
            <VStack spacing={6} align="start">
              <Link href="#setup" onClick={onClose}>Setup</Link>
              <Link href="#process" onClick={onClose}>Process</Link>
              <Link href="#strategy" onClick={onClose}>Strategy</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
```

---

## Suggestions de test

### Test 1: Mobile responsive
- DevTools > Toggle device (Ctrl+Shift+M)
- Tester: iPhone SE (375px), iPad (768px), Desktop (1280px)
- **Attendu:** Lisible et bien aligne a toutes les tailles

### Test 2: Scroll smooth
- Cliquer sur nav links
- **Attendu:** Animation fluide vers les sections

### Test 3: Hover states
- Survoler les links et cards
- **Attendu:** Feedback visuel subtil

### Test 4: Lighthouse audit
```bash
# Dans Chrome DevTools > Lighthouse
# Run audit: Performance, Accessibility, Best Practices, SEO
```
- **Attendu:** Score > 90 dans chaque categorie

### Test 5: Pas d'overflow
- Scroll horizontal sur mobile?
- **Attendu:** Aucun scroll horizontal

### Test 6: Animation load
- Hard refresh (Ctrl+Shift+R)
- **Attendu:** Hero fade in smooth

---

## Checklist finale Phase 4

```
[ ] Inter font charge
[ ] Scroll smooth fonctionne
[ ] Header sticky
[ ] Hover states sur links et cards
[ ] Mobile: navigation lisible
[ ] Mobile: pas d'overflow
[ ] Lighthouse > 90
[ ] Animations subtiles (pas over-the-top)
```

**Phase complete quand:** Ca fait pro sur mobile ET desktop

---

*Design termine? -> PHASE5-DEPLOY.md*
