# 🔀 Development Workflow

This document describes the development workflow used in the Application Tracker project.

Even though the project is currently developed by a single developer, the workflow follows common professional practices to ensure code quality, traceability, and maintainability.

---

## 🌿 Branching Strategy

The repository uses a simple branching model.

### `main`

The `main` branch always represents a **stable and working state** of the project.

Direct commits to `main` are not allowed.

All changes must go through a **Pull Request** and pass the CI pipeline.

### Feature branches

Each User Story or development task is implemented in a dedicated branch created from `main`.

Branch naming convention:

    feature_<short-description>

Branch names should:

- use lowercase characters
- use `_` to separate the branch type
- use `-` to separate words

Examples:

    feature_authentication
    feature_login-endpoint
    feature_task-model

Other branch types may be used when appropriate:

    bugfix_login-validation
    refactor_auth-service
    docs_readme-update

---

## 🛠️ Development Process

The typical development flow is the following:

1. Create a feature branch from `main`

    git checkout main
    git pull
    git checkout -b feature_<feature-name>

2. Implement the feature

3. Run quality checks locally

Backend:

    cd backend
    composer qa

Frontend:

    cd frontend
    npm run qa

API tests:

    npm run test:api

4. Commit changes

5. Push the branch

6. Open a Pull Request to `main`

---

## 🔍 Pull Requests

All changes must be merged through a Pull Request.

Pull Requests must:

- describe the implemented change
- reference the related issue when applicable
- pass all CI checks

The CI pipeline runs automatically and includes:

- backend quality checks
- frontend quality checks
- API tests

A Pull Request should only be merged when the pipeline is **green**.

---

## 📏 Linear Git History

The project maintains a **linear Git history**.

Before merging, feature branches should be **rebased** onto the latest `main` branch.

Example:

    git checkout feature_my-feature
    git fetch origin
    git rebase origin/main

This avoids unnecessary merge commits and keeps the history clean and easy to read.

---

## 🤖 Continuous Integration

GitHub Actions automatically runs quality checks on every Pull Request.

The pipeline includes:

- backend QA
- frontend QA
- API tests

Merges should only occur when all checks pass successfully.

---

## 📌 Summary

The workflow ensures that:

- development is isolated in feature branches
- quality checks run before integration
- CI validates every change
- the main branch always remains stable
