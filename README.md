# 🧩 Messages API — Node.js / PostgreSQL (Docker)

API REST de gestion de messages réalisée dans le cadre de ma reconversion vers le développement backend.

Le projet met en place une architecture backend réaliste : séparation des responsabilités, base persistante et environnement conteneurisé.

---

## 🚀 Fonctionnalités

- CRUD complet de messages
- Persistance PostgreSQL
- Initialisation automatique de la base
- Endpoint de santé (`/health`)
- Validation des entrées + gestion d’erreurs HTTP
- Tests API (Vitest + Supertest)
- Lancement en une commande via Docker Compose

---

## 🏗️ Architecture

- Controllers : gestion HTTP et validation
- Data layer : accès aux données
- PostgreSQL : stockage persistant

Séparation claire entre logique applicative et accès base de données.

---

## 🛠️ Stack

- Node.js / Express
- PostgreSQL (node-postgres)
- Docker & Docker Compose
- Tests : Vitest, Supertest

---