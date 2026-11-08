---
name: demarrage
description: Rituel de début de conversation sur le site SynergieVet — vérifier que le site est à jour, lancer l'aperçu, l'afficher dans le navigateur à côté et demander ce que la personne veut faire évoluer. À utiliser au tout premier message de chaque nouvelle conversation, quel qu'il soit, ou quand quelqu'un dit « on commence », « montre-moi le site », « bonjour ».
---

# Démarrage d'une conversation

Objectif : en moins d'une minute, la personne voit son site à côté de la conversation et peut dire ce qu'elle veut changer. Rappel : aucun mot technique (voir CLAUDE.md).

## 1. Vérifier que le site est à jour

Le hook de démarrage (`.claude/hooks/demarrage.sh`) a déjà fait un `git pull --ff-only` et t'a donné son rapport dans le contexte. Lis-le :

- **« Mise à jour : OK »** → continue.
- **Échec de la mise à jour** → refais `git fetch origin` puis `git status`. Si des changements locaux non publiés bloquent, ne les jette pas : tente `git stash`, `git pull --ff-only`, `git stash pop`. Si un conflit apparaît, résous-le en gardant les deux intentions si possible. Si tu ne peux pas résoudre sans risque, dis simplement à la personne : « Je n'arrive pas à récupérer la toute dernière version, il faut demander à Astrid de jeter un œil. On peut quand même regarder le site en attendant. »
- **Changements locaux non publiés** listés → garde-les en tête : à la fin de l'étape 4, signale-les gentiment (« Il reste des changements de la dernière fois qui ne sont pas encore en ligne. Tu veux qu'on les publie ? »).
- Pas de rapport du hook du tout → fais toi-même `git pull --ff-only` et `git status --short`.

Si `node_modules` n'existe pas, lance `npm ci` (ou `npm.cmd ci`).

## 2. Lancer l'aperçu du site

Utilise l'outil `preview_start` avec le nom `dev` (configuration dans `.claude/launch.json`, port 3000).
S'il signale une erreur, regarde `preview_logs`, corrige (dépendances manquantes, port occupé…) et relance. Ne montre pas les erreurs à la personne.

## 3. L'afficher et vérifier

L'aperçu s'ouvre dans le navigateur intégré, à droite de la conversation. Vérifie avec `get_page_text` que la page s'affiche bien (titre SynergieVet, sections présentes). Si la page est en erreur, corrige avant de parler à la personne.

## 4. Accueillir et demander

Message court, chaleureux, sans jargon. Par exemple :

> Bonjour ! J'ai récupéré la dernière version du site et je te l'affiche à droite 👉
> Prends le temps de le parcourir. Qu'est-ce que tu aimerais changer ou ajouter aujourd'hui ?
> Par exemple : modifier un texte, ajouter une photo, créer une nouvelle page, changer une couleur…

Si le premier message de la personne contenait déjà une demande, fais quand même les étapes 1 à 3, puis enchaîne directement sur sa demande au lieu de poser la question générale.
