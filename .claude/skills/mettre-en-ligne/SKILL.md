---
name: mettre-en-ligne
description: Publier les changements du site SynergieVet sur www.synergievet.ch. À utiliser quand la personne dit « mets en ligne », « publie », « envoie sur le site », « c'est bon on valide », ou répond oui à « Tu veux mettre ton site en ligne ? ».
---

# Mettre le site en ligne

Pour la personne, c'est juste « mettre le site en ligne ». Derrière : vérifier, sauvegarder, envoyer sur `main`, attendre que Vercel ait déployé. Aucun mot technique dans tes messages.

## 0. Avoir un « oui » clair

Ne publie que si la personne a dit oui explicitement dans cette conversation pour ces changements. Sinon, demande d'abord, en résumant en mots simples ce qui va changer sur le site :

> Voici ce qui va changer sur le site en ligne : nouvelle photo de l'équipe, texte de l'accueil raccourci. On y va ?

Dis-lui ensuite : « C'est parti, je mets ton site en ligne. Ça prend une ou deux minutes. »

## 1. Se mettre à jour

```
git fetch origin
git status --short
```
Si `origin/main` a avancé : `git pull --rebase origin main` (avec tes changements commités ou stashés d'abord). En cas de conflit, résous-le ; si c'est impossible sans risque, arrête-toi et dis : « Quelqu'un d'autre a modifié le site en même temps, il faut demander à Astrid de regarder. Tes changements sont bien gardés ici. »

## 2. Vérifier que tout fonctionne

```
npm run lint
npm run build
```
Si une étape échoue : corrige, relance, et vérifie dans l'aperçu que la page s'affiche toujours. Dis seulement : « J'ai repéré un petit souci, je le corrige avant de publier. »
Le build peut se gêner avec l'aperçu en cours sur Windows (dossier `.next` verrouillé) : si c'est le cas, arrête l'aperçu (`preview_stop`), fais le build, puis relance l'aperçu.

## 3. Sauvegarder et envoyer

- Vérifie la liste des fichiers modifiés (`git status --short`) : rien d'inattendu (pas de fichiers `.env`, pas de dossier `photos-a-ajouter/`, pas de fichiers temporaires).
- `git add` des fichiers concernés (pas de `git add -A` aveugle).
- Commit en français, au présent, qui décrit le changement visible. Ex. : `Ajoute la page Tarifs et son lien dans le menu`.
- `git push origin main`. Jamais de `--force`.

## 4. Attendre la mise en ligne

Vercel déploie tout seul (environ 1 minute). Suis le statut du commit (toutes les 20–30 secondes, 5 minutes maximum) avec l'outil **Bash** — PowerShell 5.1 casse les guillemets de `--jq` :

```
gh api repos/synergievet/siteweb/commits/<sha>/status --jq '.state, (.statuses[] | .context + " : " + .description)'
```
- `success` → c'est en ligne.
- `pending` → attends.
- `failure`/`error` → récupère le détail (`target_url`), corrige, republie. Dis seulement : « Petit contretemps, je corrige et je republie. » Si tu ne trouves pas la cause, dis : « La mise en ligne n'a pas marché, il faut demander à Astrid de regarder. Le site en ligne n'a pas changé, rien n'est cassé. »

## 5. Vérifier et annoncer

Ouvre https://www.synergievet.ch dans le navigateur intégré (`navigate`) et vérifie que le changement est visible (`get_page_text`). Le cache peut mettre quelques secondes : recharge si besoin.

Annonce simplement :

> 🎉 C'est en ligne ! Tout le monde peut maintenant voir les changements sur www.synergievet.ch.
> Je te l'affiche à côté. Tu veux continuer à améliorer autre chose ?

Ensuite, remets l'aperçu de travail (`preview_start` nom `dev`) si tu l'avais arrêté.
