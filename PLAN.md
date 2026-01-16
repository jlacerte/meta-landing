# Mini Hackathon - Meta Landing Page

> *Le feu crepite. On construit ensemble.*

---

## Dashboard Global

```
PROGRESSION TOTALE
==================
[██████████] 100% COMPLETE!

Phase 1: Setup      [██████████] [X]
Phase 2: Structure  [██████████] [X]
Phase 3: Contenu    [██████████] [X]
Phase 4: Design     [██████████] [X]
Phase 5: Deploy     [██████████] [X] DONE!
```

| Phase | Plan | Status | Temps | Objectif principal |
|-------|------|--------|-------|-------------------|
| 1 | [PHASE1-SETUP.md](./PHASE1-SETUP.md) | [X] | 5 min | Dev server running |
| 2 | [PHASE2-STRUCTURE.md](./PHASE2-STRUCTURE.md) | [X] | 10 min | Layout complet |
| 3 | [PHASE3-CONTENU.md](./PHASE3-CONTENU.md) | [X] | 15 min | Textes finaux |
| 4 | [PHASE4-DESIGN.md](./PHASE4-DESIGN.md) | [X] | 20 min | Polish pro |
| 5 | [PHASE5-DEPLOY.md](./PHASE5-DEPLOY.md) | [X] | 10 min | URL live |

**Total:** 60 minutes (mode hackathon)

---

## Quick Links

- **Setup:** `npm create vite@latest meta-landing -- --template react`
- **Dev:** `npm run dev` -> http://localhost:5173
- **Build:** `npm run build`
- **Deploy:** [Netlify](https://app.netlify.com)
- **Submit:** [Google Form](https://forms.gle/rMxQrfCJPbJTegGTA)

---

## Checklist Rapide

```
PHASE 1 - SETUP
[X] npm run dev fonctionne
[X] Chakra UI installe

PHASE 2 - STRUCTURE
[X] Header + Hero
[X] 3 sections
[X] Footer

PHASE 3 - CONTENU
[X] Setup section complete
[X] Process section complete
[X] Strategy section complete

PHASE 4 - DESIGN
[X] Responsive mobile
[X] Smooth scroll + hover states
[X] Hero fade-in animation

PHASE 5 - DEPLOY
[X] Build success
[X] URL live: https://wondrous-sprinkles-897f8d.netlify.app/
[ ] Soumis (formulaire hackathon)
```

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
Chakra UI v3 (API: createSystem + defineConfig)
Theme: light, minimaliste
Deploy: Netlify
```

> **Note Chakra v3:** L'API a change depuis v2.
> - `extendTheme` -> `createSystem` + `defineConfig`
> - `spacing` -> `gap` (sur VStack, HStack, etc.)
> - `<ChakraProvider theme={}>` -> `<ChakraProvider value={}>`

### Palette minimaliste (Chakra v3)
```javascript
// Theme Chakra v3
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f7f7f7' },
          100: { value: '#e3e3e3' },
          500: { value: '#1a1a1a' },
          900: { value: '#0a0a0a' },
        },
        accent: { value: '#2563eb' }, // Bleu vif pour CTAs
      },
      fonts: {
        heading: { value: '"Inter", system-ui, sans-serif' },
        body: { value: '"Inter", system-ui, sans-serif' },
      },
    },
  },
})
export const system = createSystem(defaultConfig, config)
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

*Le feu crepite. Le tunnel nous attend. On y va?*

---

## Annexe A: Techniques de Design (Extrait du guide)

> Source: `landing-page-design-techniques.md`

### Principes cles pour notre landing minimaliste

#### 1. Hero Section (Above the Fold)
- **Titre oriente benefice** - pas "Mon workflow AI" mais "Comment je build 10x plus vite"
- **Sous-titre qui clarifie** - 1-2 phrases max
- **CTA visible immediatement** - meme si optionnel pour nous
- **Message clair en < 5 secondes**

#### 2. Pattern en Z (pour pages visuelles)
```
[Logo]─────────────────[Nav]
   ↘
      [Hero Title]
         ↘
            [CTA]
```
L'oeil scanne naturellement en Z - placer les elements cles sur ce chemin.

#### 3. Espace Blanc = Minimalisme
- Les elements cles ressortent grace a l'espace autour
- Pas d'encombrement
- "Respiration visuelle"
- **C'est notre style choisi** - on en abuse (positivement)

#### 4. Hierarchie Typographique
- **Titres tres grands** (tendance 2025-2026)
- Contraste fort entre H1, H2, body
- Police: Inter (clean, moderne, lisible)
- Minimum 16px pour le body text

