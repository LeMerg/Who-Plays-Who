# Who Plays Who

Application web locale pour générer des équipes équilibrées lors de soirées gaming entre amis (League of Legends & Valorant). Fonctionne entièrement dans le navigateur, sans serveur ni installation — basée sur la fusion des projets Team Maker et Who Plays Who.

## Lancement

```bash
python3 -m http.server 8000
```
Puis ouvrir http://localhost:8000

## Nouveautés par rapport aux deux projets d'origine

- Identité visuelle "Who Plays Who" (logo officiel intégré dans la navbar des 3 pages)
- Relance individuelle d'un joueur : un bouton ↻ sur chaque portrait de champion/agent permet
  de retirer uniquement le champion/agent de CE joueur (utile si le joueur ne possède pas le
  champion tiré), sans toucher aux équipes, rôles, ou autres joueurs.
- Reprend l'ensemble des fonctionnalités de Team Maker : limite de 10 joueurs, compteur "x/10",
  système de points par rang (facilement modifiable dans le tableau RANKS), algorithme
  d'équilibrage par partition exacte, relance globale / rôles seuls / champions-agents seuls,
  joueurs enregistrés en localStorage, roulette de maps Valorant, etc.

## Système de points (modifiable dans le code, tableau `RANKS`)

Débutant=0, Iron=1, Bronze=2, Silver=3, Gold=4, Platine=5, Émeraude=6 (LoL), Diamant=7,
Master/Ascendant=8, Grandmaster/Immortal=9, Challenger/Radiant=10.

## Structure

```
WhoPlaysWho/
├── index.html        # Choix du jeu
├── TeamLol.html       # App League of Legends
├── TeamValo.html       # App Valorant
├── Logo_Site/W.png     # Logo officiel "Who Plays Who"
├── icon_champion/, icon_agent/, icon_rank_lol/, img_rank_valo/
├── roles_lol/, roles_valo/, img/ (maps Valorant)
└── shared/             # rank-picker.js / .css (composant réutilisable)
```
