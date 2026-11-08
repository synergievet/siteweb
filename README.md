# siteweb

Site vitrine de Synergievet, construit avec [Next.js](https://nextjs.org) et déployé sur [Vercel](https://vercel.com).

## Lancer le site en local

Prérequis : Node.js (version LTS) installé.

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Structure

- `app/page.tsx` : page d'accueil
- `app/layout.tsx` : mise en page commune (titre, police, balise `<html>`)
- `app/globals.css` : styles globaux (Tailwind CSS)
- `public/` : images et fichiers statiques

Pour ajouter une page, créer un dossier dans `app/` avec un fichier `page.tsx` (par exemple `app/contact/page.tsx` → `/contact`).

## Commandes utiles

- `npm run dev` : serveur de développement
- `npm run build` : build de production (ce que fait Vercel)
- `npm run lint` : vérification du code
