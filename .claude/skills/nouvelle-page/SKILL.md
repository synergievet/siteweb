---
name: nouvelle-page
description: Créer une nouvelle page sur le site SynergieVet (Tarifs, Agenda des formations, Mentions légales, une page par formation…) et l'ajouter au menu. À utiliser quand la personne veut « une nouvelle page », « un onglet », « une rubrique ».
---

# Créer une nouvelle page

## 1. Comprendre ce qu'elle veut

Pose au maximum 3 questions simples, en une fois :
- Comment s'appelle la page (ce qui apparaîtra dans le menu) ?
- Qu'est-ce qu'on doit y trouver ? (texte à coller, idées en vrac, photos…)
- Elle doit apparaître dans le menu du haut, seulement en bas de page, ou juste via un lien ?

Si elle n'a pas encore de texte, propose d'en rédiger un premier jet dans le ton du site, qu'elle validera.

## 2. Construire la page

- Nouveau dossier dans `app/` au nom simple en minuscules sans accent : `app/tarifs/page.tsx` → adresse `/tarifs`. Lis d'abord le guide Next.js dans `node_modules/next/dist/docs/` si tu as un doute sur une API (voir AGENTS.md).
- Réutilise `Header` et `Footer` et le style des sections existantes (`components/`), les couleurs de la charte de `app/globals.css`.
- Ajoute des `metadata` (title « Nom de la page — SynergieVet », description en français).
- Menu : les liens actuels du `Header` sont des ancres (`#equipe`, `#contact`) qui ne marchent que sur l'accueil. Si tu ajoutes une page, transforme-les en `/#equipe`, `/#contact` pour qu'ils fonctionnent depuis toutes les pages, et ajoute le lien vers la nouvelle page (avec `next/link`).
- Vérifie l'affichage mobile du menu s'il y a maintenant plus de liens.

## 3. Montrer

Navigue l'aperçu vers la nouvelle page (`navigate` vers `http://localhost:3000/<page>`), vérifie avec `get_page_text`, teste le lien depuis le menu, puis :

> Ta nouvelle page « Tarifs » est prête, je te l'affiche à droite 👉 Tu y accèdes depuis le menu en haut. Qu'est-ce que tu en penses ?