#### 5. Mobile-First Checklist
- [ ] Boutons minimum 44x44px
- [ ] Texte minimum 16px
- [ ] Pas de scroll horizontal
- [ ] Touch targets espaces

#### 6. Performance = Conversion
- 1 seconde de delai = -7% conversions
- Objectif: < 3 secondes de chargement
- Lighthouse > 90

#### 7. Micro-interactions Subtiles
- Hover states sur les cards/links
- Fade-in au scroll (framer-motion)
- Transitions fluides (0.2s)
- **Subtil, pas distrayant**

### Checklist Design Minimaliste

```
STRUCTURE
[ ] Hero: titre + sous-titre + (CTA optionnel)
[ ] 3-5 points/benefices max
[ ] Beaucoup d'espace blanc
[ ] Un seul CTA principal (si applicable)

TYPO
[ ] Inter font chargee
[ ] H1 tres grand (2xl-3xl)
[ ] Hierarchie claire (H1 > H2 > body)
[ ] Line-height 1.5 minimum

COULEURS
[ ] Palette limitee (2-3 couleurs)
[ ] Fond blanc
[ ] Texte quasi-noir (#0a0a0a)
[ ] Accent bleu pour CTA (#2563eb)
[ ] Gris pour texte secondaire

MOBILE
[ ] Boutons 44px minimum
[ ] Texte 16px minimum
[ ] Pas d'overflow horizontal
[ ] Navigation simplifiee

ANIMATIONS
[ ] Hero fade-in au load
[ ] Hover states sur cards
[ ] Scroll smooth entre sections
[ ] Respecter prefers-reduced-motion
```

---

## Annexe B: Sous-etapes detaillees par phase

### Phase 2 - Sous-etapes Structure

```
2.1 [ ] Creer dossier components/
2.2 [ ] Creer Header.jsx avec nav links
2.3 [ ] Creer Hero.jsx avec titre/sous-titre
2.4 [ ] Creer Section.jsx (composant reutilisable)
2.5 [ ] Creer dossier sections/
2.6 [ ] Creer SetupSection.jsx
2.7 [ ] Creer ProcessSection.jsx
2.8 [ ] Creer StrategySection.jsx
2.9 [ ] Creer Footer.jsx
2.10 [ ] Assembler dans App.jsx
2.11 [ ] Tester navigation scroll
```

### Phase 3 - Sous-etapes Contenu

```
3.1 [ ] Ecrire titre Hero (oriente benefice)
3.2 [ ] Ecrire sous-titre Hero (1-2 phrases)
3.3 [ ] Section Setup: decrire Cursor
3.4 [ ] Section Setup: decrire Claude Code
3.5 [ ] Section Setup: expliquer le combo
3.6 [ ] Section Process: etape 1 (resultat vs etapes)
3.7 [ ] Section Process: etape 2 (exemples visuels)
3.8 [ ] Section Process: etape 3 (iteration)
3.9 [ ] Section Process: exemple de prompt
3.10 [ ] Section Strategy: 4 tips en cards
3.11 [ ] Section Strategy: conclusion/callout
3.12 [ ] Relire tout - ton coherent?
```

### Phase 4 - Sous-etapes Design

```
4.1 [ ] Ajouter Inter font dans index.html
4.2 [ ] Configurer theme.js avec palette
4.3 [ ] Header sticky + z-index
4.4 [ ] Hero animation fade-in (framer-motion)
4.5 [ ] Hover states sur nav links
4.6 [ ] Hover states sur cards (translateY + shadow)
4.7 [ ] Responsive: tailles de texte (base/md)
4.8 [ ] Responsive: colonnes (base:1, md:2)
4.9 [ ] Responsive: padding (base:4, md:8)
4.10 [ ] Tester mobile (375px)
4.11 [ ] Tester tablet (768px)
4.12 [ ] Tester desktop (1280px)
4.13 [ ] Lighthouse audit
4.14 [ ] Fix issues Lighthouse
```

### Phase 5 - Sous-etapes Deploy

```
5.1 [ ] npm run build (fix erreurs si besoin)
5.2 [ ] npm run preview (test local)
5.3 [ ] git add + commit
5.4 [ ] Creer repo GitHub
5.5 [ ] git push
5.6 [ ] Connecter Netlify a GitHub
5.7 [ ] Configurer build (npm run build, dist)
5.8 [ ] Attendre deploy
5.9 [ ] Tester URL live
5.10 [ ] Tester sur mobile reel
5.11 [ ] Soumettre formulaire hackathon
```
