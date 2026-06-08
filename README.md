# Financial Test Automation Framework

A financial QA framework seed that captures deterministic tests for currency rounding, FIFO tax-lot assignment, and calculation edge cases.

## Stack

Node.js, financial QA automation, boundary testing

## Problem

Financial defects often hide in boundary conditions. This project demonstrates test design for small rounding errors and stateful assignment logic.

## Architecture

- Tests live under 	ests/ and use Node's built-in runner.
- Calculation helpers are intentionally simple so failure conditions are easy to inspect.
- The project can later host Playwright, Pact, and performance scenarios.

## Implemented Production Readiness

- CI runs all financial boundary tests.
- Tests avoid external services and stay deterministic.
- Scenarios are written to be portable into larger automation frameworks.

## Run And Test

```powershell
npm test
```

## Quality Gates

- Project-specific GitHub Actions workflow included under .github/workflows/ci.yml.
- Generated build outputs and dependency folders are excluded through .gitignore.
- Tests and validation commands are intentionally small enough to run during code review.

## Production Extension Points

- Add Playwright browser tests.
- Add Allure reporting.
- Add JMeter or k6 performance scenarios.

## Repository Hygiene

This repository contains original portfolio code only. It does not include employer source code, private resumes, generated binaries, local credentials, or large media files.

