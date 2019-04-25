<img src="https://www.creads.fr/app/uploads/sites/1/2017/10/capgemini.png">

# Live coding NodeJS

Live coding capgemini autour de NodeJS.

## Phases

- Deuxième phase (Création des endpoints utilisateur)
    - Création du modèle
    - Création du service (promise)
    - Création du controleur
    - Création de la route
    - Configuration d'express dans app.js


## Etape précédente

Installation des modules:
- express
- bodyparser
- config (gestion de la configuration par environnement)
- morgan (log)

## TODO 

### Création du modèle utilisateur

Fichier user.model.js

id: number
firstname: string
lastname: string

### Création du service utilisateur

Création du mock (fausse base de données, tableau dans le code)
fake.user.js

Fichier user.service.js

Méthode à implémenter:
- getById 
- getAll
- create

### Création du controleur utilisateur

Fichier user.controller.js


### Création des routes

Fichier routes.js

Routes à définir:
- /user/{id} récupération d'un utilisateur
- /user récupération de la liste des utilisateurs
- /user création d'un utilisateur


### Chargement dans app des composants précédents

Déclarer les modèles, services, controleurs
