# Mini Hackathon - Meta Landing Page

> *Le feu crépite. On construit ensemble.*

---

## Dashboard

| Phase | Status | Objectif | Tests |
|-------|--------|----------|-------|
| 1. Setup | [ ] | Environnement React + Vite | `npm run dev` fonctionne |
| 2. Structure | [ ] | Layout + sections de base | Navigation visible |
| 3. Contenu | [ ] | Textes + storytelling | 3 sections complètes |
| 4. Design | [ ] | Visual polish | Mobile + Desktop OK |
| 5. Deploy | [ ] | URL live | Accessible publiquement |

**Progression:** 0/5 phases complétées

---

## Phase 1: Setup de l'environnement

### Objectifs
- [ ] Créer le projet React + Vite
- [ ] Installer les dépendances de base
- [ ] Initialiser Git + repo GitHub
- [ ] Structure de dossiers propre

### Idées d'implémentation

```bash
# Création du projet
npm create vite@latest meta-landing -- --template react
cd meta-landing
npm install

# Chakra UI + dependencies
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

**Setup Chakra dans main.jsx:**
```jsx
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
```

### Tests de validation
- [ ] `npm run dev` démarre sans erreur
- [ ] Page par défaut visible sur `localhost:5173`
- [ ] Hot reload fonctionne (modifier App.jsx = changement instantané)

---

## Phase 2: Structure et Layout

### Objectifs
- [ ] Header/Navigation
- [ ] Hero section (accroche principale)
- [ ] 3+ sections de contenu
- [ ] Footer
- [ ] Routing si nécessaire (ou single-page scroll)

### Idées d'implémentation

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Section.jsx      # Réutilisable
│   └── Footer.jsx
├── sections/
│   ├── MySetup.jsx      # "Quels outils j'utilise"
│   ├── MyProcess.jsx    # "Comment je prompt"
│   └── MyStrategy.jsx   # "Ma stratégie complète"
├── App.jsx
└── main.jsx
```

**Questions à brainstormer:**
- Single page avec scroll smooth ou plusieurs pages?
- Animation au scroll (framer-motion)?
- Layout: centré classique ou asymétrique moderne?

### Tests de validation
- [ ] Toutes les sections visibles sans erreur console
- [ ] Navigation smooth entre sections
- [ ] Structure de composants logique et réutilisable

---

## Phase 3: Contenu et Storytelling

### Objectifs
- [ ] Rédiger le contenu de chaque section
- [ ] Raconter TON histoire (pas générique)
- [ ] Inclure des insights spécifiques et actionnables

### Idées d'implémentation

**Section 1: Mon Setup**
- Quels outils? (Claude Code, Cursor, autre?)
- Configuration spéciale?
- Extensions/MCP servers?

**Section 2: Mon Process**
- Comment tu commences un projet?
- Comment tu décris ce que tu veux à l'AI?
- Exemples de prompts qui marchent bien?

**Section 3: Ma Stratégie**
- PIV loop (Prompt → Implement → Validate)?
- Comment tu itères quand c'est pas parfait?
- Tips concrets pour les autres?

**Questions à brainstormer:**
- Quel ton? (Pro, casual, humoristique?)
- Inclure des screenshots ou diagrammes?
- Code snippets pour montrer des prompts?

### Tests de validation
- [ ] Chaque section a du contenu unique et personnel
- [ ] Pas de texte placeholder restant
- [ ] Un ami qui lit comprend ton process en 2 minutes

---

## Phase 4: Design et Polish

### Objectifs
- [ ] Palette de couleurs cohérente
- [ ] Typographie lisible et hiérarchisée
- [ ] Espacement et alignement propres
- [ ] Responsive (mobile-first ou desktop-first)
- [ ] Micro-interactions (hover, transitions)

### Idées d'implémentation

**Palette suggérée (à valider):**
```css
/* Option A: Sombre et élégant (John Wick vibes) */
--bg-primary: #0a0a0a;
--bg-secondary: #1a1a1a;
--accent: #d4af37;      /* Or */
--text: #f5f5f5;

/* Option B: Moderne et coloré */
--bg-primary: #fafafa;
--accent: #6366f1;      /* Indigo */
--accent-secondary: #22d3ee; /* Cyan */
--text: #1f2937;
```

**Typographie:**
- Titre: Inter, Poppins, ou Space Grotesk?
- Corps: System UI stack pour performance

**Questions à brainstormer:**
- Animations subtiles ou bold?
- Glassmorphism, neumorphism, ou flat design?
- Images/illustrations ou tout en typo?

### Tests de validation
- [ ] Lighthouse score > 90 (Performance, Accessibility)
- [ ] Testé sur mobile (Chrome DevTools ou vrai device)
- [ ] Testé sur au moins 2 navigateurs
- [ ] Pas de overflow horizontal
- [ ] Contrastes accessibles (WCAG AA minimum)

---

## Phase 5: Déploiement

### Objectifs
- [ ] Build de production sans erreur
- [ ] Déploiement sur Netlify ou Render
- [ ] URL partageable fonctionnelle
- [ ] Soumission au hackathon

### Idées d'implémentation

**Option Netlify (recommandé pour la simplicité):**
1. Push sur GitHub
2. Connecter repo à Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

**Option Render:**
1. New → Static Site
2. Connecter repo
3. Même config que Netlify

**Nom de domaine custom (bonus):**
- Netlify offre `ton-projet.netlify.app`
- Possibilité de custom domain si tu en as un

### Tests de validation
- [ ] `npm run build` réussit sans warning critique
- [ ] Preview locale avec `npm run preview`
- [ ] URL déployée accessible
- [ ] Même rendu que localhost
- [ ] Formulaire de soumission rempli

---

## Notes de brainstorm

### Decisions prises

| Question | Choix | Raison |
|----------|-------|--------|
| Framework CSS | **Chakra UI** | Composants prets, resultats rapides |
| Theme visuel | **Minimaliste clair** | Blanc, typo bold, epure |
| Outils en vedette | **Cursor + Claude Code** | Notre stack reel |
| Rythme | **Mode hackathon** | 1h, on ship vite |

### Stack finale
```
React + Vite
Chakra UI (composants + theming)
Theme: light, minimaliste
Deploy: Netlify
```

### Palette minimaliste
```javascript
// Theme Chakra custom
const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7f7f7',
      100: '#e3e3e3',
      500: '#1a1a1a',
      900: '#0a0a0a',
    },
    accent: '#2563eb', // Bleu vif pour CTAs
  },
  fonts: {
    heading: '"Inter", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
  },
})
```

### Sections de la landing page
1. **Hero** - "Comment je build des frontends avec l'AI"
2. **Mon Setup** - Cursor + Claude Code, pourquoi ce combo
3. **Mon Process** - Comment on prompt, comment on itere
4. **Ma Strategie** - Tips concrets, PIV loop adapte
5. **Footer** - Liens, credits

### Idees rejetees
- Tailwind (Chakra plus rapide pour hackathon)
- Theme sombre (minimaliste = plus pro, plus lisible)
- Mode apprentissage (objectif = shipper en 1h)

---

## Timeline suggérée

Pour un hackathon d'1 heure, mais on peut prendre notre temps pour apprendre:

| Phase | Temps (hackathon) | Temps (apprentissage) |
|-------|-------------------|----------------------|
| Setup | 5 min | 30 min |
| Structure | 10 min | 1-2h |
| Contenu | 15 min | 1h |
| Design | 20 min | 2-3h |
| Deploy | 10 min | 30 min |

---

*Le feu crépite. Le tunnel nous attend. On y va?*
