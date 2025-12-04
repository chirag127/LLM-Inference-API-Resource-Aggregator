# Security Policy

## Supported Versions

We are committed to maintaining the security of our users and the project. We will provide security updates for the latest stable release of `LLM-Inference-API-Resource-Aggregator`.

## Reporting a Vulnerability

We take security vulnerabilities very seriously. If you discover any security issues, please report them to us immediately. We appreciate your efforts to help us improve the security of our project.

To report a vulnerability, please:

1.  **Do NOT disclose the vulnerability publicly.**
2.  Send an email to our security team at `chirag127.dev@gmail.com` with the subject line "Security Vulnerability Report".
3.  Include a detailed description of the vulnerability, including:
    *   The affected version(s).
    *   Steps to reproduce the issue.
    *   Any potential impact or mitigation strategies you've identified.
    *   Proof-of-concept code or screenshots, if applicable.

We will acknowledge your report within 24-48 hours and will work diligently to address the issue. We aim to resolve all reported vulnerabilities promptly and will keep you informed of our progress. We may also credit responsible reporters in our release notes.

## Security Best Practices

As this project aggregates API resources and promotes responsible usage, we encourage users to follow these best practices:

*   **API Key Management:** Never commit API keys directly into source code. Use environment variables or secure configuration management tools.
*   **Rate Limiting:** Be mindful of API rate limits. Implement appropriate backoff and retry mechanisms.
*   **Data Privacy:** Handle any user data with utmost care and in compliance with relevant privacy regulations.
*   **Dependency Security:** Regularly update project dependencies to their latest stable versions to benefit from security patches. We use `uv` and `Ruff` to help manage and audit dependencies.

Thank you for helping to keep `LLM-Inference-API-Resource-Aggregator` secure!
