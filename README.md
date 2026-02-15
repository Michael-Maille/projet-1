# 🧩 Messages API — Backend Node.js / PostgreSQL (Dockerisé)

API REST de gestion de messages développée dans le cadre de ma reconversion vers le métier de développeur backend.

Le projet met en œuvre une architecture backend réaliste : conteneurisation, base de données persistante, initialisation automatique, validation et structure modulaire.

---

## 🚀 Fonctionnalités

- CRUD complet de messages
- Persistance PostgreSQL
- Initialisation automatique de la base (init.sql)
- API REST structurée (controllers / routes / data layer)
- Validation des entrées utilisateur
- Gestion d’erreurs HTTP
- Tests automatisés (Vitest + Supertest)
- Exécution entièrement via Docker Compose

---

## 🛠️ Stack technique

**Backend**
- Node.js
- Express
- PostgreSQL
- pg (node-postgres)

**DevOps**
- Docker
- Docker Compose
- Volume de persistance
- Script d’initialisation SQL automatique

**Qualité**
- Architecture en couches
- Tests API
- Code modulaire maintenable

---

## 📦 Lancer le projet

### Prérequis
- Docker Desktop

### Installation

```bash
git clone <repo>
cd projet-1
docker compose up --build
