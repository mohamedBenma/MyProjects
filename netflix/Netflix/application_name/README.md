#### My Own Version Of Netflix

- Ce tp permet une mise en pratqiue de plusieurs notions vues durant les seances de cours et de tp,en l'ocurrence MongoDb(gestion des bases de données),Serveur Express(gestion de connexion serveur,client,organisation en routes,Middlewares) ainsi que Fetch.
- l'application reprends les standards de la vente en ligne, differentes simulations de vente et achat peuvent etre réalisées à travers cette application.

1. #### Exécution et affichage des résultats:

- Il est nécesaire de générer le package node_modules contenant toutes les dependances de node en éxécutant la commande ci-dessous avant toute manipulation des fichiers contenus dans ce deopt :

```bash
npm install
```

- une fois la commande exécutée, il est fortement conseillé de suivre les étapes et instructions dans l'ordre

2. ### Lancer le serveur Mongodb:

- afin de lancer le serveur Mongodb, le suivi de ces instructions est indispensable:
- il faudra en premier lieu créer un dossier dbData ou seront stockées les données relatives aux bases de données et collections qu'on a crée à l'aide de la commande suivante:

```bash
mkdir dbData
```

- une fois le dossier dbdata créé on éxecutera la commande suivante:

```bash
mongod --dbpath dbData
```

2. ### Lancer le serveur Web:

- une fois tous les fichiers indispensable au bon fonctionnement de notre code réunis au sein de notre répértoire, on se positionne à la source(au niveau du répértoire application_name) et on fait fonctionner notre serveur à l'aide de la commande suivante:

```bash
nodemon
```

- afin de s'assurer du bon fonctionnement de notre code,on suit le lien ci dessous, ce qui permet se rendre sur la page d'accueil ou un formulaire de connexion et d'inscription sont accessibles.

```bash
http://localhost:3000/
```

3. ### Comment Coder sa propore version de Netflix:

- Ce projet m'a pemrmis de revoir les bases et les notions fondamentales du développement web,autrement dit HTML,CSS,Javascript tout en apportant une touche de modernité technologique en mettant notamment en place un ennvironement de travail qui se base essentiellement sur le modele MVC pour relier de la meilleure des manieres notre base de données avec le restant des composants mis en place.
- Comme l'application réalisée est de type multipage,j'ai été amené à mettre en place un systeme de routage fiable et operationnel afin de passer d'une page à un autre.
