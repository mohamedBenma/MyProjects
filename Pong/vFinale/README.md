#### TP3-PONG.

#### V4-Version réseau

### presentation :

1.  #### Recupertation du projet :
    l'éxécution de la commande suivante est nécessaire pour pouvoir récupérer ce projet:

```bash
https://gitlab-etu.fil.univ-lille1.fr/benmaouche/l3g7-jsfs.git
```

2. #### Éxecution et affichage des résultats:

- afin d"afficher les résultats, il suffira d'executer les commandes suivante en se positionnant à l'interieur du répertoire serveur:

```bash
npm install
```

```bash
nodemon
```

- ouvrir un navigateur web et se rendre à l'adresse suivante:

```bash
http://localhost:8080/public/index.html
```

3. #### Travail Réalisé:

- dans la classe Game, un ensemble de methodes à vu le jour, ce qui nous a permis d'implementer une connexion entre deux clients sur le meme serveur qui permettent de réaliser les taches suivantes:
- vérification de la position du client au moment de sa connexion.
- connexion du client au serveur de socket en cliquant sur le bouton "Connect".
- chaque client est garant de sa raquette et tout mouvement et deplacememnt de cette derniere doit etre notifié et à l'autre client en lui communiqaunt les nouvelles cordonnées du paddle en question.
- les paddles ne s'affichent qu'une fois que les deux joueurs sont connectés.
- seul le joueur 1 peut donner le signal de départ.
- dans la classe IoController, un serveur à été crée, ce dernier reste à l'écoute des clients et communique avec eux pour leur permettre de bien gerer les connexions et deconnexions, les differnets evenements liés aux déplacememnets des mobiles(paddle et balle)(intermediaire entre les deux clients).
