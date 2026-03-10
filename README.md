# Application Tracker

[![License](https://img.shields.io/github/license/manooweb/application-tracker?style=flat-square)](https://github.com/manooweb/application-tracker/blob/main/LICENSE)
[![Backend](https://github.com/manooweb/application-tracker/workflows/Backend/badge.svg)](https://github.com/manooweb/application-tracker/actions/workflows/backend.yml)
[![Frontend](https://github.com/manooweb/application-tracker/workflows/Frontend/badge.svg)](https://github.com/manooweb/application-tracker/actions/workflows/frontend.yml)
[![Bruno API E2E Tests](https://github.com/manooweb/application-tracker/workflows/Bruno%20API%20E2E%20Tests/badge.svg)](https://github.com/manooweb/application-tracker/actions/workflows/api-e2e-bruno.yml)
[![Deploy online](https://github.com/manooweb/application-tracker/workflows/Deploy%20online/badge.svg)](https://github.com/manooweb/application-tracker/actions/workflows/deploy.yml)

A modern web application to track applications, projects and related tasks in a structured way.

This project is being developed as a **real product**, starting with an MVP and evolving incrementally.

The repository is structured as a **monorepo** containing both backend and frontend applications.

---

## Project Status

🚧 The project is currently in **early development (MVP phase)**.

The current focus is on building solid foundations:

- project architecture
- development workflow
- quality gates
- core authentication system

The roadmap and planned milestones are tracked in GitHub issues.

➡️ See the roadmap:
https://github.com/manooweb/application-tracker/issues/5

---

## Monorepo Structure

    application-tracker
    ├── backend        # Laravel API
    ├── frontend       # Angular application
    ├── bruno          # API test collections
    ├── docs           # Project documentation
    └── .github        # CI / workflows / templates

---

## Tech Stack

### Backend

- PHP
- Laravel
- MariaDB
- PHPUnit / Pest (tests)
- PHPStan / Larastan
- Laravel Pint (code style)

### Frontend

- Angular
- TypeScript
- Angular Material
- ESLint
- Prettier

### Tooling

- GitHub Actions (CI)
- Bruno (API testing)

### Local Development

- DDEV (recommended)
- Docker (optional alternative)

---

## Prerequisites

To run the project locally you will need:

- PHP >= 8.2
- Composer
- Node.js >= 18
- npm
- MariaDB

Recommended for local development:

- DDEV
- Docker

---

## Local Setup

Clone the repository:

    git clone https://github.com/manooweb/application-tracker.git
    cd application-tracker

---

### Backend setup

    cd backend

    composer install

    cp .env.example .env

    php artisan key:generate

    php artisan migrate

    php artisan serve

---

### Frontend setup

    cd frontend

    npm install

    npm run start

The Angular development server will start and connect to the backend API.

---

## Quality Checks

Both backend and frontend include quality and testing commands.

### Backend

    cd backend
    composer qa

This runs:

- static analysis
- coding standards
- tests

### Frontend

    cd frontend
    npm run qa

This runs:

- linting
- code formatting (Prettier)
- tests

### API tests (Bruno)

    npm run test:API

---

## Continuous Integration

The repository uses **GitHub Actions** to automatically run:

- backend QA
- frontend QA
- API tests

All pull requests must pass CI checks before merging.

---

## License

AGPL-3.0 License
