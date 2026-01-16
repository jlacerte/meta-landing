# Phase 1: Setup

> *5 minutes en mode hackathon*

---

## Dashboard

```
Progress: [          ] 0%

[ ] Projet cree
[ ] Chakra installe
[ ] Theme configure
[ ] Dev server running
```

| Tache | Status | Temps estime |
|-------|--------|--------------|
| Creer projet Vite | [ ] | 1 min |
| Installer Chakra UI | [ ] | 2 min |
| Configurer theme | [ ] | 1 min |
| Verifier dev server | [ ] | 1 min |

---

## Objectifs

- [ ] Projet React + Vite fonctionnel
- [ ] Chakra UI installe et configure
- [ ] Theme minimaliste en place
- [ ] Structure de base prete

---

## Idees d'implementation

### 1. Creer le projet

```bash
cd D:\minihack
npm create vite@latest meta-landing -- --template react
cd meta-landing
npm install
```

### 2. Installer Chakra UI

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### 3. Configurer le theme

**Creer `src/theme.js`:**
```javascript
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
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'brand.900',
      },
    },
  },
})

export default theme
```

### 4. Configurer main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
```

### 5. Nettoyer App.jsx

```jsx
import { Box, Heading, Text } from '@chakra-ui/react'

function App() {
  return (
    <Box minH="100vh" p={8}>
      <Heading>Meta Landing Page</Heading>
      <Text>Setup complete!</Text>
    </Box>
  )
}

export default App
```

### 6. Supprimer fichiers inutiles

- Supprimer `src/App.css`
- Supprimer `src/index.css`
- Retirer l'import CSS dans main.jsx

---

## Suggestions de test

### Test 1: Dev server demarre
```bash
npm run dev
```
**Attendu:** Server sur `http://localhost:5173`

### Test 2: Page visible
- Ouvrir `http://localhost:5173`
- **Attendu:** "Meta Landing Page" et "Setup complete!" visibles

### Test 3: Chakra fonctionne
- Modifier la couleur du Heading: `<Heading color="accent">`
- **Attendu:** Texte devient bleu (#2563eb)

### Test 4: Hot reload
- Modifier le texte dans App.jsx
- **Attendu:** Changement instantane sans refresh manuel

### Test 5: Console propre
- Ouvrir DevTools (F12) > Console
- **Attendu:** Aucune erreur rouge

---

## Checklist finale Phase 1

```
[ ] npm run dev fonctionne
[ ] Page affiche sans erreur
[ ] Chakra UI charge correctement
[ ] Theme custom applique
[ ] Console sans erreur
```

**Phase complete quand:** Dev server tourne + page visible + Chakra fonctionne

---

*Setup termine? -> PHASE2-STRUCTURE.md*
