#!/usr/bin/env bash
# Hook SessionStart : récupère la dernière version du site et fait un état des lieux.
# Sa sortie est ajoutée au contexte de Claude (pas montrée à l'équipe).

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

echo "=== Rapport automatique de démarrage (hook SessionStart) ==="

before=$(git rev-parse HEAD 2>/dev/null)
if out=$(git pull --ff-only 2>&1); then
  echo "Mise à jour : OK"
else
  echo "Mise à jour : ÉCHEC du git pull --ff-only :"
  echo "$out"
fi
after=$(git rev-parse HEAD 2>/dev/null)

if [ "$before" != "$after" ]; then
  echo "Nouveaux changements récupérés :"
  git log --oneline "$before..$after"
  if git diff --name-only "$before" "$after" | grep -q '^package-lock.json$'; then
    if npm ci >/dev/null 2>&1; then echo "Dépendances réinstallées (package-lock modifié)."; else echo "ATTENTION : npm ci a échoué, à relancer."; fi
  fi
fi

if [ ! -d node_modules ]; then
  if npm ci >/dev/null 2>&1; then echo "Dépendances installées."; else echo "ATTENTION : node_modules absent et npm ci a échoué."; fi
fi

local_changes=$(git status --short)
if [ -n "$local_changes" ]; then
  echo "Changements locaux NON publiés :"
  echo "$local_changes"
fi
ahead=$(git rev-list --count '@{u}..HEAD' 2>/dev/null || echo 0)
if [ "$ahead" != "0" ]; then
  echo "Commits locaux non envoyés en ligne : $ahead"
fi

echo "Consigne : applique maintenant la skill 'demarrage' (lancer l'aperçu, l'afficher dans le navigateur, accueillir la personne)."
exit 0
