# Definition of Done (MVP)

This document defines the minimum quality and completion criteria for a User Story (US) in the Application Tracker project.

A User Story is considered **Done** only when all the following conditions are satisfied.

---

## ✅ Functional completion

- The feature described in the User Story is implemented.
- Acceptance criteria defined in the User Story are satisfied.
- The behavior is verified manually when relevant.

---

## 🧹 Code quality

The code must comply with the project's quality standards.

Backend:
- Coding standards validated (Laravel Pint)
- Static analysis passes (PHPStan / Larastan)

Frontend:
- Linting passes (ESLint)
- Code formatting applied (Prettier)

---

## 🧪 Tests

Tests must be added or updated when relevant.

- Existing tests pass.
- New functionality is covered by appropriate tests when applicable.
- No regression is introduced.

Tests may include:

- backend unit tests
- backend feature tests
- frontend tests
- API tests (Bruno)

---

## 🔍 Quality checks

All quality checks must pass locally and in CI.

Backend:

    cd backend
    composer qa

Frontend:

    cd frontend
    npm run qa


API tests:

    npm run test:api

---

## 📚 Documentation

Documentation must be updated when relevant.

Examples:

- README updates
- project documentation in `/docs`
- API documentation
- configuration notes

---

## 🔀 Version control workflow

The repository workflow must be respected.

- Work is done in a dedicated branch
- Changes are merged via Pull Request
- CI checks must pass before merge
- The main branch remains stable

---

## 🚦 Final verification

Before closing a User Story:

- the feature works as expected
- quality checks pass
- tests pass
- CI pipeline is green

---

# Definition of Done Checklist (for Issues)

When creating or closing a User Story, the following checklist should be used.

```
### Definition of Done checklist

- [ ] Feature implemented and works as expected
- [ ] Quality checks pass (composer qa / npm run qa)
- [ ] API tests pass (npm run test:api) when relevant
- [ ] Tests added or updated when relevant
- [ ] Documentation updated if needed
- [ ] CI pipeline is green
```

This checklist should be copied into each User Story issue to ensure consistency.
