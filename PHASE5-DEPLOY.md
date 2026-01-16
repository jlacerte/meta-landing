# Phase 5: Deploy

> *10 minutes en mode hackathon*

---

## Dashboard

```
Progress: [########  ] 80%

[ ] Build reussi
[ ] Repo GitHub
[ ] Netlify connecte
[ ] URL live
[ ] Soumission hackathon
```

| Tache | Status | Temps estime |
|-------|--------|--------------|
| Build production | [ ] | 1 min |
| Push GitHub | [ ] | 2 min |
| Setup Netlify | [ ] | 4 min |
| Test URL live | [ ] | 2 min |
| Soumettre | [ ] | 1 min |

---

## Objectifs

- [ ] Build sans erreur
- [ ] Code sur GitHub
- [ ] Site deploye sur Netlify
- [ ] URL partageable fonctionnelle
- [ ] Soumission complete

---

## Idees d'implementation

### 1. Build de production

```bash
cd D:\minihack\meta-landing
npm run build
```

**Resultat attendu:**
```
dist/
├── index.html
├── assets/
│   ├── index-xxxxx.js
│   └── index-xxxxx.css
```

### 2. Preview local (optionnel)

```bash
npm run preview
# Ouvre http://localhost:4173
```

### 3. Git init + push

```bash
# Si pas encore fait
git init
git add .
git commit -m "Initial commit - Meta Landing Page"

# Creer repo sur GitHub (via CLI ou web)
gh repo create meta-landing --public --source=. --push

# OU manuellement:
git remote add origin https://github.com/USERNAME/meta-landing.git
git branch -M main
git push -u origin main
```

### 4. Deploy sur Netlify

**Option A: Via interface web**
1. Aller sur [app.netlify.com](https://app.netlify.com)
2. "Add new site" > "Import an existing project"
3. Connecter GitHub
4. Selectionner le repo `meta-landing`
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. "Deploy site"

**Option B: Via Netlify CLI**
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Init et deploy
netlify init
# Choisir: Create & configure a new site
# Build command: npm run build
# Deploy directory: dist

# Deploy
netlify deploy --prod
```

### 5. Verifier le deploy

- URL format: `https://nom-random.netlify.app`
- Ou custom: `https://meta-landing.netlify.app` (si dispo)

### 6. Soumettre au hackathon

**Lien de soumission:**
[https://forms.gle/rMxQrfCJPbJTegGTA](https://forms.gle/rMxQrfCJPbJTegGTA)

**Infos a preparer:**
- URL du site deploye
- URL du repo GitHub (si demande)
- Nom/pseudo

---

## Suggestions de test

### Test 1: Build reussi
```bash
npm run build
```
- **Attendu:** Pas d'erreur, dossier `dist/` cree

### Test 2: Preview local
```bash
npm run preview
```
- Ouvrir http://localhost:4173
- **Attendu:** Site identique au dev

### Test 3: URL live accessible
- Ouvrir l'URL Netlify dans un navigateur incognito
- **Attendu:** Site charge completement

### Test 4: Test sur mobile reel
- Ouvrir l'URL sur ton telephone
- **Attendu:** Responsive correct, pas de bug

### Test 5: Partage
- Envoyer l'URL a quelqu'un
- **Attendu:** Ils peuvent voir le site sans probleme

### Test 6: HTTPS
- Verifier que l'URL est en `https://`
- **Attendu:** Cadenas vert dans le navigateur

---

## Troubleshooting

### Build echoue
```bash
# Verifier les erreurs
npm run build 2>&1 | head -50

# Souvent: import manquant ou typo
```

### Netlify 404 sur refresh
Creer `public/_redirects`:
```
/*    /index.html   200
```

### Assets pas charges
- Verifier que les chemins sont relatifs
- Pas de `/` au debut des imports

### Deploy stuck
- Verifier les logs dans Netlify dashboard
- "Deploys" > cliquer sur le deploy > voir les logs

---

## Checklist finale Phase 5

```
[ ] npm run build - success
[ ] npm run preview - site OK
[ ] Git commit et push
[ ] Netlify connecte au repo
[ ] Deploy automatique reussi
[ ] URL live fonctionne
[ ] Test mobile reel
[ ] Formulaire soumis
```

**Phase complete quand:** URL partageable + soumission faite

---

## DONE!

```
Progress: [##########] 100%

Site deploye: https://_______.netlify.app
```

**Felicitations!** Tu as build et deploye une landing page complete.

---

*Le feu crepite. On a traverse le tunnel.*
