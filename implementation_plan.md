# Implementation Plan - The Great Repository Resurrection

## Goal Description

Revive the unmaintained `free-llm-api-resources` repository by fixing broken scrapers, integrating valuable upstream PRs (simulated via web search/manual addition of new providers), and ensuring the codebase is robust and production-ready.

## User Review Required

> [!IMPORTANT]
> The script `src/pull_available_models.py` requires multiple API keys (MISTRAL_API_KEY, GROQ_API_KEY, etc.). I have modified the script to gracefully skip providers if keys are missing.

## Proposed Changes

### Core Logic

#### [MODIFY] [pull_available_models.py](file:///c:/AM/extensions/free-llm-api-resources/src/pull_available_models.py)

-   Add checks for missing environment variables.
-   Wrap provider fetch calls in try-except blocks to prevent global failure.
-   Implement "skip" logic for providers without keys.

### Assets

#### [NEW] [assets/icon.svg](file:///c:/AM/extensions/free-llm-api-resources/assets/icon.svg)

-   Create a new SVG icon for the project.

#### [NEW] [scripts/convert_icon.ts](file:///c:/AM/extensions/free-llm-api-resources/scripts/convert_icon.ts)

-   Create a script using `sharp` to convert SVG to PNG.

### PR Analysis Strategy

#### Identification

1.  **Source:** Upstream repository `https://github.com/cheahjs/free-llm-api-resources`.
2.  **Method:**
    -   Search/Scrape for valuable PRs (new providers, fixes).
    -   Filter for PRs that add value and are not just cosmetic.

#### Manual Porting

1.  **Process:**
    -   Fetch the diff/content.
    -   Manually apply logic to `src/pull_available_models.py`.
    -   Verify.
2.  **Selected PR/Feature:**
    -   **glhf.chat**: Add support for this new OpenAI-compatible provider.
    -   _Endpoint:_ `https://glhf.chat/api/openai/v1/models` (verified).
    -   _Key:_ `GLHF_API_KEY`.

## Verification Plan

### Automated Tests

-   **Run the scraper:** `python src/pull_available_models.py`
    -   _Expectation:_ It should run without crashing.
-   **Asset Generation:** `npx tsx scripts/convert_icon.ts`
    -   _Expectation:_ `assets/icon.png` is created.

### Manual Verification

-   Check `README.md` content.
