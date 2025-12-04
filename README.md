# LLM Inference API Resource Aggregator

<div align="center">
  <a href="https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/chirag127/LLM-Inference-API-Resource-Aggregator/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white" alt="Build Status">
  </a>
  <a href="https://codecov.io/gh/chirag127/LLM-Inference-API-Resource-Aggregator">
    <img src="https://img.shields.io/codecov/c/github/chirag127/LLM-Inference-API-Resource-Aggregator?style=flat-square&logo=codecov&logoColor=white" alt="Code Coverage">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Python-3.11+-blue?style=flat-square&logo=python&logoColor=white" alt="Tech Stack: Python">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Linter-Ruff-blueviolet?style=flat-square&logo=ruff&logoColor=white" alt="Linter: Ruff">
  </a>
  <a href="https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/chirag127/LLM-Inference-API-Resource-Aggregator?style=flat-square&color=important" alt="License">
  </a>
  <a href="https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator/stargazers">
    <img src="https://img.shields.io/github/stars/chirag127/LLM-Inference-API-Resource-Aggregator?style=flat-square&logo=github&color=yellow" alt="GitHub Stars">
  </a>
</div>

<div align="center">
  <h3>
    <a href="https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator/stargazers">Star ⭐ this Repo</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator/issues/new/choose">Report an Issue</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator/blob/main/.github/CONTRIBUTING.md">Contribute</a>
  </h3>
</div>

---

## 💡 Value Proposition

This repository provides a definitive, community-curated list of Large Language Model (LLM) inference APIs that offer free tiers or substantial trial periods. It's designed for developers, researchers, and startups to experiment and build prototypes without initial financial commitment, while promoting responsible API usage.

Each entry is validated and includes critical details on rate limits, model availability, and usage policies.

## 📂 Project Architecture

The repository is structured to maintain data integrity and facilitate automated validation. All data is stored in a structured format, and Python scripts are used to enforce schema compliance and check for dead links.

sh
.
├── .github/                # GitHub Actions, issue templates, and community health files
├── data/
│   └── providers.json      # Single source of truth for all API provider data
├── scripts/
│   ├── __init__.py
│   └── validate.py         # Python script to validate the schema and content of providers.json
├── .gitignore
├── AGENTS.md               # Directives for AI development agents
├── LICENSE
├── pyproject.toml          # Project metadata and dependencies (uv/Ruff)
└── README.md               # This file


## 📚 Table of Contents

- [💡 Value Proposition](#-value-proposition)
- [📂 Project Architecture](#-project-architecture)
- [🤖 AI Agent Directives](#-ai-agent-directives)
- [🚀 Getting Started](#-getting-started)
- [💻 Available Scripts](#-available-scripts)
- [API Provider List](#api-provider-list)
  - [Text Generation](#text-generation)
  - [Embeddings](#embeddings)
  - [Multi-Modal](#multi-modal)
- [🤝 Contributing](#-contributing)
- [⚖️ License](#️-license)

---

<details>
<summary><strong>🤖 AI Agent Directives (System Instructions)</strong></summary>

### SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

#### 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards.
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

#### 2. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
This repository, `LLM-Inference-API-Resource-Aggregator`, is a data-centric project with Python-based validation scripts.

*   **PRIMARY SCENARIO: DATA VALIDATION & AGGREGATION (Python)**
    *   **Stack:** This project leverages **Python 3.11+**. Key tools include **uv** (for package management), **Ruff** (for ultra-fast linting and formatting), and **Pytest** (for robust unit and integration testing of validation logic).
    *   **Architecture:** The core of this project is the structured data file `data/providers.json`. All Python scripts in the `scripts/` directory must adhere to a **Modular Monolith** pattern. Each script should have a single responsibility (e.g., schema validation, link checking) and be executable independently.
    *   **Data Integrity:** The highest priority is data accuracy. All contributions that modify `data/providers.json` **must** pass the validation workflow (`uv run validate`) before being considered for merge.

#### 3. DEVELOPMENT & VERIFICATION COMMANDS
*   **Setup Environment:** `uv venv && uv sync`
*   **Run Linter/Formatter:** `uv run lint`
*   **Run Validation Checks:** `uv run validate`
*   **Run All Tests:** `uv run test`

</details>

---

## 🚀 Getting Started

To get started with local development and run validation scripts, follow these steps. This project uses `uv` for package management.

1.  **Clone the repository:**
    sh
    git clone https://github.com/chirag127/LLM-Inference-API-Resource-Aggregator.git
    cd LLM-Inference-API-Resource-Aggregator
    

2.  **Create a virtual environment and install dependencies:**
    sh
    # Install uv if you haven't already
    pip install uv

    # Create a virtual environment
    uv venv

    # Install dependencies
    uv sync
    

## 💻 Available Scripts

All scripts are managed via `uv` and defined in `pyproject.toml`.

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `uv run validate` | Validates the schema and contents of `data/providers.json`. |
| `uv run lint`     | Runs the Ruff linter and formatter to check code quality.   |
| `uv run test`     | Executes the Pytest test suite for validation logic.        |

---

## API Provider List

Below is a curated list of providers. For the complete, machine-readable list, please see [`data/providers.json`](./data/providers.json).

### Text Generation

| Provider | Key Models | Free Tier / Trial Details | Rate Limits (Free Tier) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI** | `gpt-4o-mini`, `gpt-3.5-turbo` | $5 in free credits for new API users (expires after 3 months). | Varies by model; check official docs. | The original industry standard. Credits are a one-time offer. |
| **Google AI** | `gemini-1.5-flash` | **Free Tier:** 2 RPM, 32K TPM, 50 RPD. | 2 RPM (Requests/Min), 50 RPD (Requests/Day) | Excellent free tier for low-traffic applications. |
| **Anthropic** | `claude-3-haiku` | $5 in free credits for new API users. | Varies; check official docs. | Known for strong performance on reasoning and safety. |
| **Groq** | `llama3-8b`, `gemma-7b` | Free access during beta/promotional periods. | Generous but subject to change. | Focus on extremely high-speed inference (tokens/sec). |
| **Together AI** | `llama3-8b`, `mixtral-8x7b` | $25 in free credits for new users. | Varies by model. | Offers a wide variety of open-source models via a unified API. |

### Embeddings

| Provider | Key Models | Free Tier / Trial Details | Rate Limits (Free Tier) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI** | `text-embedding-3-small` | Included in the initial $5 free credit. | Varies. | High-performance embedding models. |
| **Google AI** | `text-embedding-004` | **Free Tier:** 750 RPM, 100K TPM, 100K RPD. | 750 RPM (Requests/Min) | A very generous free tier for embedding-heavy tasks. |

*This list is actively maintained. Please consider [contributing](./.github/CONTRIBUTING.md) if you find an inaccuracy or a new provider.*

## 🤝 Contributing

Contributions are welcome and essential to keeping this resource up-to-date! Please read the [**Contributing Guidelines**](./.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## ⚖️ License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](./LICENSE) - see the `LICENSE` file for details.
