#### TP3-PONG.
#### V3-Premier jeu à deux raquettes

### presentation :

 1. #### Recupertation du projet :
 l'éxécution de la commande suivante est nécessaire pour pouvoir récupérer ce projet:
 ```bash
https://gitlab-etu.fil.univ-lille1.fr/benmaouche/l3g7-jsfs.git
```
2. #### Éxecution et affichage des résultats:
- se placer au niveau du dossier client et executer la commande suivante:
 ```bash
npm run build
```
3. #### travail réalisé:
- Ajout d'une seconde raquette et gestion des collisions entre deux raquettes en ajustant la methodes definies précedemment à cet effet dans la classe Ball.
- déplacement des dxeux raquettes à l'aide de 4 touches duc 
clavier ("z","s" pour le paddle gauche et les deux touches directionnelles pour le paddle de droite)
- Arret de la balle dans le cas ou cette derniere venait à toucher un des murs verticaux.
- affichage de scores une fois que la balle touche un des deux murs ou que la partie touche à sa fin.
 