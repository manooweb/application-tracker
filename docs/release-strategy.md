# 📦 Release Strategy

This document describes the release and versioning strategy used in the Application Tracker project.

The goal is to keep versioning simple while providing clear milestones during the development of the application.

---

## 🔢 Versioning

The project follows **Semantic Versioning (SemVer)**.

Format:

    MAJOR.MINOR.PATCH

Example:

    1.2.0

Where:

- **MAJOR** → incompatible or major architectural changes
- **MINOR** → new features added in a backward-compatible way
- **PATCH** → bug fixes or small improvements

During early development, versions will remain in the **0.x.x range**.

Example:

    0.1.0
    0.2.0
    0.3.0

---

## 🚧 MVP Phase

Before the first stable release, the project evolves through incremental milestones.

Examples:

    v0.1.0  – Project foundations
    v0.2.0  – Authentication
    v0.3.0  – Core tracking features
    v0.4.0  – UI improvements
    v1.0.0  – First stable release

These milestones correspond to major steps in the project roadmap.

---

## 🏷️ Git Tags

Each release is marked with a **Git tag**.

Tags follow the version number format:

    v<version>

Examples:

    v0.1.0
    v0.2.0
    v1.0.0

Tags should be created on the **main branch**.

Example:

    git tag v0.1.0
    git push origin v0.1.0

---

## 📋 Release Guidelines

A release should only be created when:

- the related milestone or feature set is complete
- all tests pass
- CI pipeline is green
- the application is in a stable state

The goal is to ensure that every tagged version represents a **stable and usable state of the project**.

---

## 📌 Summary

The release strategy ensures that:

- versions clearly reflect the evolution of the project
- milestones are easy to identify in Git history
- stable states of the project are preserved through tags
