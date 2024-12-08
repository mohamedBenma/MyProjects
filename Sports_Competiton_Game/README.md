# Projet COO-Compétitions Sportives
## BENMAOUCHE Mohamed-Zenaidji El ghani


# Présentation du Projet

Ce projet permet d'organiser et de simuler une compétition sportive au cours de laquelle un ensemble de joueurs s'affrontent, cette dernière peut se présenter sous forme de Ligue,d'un tournoi à élimination directe ou bien d'un Master qui orgnaisera des Phases de poules avant d'inviter les vainqueurs à jouer un tournoi à l'issue du quel un vainqueur sera designé,pour offrir une meilleure éxperience aux auditeurs et téléspectateurs, un ensemble de journalistes commenteront l'ensemble des matchs de cette compétition,et afin de pimenter tout cela,les amateurs de paris sportifs auront en éxlusivité accés aux cotes sportives des differents joueurs qui évoluera à l'issue de chaque match.
## How To
### Recupération du dépot
Commande à éxecuter pour récuperer le depot du projet:
https://gitlab-etu.fil.univ-lille1.fr/benmaouche/benmaouche-zenaidji-coo.git
### Commande de génération de la documentation:
afin de générer la documentation,il suffit de se positionner au niveau du répertoire src et exécuter ces commandes:
```javadoc competition -d ../docs```
 ```javadoc match -d ../docs```
 ```javadoc strategy -d ../docs```
 ```javadoc competitor -d ../docs```
### Compilation et Execution des differentes classes:
-se positionner au niveau du au niveau du répertoire src et executer la commande suivante:
```javac Nom_du_Package/classe.java -d ../classes```
##### EXEMPLE:
 - Pour la compilation de la classe Master du paquetage competition, on éxcéute la commande qui suit:
 - ```javac competition/Master.java -d ../classes```
- Compiler et executer tous les fichiers  d'un meme package:
  - ```bash javac competition/*.java -d ../classes```
  - ```javac match/*.java -d ../classes```
  - ```javac strategy/*.java -d ../classes```
  - ```javac competitor/*.java -d ../classes```
##### EXEMPLE:
- on remplacera le nom du package par l'un des packages ci-dessous:
competition,match,strategy,competitor,
ainsi que le nom des classes "classe" par la classe adequate.
#### Compilation et Execution des Main:
javac main/main_desiré.java 
 java main.main_desiré
 remplacer main_desiré par MainLeague,MainTournament ou bien MainMaster
### Compiltaion et Execution des Tests:
- tous les tests fonctionnent parfaitement, on a eu des petits soucis en essayant de compiler et d'éxécuter sur une ligne de commande,mais on s'est quand meme assuré du bon fonctionnement de ces derniers en utilisant eclipse. 
pour compiler les test executer la commande suivante :


```javac  -cp <junit-jar-file>;. test/matchTest/*.java``` #compiler les tests de la classe matchTest
- afin d'executer les tests :


``` java -cp <junit-jar>;<hamcrest-jar>;. org.junit.runner.JUnitCore MatchRandomTest``` # pour executer les test de random match


### Generation des archives jar:
- afin de génerer les archives jar des differents main, il suffira de taper la commande ``` make``` depuis la racine du projet.
- Toutes les commandes nécessaires à la création des jar ont été ajoutés au fichier Makefile qui génére la documentation,compile les différentes classes et crée les différents jar.
### Exécuter les differentes archives jar:
- pour éxécuter les fichiers différents jar, on se place au niveau du répértoire jar et on éxécute les commandes suivantes:
- ```java -jar mainleague.jar```  afin d'éxécuter MainLeague.
- ```java -jar maintournament.jar``` afin d'éxécuter MainTournament.
- ```java -jar mainmaster.jar``` afin d'éxécuter MainMaster.

### code saillant:
* pour la conception de ce projet nous avons choisi d'implementer cinq classes
qui nous ont permis de simuler de maniere adéquate le déroulement d'un match,cepedant on a du choisir le bon type des classes et méthodes et redefinir à maintes reprises le codes des differentes classes.
- La classe competitor nous permet de créer un competiteur et d'avoir accés à son nom et son nombre de points
- La classe Match nos permet de définir un match et de definir la facon avec laquelle un match se joue et se gagne.
- La classe competition nous permet de simuler une competition avec toutes les contraintes imposées.
 pour réalise tout cela, nous avons réalisé un ensemble de trois diagramme avant de definir un diagramme optimal et final.
- La classe Stategy ainsi que les classes qui héritent de cette derniére permettent de choisir une strategie de selection de joueurs au sein d'une poule et d'opter pour la méthode de séléction la plus adéquate à notre compétition, cette derniere a travers ses deux methodes et l'ensemble des attributs offre la possibilité de repécher des joueurs afin de leur offrir la chance de se rettraper lors des phases finales,un ensemble de strategies sont à disposition de l'utilisateur définies comme suit:
- Strategy1PerGroup qui permet de ne retenir que le premier de chaque groupe.
- Strategy2PerGroup qui permet de ne retenir que les deux premiers de chaque groupe.
- Strategy2PerGroupNdTwoBestThird qui en plus de retenir les deux premiers joueurs de chaque groupe, permet de repecher les deux meilleurs troisiemes(tous groupes confondus).
- La classe Master permet d'organiser une competition qui à la fois fait appel à la classe Tournament et à la classe League qui ont été défini précdémmment.cette classe permet d'organiser les phases de poules en organisant simultanement plusieurs.
championnats(phases de poules)et à l'issue des quels un nombre de joueurs prédefini accédera aux phases de poules et fera ainsi jouer une sorte de tournoi à élimination directe aux joueurs qualifiés(phases finales) à l'issue du quel sera designé le grand vainqueur de la compététion(Master).
- L'ensemble des classes du package matchobserver offre la posibilité de créer un ensemble de journalistes dont le role est de commenter un ensemble de matchs ainsi que des bookmakers qui gérent et mettent à jour les cotes sportives des joueurs en fonction des leurs resultats à l'issue de leurs matchs respectifs,la classe MatchReminder permet de gerer un ensmeble d'observateurs qui seront notifiés à l'issue d'un match afin qu'ils réagissent en appliquant la méthode MatchRemind dont la signature est définie au sein de l'interface MatchObserver et implementée dans les classes **Journalist** et **BookMaker** de sorte à ce que chaque observateur puisse réagir convenablement.
- 
## Diagrammes UML :
### PREMIER DIAGRAMME INITIAL:
![UML_COO_V1](./COO_PROJET/UML/UML_COO_V1.png)
### SECOND DIAGRAMME:
![COO_DiagrammeV2](./COO_PROJET/UML/COO_DiagrammeV2.jpg)
#### DIAGRAMME DU 1ER DEPOT: 
![Diagramme_final.png](./COO_PROJET/UML/Diagramme_final.png)
#### DIAGRAMME DES CLASSES MASTER ET STRATEGY:
![Master_Strategy_Classes.png](./COO_PROJET/UML/Master_Strategy_Classes.png)
#### DIAGRAMME DU DEPOT 2:
![Depot2Diagramme.png](./COO_PROJET/UML/Depot2Diagramme.png)
#### DIAGRAMME FINAL:
![Depot3-Diagramme.jpg](./COO_PROJET/UML/Depot3-Diagramme.jpg)





