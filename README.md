# ⚔️ Who Plays Who

**Who Plays Who** est une application web qui crée automatiquement des équipes équilibrées pour vos parties personnalisées entre amis, sur **League of Legends** et **Valorant** (Pour L'instant).

Ajoute tes joueurs, indique leur rang, et laisse l'algorithme répartir les équipes les plus équitables possible — avec attribution aléatoire des rôles et des champions/agents.

Aucune installation, aucun serveur, aucune création de compte : tout fonctionne directement dans le navigateur.

---

## ✨ Fonctionnalités

- **Équilibrage automatique** des équipes selon les points de rang de chaque joueur (algorithme de partition exacte, minimise l'écart entre les deux équipes)
- **Modes de jeu** : Custom (2 à 10 joueurs, 2 équipes) et Flex / Five Stack (1 à 5 joueurs, une seule équipe)
- **Rôles aléatoires** : Top / Jungle / Mid / ADC / Support pour LoL, Duelist / Initiator / Controller / Sentinel pour Valorant (mapping agent → rôle strictement respecté)
- **Champions / agents aléatoires**, uniques par partie, assignés selon le rôle de chacun
- **Relances séparées** : tout relancer, relancer seulement les rôles, relancer seulement les champions/agents, ou relancer **un seul joueur** (utile s'il ne possède pas le champion tiré)
- **Joueurs enregistrés** en local (`localStorage`) avec recherche et autocomplétion — pratique même avec une grosse liste de joueurs
- **Roulette de maps** pour Valorant
- **Limite stricte de 10 joueurs** par partie personnalisée, avec compteur en temps réel
- Aucune donnée envoyée à un serveur : tout reste dans ton navigateur
