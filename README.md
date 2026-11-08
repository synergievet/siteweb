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

- `app/page.tsx` : page d'accueil (assemble les sections)
- `app/layout.tsx` : mise en page commune (métadonnées, polices Urbanist + Inter, balise `<html>`)
- `app/globals.css` : styles globaux et couleurs de la charte (tokens Tailwind : `navy`, `emerald`, `deep`, `mint`, `paper`…)
- `app/icon.svg` : favicon (la patte du logo)
- `components/` : sections de la page (`Header`, `Hero`, `Formations`, `Equipe`, `Contact`, `Footer`) et éléments du logo (`Logo`, `Paw`, `Bubbles`)
- `public/images/` : photos (`equipe.jpg`)

Pour ajouter une page, créer un dossier dans `app/` avec un fichier `page.tsx` (par exemple `app/contact/page.tsx` → `/contact`).

## Commandes utiles

- `npm run dev` : serveur de développement
- `npm run build` : build de production (ce que fait Vercel)
- `npm run lint` : vérification du code
