# Fire !

Projet de simulation d'un feu de forêt

## Conception

Langage : JQuery

- **Land** : gère l'état d'une case via les constantes _FIRE_, _CINDER_ et _LAND_ et son taux de propagation (entre 10% et 99%)
- **Field** : gère la génération aléatoire d'un terrain via hauteur x largeur avec des **Land** qui auront une probabilité de propagation initialisée aléatoirement aussi.
- **FireDiffusionView** : permet de gérer les valeurs d'affichage entre les 3 états d'une case. Lorsque l'on affiche un **Land**, une opacity est appliqué, elle correspond à sa propabilité de propagation (plus elle est foncée et plus la probabilité est haute).
- **FireDiffusion** : noyau central de l'application, gère la vue avec **FireDiffusionView**, les états du **Field**, simule la propagation du feu sur toutes les cases adjacentes des cases avec un état _FIRE_ et l'état _CINDER_ pour la fin d'un feu.

_Temps alloué au projet : 2 heures 30 minutes_

[credits - Fire & Forgive](https://www.youtube.com/watch?v=Xmr6iscmd1g)
