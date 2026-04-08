# 🎭 Playwright Automation Suite - Portfolio Project
This repository contains an end-to-end (E2E) test automation framework developed with **Playwright** and **JavaScript**. The goal is to demonstrate solid skills in creating robust, scalable, and professional test suites.

## 🛠️ Technologies and Tools
* **Language:** JavaScript (Node.js)
* **Testing Framework:** [Playwright](https://playwright.dev/)
* **Design Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub Actions (Automatic execution on every Push)
* **Reports:** Playwright HTML Reporter / Trace Viewer

## 🧪 Test Scenarios (E2E)
Currently, the suite covers the following flows on the [Sauce Demo](https://www.saucedemo.com/) website:
- **Login:** Validation of successful login.
- **Failed Login:** Validation of error messages with incorrect credentials or blocked users.
- *(Coming Soon)* Complete purchase flow (Checkout).
- *(Coming Soon)* Network interception and API mocking.

## 📋 Prerequisites
Before starting, make sure you have the following installed:
* **Node.js:** Version 18 or higher (LTS recommended).
* **npm:** Package manager (included with Node.js).
* **Git:** For repository cloning.

## 📁 Project Structure
```text
├── tests/               # Test files (.spec.js)
├── pages/               # Page Objects (Element logic and actions)
├── .github/workflows/    # Continuous Integration configuration
├── playwright.config.js  # Global framework configuration
└── package.json          # Dependencies and scripts
```

## ⚙️ Installation and Usage
To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/florenciahendel/playwright-automation-js-portfolio.git

2. **Install dependencies:**
    ```bash
    npm install

3. **Install Playwright browsers:**
    ```bash
    npx playwright install

## ▶️ Running Tests
Run all tests (Headless Mode):
```bash
    npx playwright test

Open UI Mode (Interactive interface for Debugging):
```bash
    npx playwright test --ui

View the last generated report:
```bash
    npx playwright show-report
```

## 🔄 Continuous Integration (CI)
This project utilizes GitHub Actions. With every change uploaded (push) to the main branch, the suite automatically runs in a Linux environment. This ensures that the code remains stable and that tests pass in a clean environment before being considered successful. You can view the execution history in the "Actions" tab of this repository.