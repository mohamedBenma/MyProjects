# 🌍 IP Address Tracker

### Vue 3 • Vitest • CI/CD

Application web permettant de rechercher une adresse IP ou un nom de domaine et d’afficher les informations associées ainsi que sa localisation sur une carte interactive.

Projet orienté qualité : **tests unitaires**, **pipeline CI/CD** et **déploiement automatisé**.

---

## 🛠 Stack technique

- ⚡ Vue 3 (Options API)
- ⚡ Vite
- 🧪 Vitest (tests unitaires)
- 🌐 API ipwho.is (géolocalisation IP)
- 🗺 Leaflet (carte interactive)
- 🔄 GitHub Actions (CI/CD)
- 🚀 GitHub Pages (déploiement automatique)

---

## ✨ Fonctionnalités

- 🔎 Recherche par adresse IP ou nom de domaine
- 🌍 Détection automatique de l’IP utilisateur au chargement
- 📍 Affichage de la localisation (ville / pays)
- 🏢 Affichage du fournisseur d’accès (ISP)
- ⏰ Affichage du fuseau horaire
- 🗺 Mise à jour dynamique de la carte
- 📱 Interface responsive (mobile & desktop)
- 🧪 Tests unitaires intégrés
- 🚀 Déploiement continu à chaque mise à jour de `main`

---

## 🏗 Architecture

L’application repose sur une structure modulaire :

- Un composant principal gérant l’état et la récupération des données
- Un composant d’affichage des informations IP
- Un composant dédié à la carte interactive

La séparation claire entre logique métier et affichage facilite la maintenance et l’évolution du projet.

---

## 🔄 CI/CD Pipeline

Chaque push sur la branche `main` déclenche automatiquement :

1. ✅ Type-check
2. 🧪 Tests unitaires
3. 📦 Build production
4. 🚀 Déploiement sur GitHub Pages

Cette automatisation garantit une application toujours stable et prête à être publiée.

---

## 🎯 Objectifs du projet

- Approfondir Vue 3 et la gestion d’état
- Travailler avec une API externe
- Implémenter des tests unitaires modernes
- Mettre en place une pipeline CI/CD complète
- Automatiser un déploiement continu

---

## 🔮 Améliorations possibles

- Ajout de tests end-to-end
- Optimisation UX (validation avancée, debounce)
- Gestion plus fine des erreurs API
- Améliorations visuelles supplémentaires

---

## 👨‍💻 Auteur

Projet réalisé dans le cadre d’un challenge Frontend Mentor, enrichi avec une approche professionnelle (tests, CI/CD et déploiement continu).
