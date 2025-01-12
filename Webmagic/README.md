# BENMAOUCHE MOHAMED  

## Compte rendu GL - Partie WEBMAGIC  

### Introduction  

Dans le cadre de ce projet, un grand nombre de bugs et d’erreurs critiques relevés lors du travail précédent ont été corrigés. Les corrections ont été priorisées en fonction de leur vulnérabilité et de leur sévérité. J’ai cependant concentré mes efforts sur les erreurs les plus critiques de chaque package, dans la mesure du possible, car ce projet présente des défis techniques complexes nécessitant des connaissances approfondies.  

---

## Corrections d’erreurs et changements apportés  

### Code smells et bugs  

Une partie des *code smells* (565 au départ) a été traitée, en progressant des problèmes mineurs vers les plus importants, tout en consacrant davantage de temps aux erreurs critiques et bloquantes.  

### Répartition des erreurs corrigées  

- **Commentaire des fonctions vides** :  
  J’ai identifié et documenté un grand nombre de fonctions et de constructeurs vides qui, malgré leur absence de contenu, jouent un rôle crucial dans leurs classes respectives.  

- **Refactoring** :  
  Plusieurs méthodes présentant une complexité élevée ont été refactorisées pour réduire leur complexité, conformément aux recommandations de SonarLint et SonarQube. Cela a été réalisé en déléguant certaines tâches à de nouvelles méthodes.  
  - *Exemple :* La méthode `run` dans la classe `Spider.java`.  

- **Ajout d’assertions dans les classes de tests** :  
  J’ai constaté que certaines méthodes dans les classes de tests manquaient d’assertions, ce qui constitue une erreur majeure. Ces lacunes ont été corrigées, bien que certaines méthodes aient probablement été écrites sans intention explicite de tester les classes concernées.  

- **Gestion des exceptions** :  
  Certaines exceptions n’étaient pas correctement gérées. Ces lacunes ont été corrigées en capturant les erreurs à l’aide de blocs `try & catch`.  

- **Renommage des constantes et variables** :  
  De nombreuses constantes dans les *Enums* étaient mal nommées. Conformément aux recommandations de SonarQube, elles ont été renommées en respectant les conventions (utilisation de majuscules pour les constantes).  

---

## Conclusion  

Le projet [WebMagic](https://github.com/code4craft/webmagic) est, dans l’ensemble, bien implémenté avec quelques lacunes. Comparé à d'autres projets, il présente peu d’erreurs et de *code smells*.  

Cependant, l'un des principaux points d'amélioration réside dans la gestion des dépendances entre fichiers, qui complique parfois la compréhension et l’amélioration du code.  

---
