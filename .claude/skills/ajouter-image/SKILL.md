---
name: ajouter-image
description: Ajouter ou remplacer une photo ou une image sur le site SynergieVet. À utiliser quand la personne veut mettre une photo, un logo, une illustration, changer une image existante, ou dit « j'ai une photo ».
---

# Ajouter une image

## 1. Récupérer la photo

Demande à la personne, en mots simples :

> Dépose ta photo dans le dossier **« photos-a-ajouter »** qui se trouve dans le dossier du site (sur le Bureau, dans « synergievet siteweb »), puis dis-moi quand c'est fait.
> Dis-moi aussi où tu veux la voir sur le site, et ce qu'on voit dessus (ça sert aux personnes malvoyantes).

Alternatives acceptées : un chemin de fichier qu'elle te donne (Téléchargements, Bureau…). Une image collée directement dans la conversation n'est pas un fichier que tu peux copier : redirige gentiment vers le dossier.

## 2. Préparer le fichier

- Formats acceptés : JPG, PNG, WebP, SVG. Pour un HEIC (iPhone), demande de l'exporter en JPG (« Sur ton téléphone, partage la photo en choisissant le format "Le plus compatible" »).
- Vérifie le poids : au-delà de ~1 Mo, réduis-la (largeur max ~2000 px) avec un outil disponible localement (ex. PowerShell + System.Drawing) ; `next/image` optimise ensuite l'affichage.
- Copie (ne déplace pas) vers `public/images/` avec un nom simple en minuscules, sans accent ni espace : `cabinet-facade.jpg`, `formation-echographie-2026.jpg`.
- Ne republie jamais une photo de personnes sans que la personne te confirme qu'elle a le droit de l'utiliser (demande-le simplement : « Tout le monde sur la photo est d'accord pour qu'elle soit sur le site ? »).

## 3. L'afficher

- Utilise `next/image` comme dans `components/Equipe.tsx` (largeur/hauteur réelles du fichier, `alt` descriptif en français, `sizes` adapté).
- Garde le style des sections existantes (coins arrondis, ombres, couleurs de la charte).
- Pour remplacer une image existante, garde le même emplacement et mets à jour le `alt` et les dimensions.

## 4. Montrer

Rafraîchis l'aperçu, vérifie que l'image s'affiche (mobile aussi : `resize_window` preset `mobile`, puis remets `desktop`), et demande :

> Voilà, la photo est en place, regarde à droite 👉 Ça te plaît comme ça ?
