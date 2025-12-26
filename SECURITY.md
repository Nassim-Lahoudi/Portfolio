# Security Policy

## 🔒 Supported Versions

This project is actively maintained. Security updates are provided for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | :white_check_mark: |
| < 1.0   | :x:                |

## 🛡️ Security Measures

This project implements the following security practices:

### Environment Variables
- **API Keys Protection**: EmailJS credentials are stored in environment variables (`.env`), not in source code
- **Git Ignore**: Sensitive `.env` files are excluded from version control
- **Template Provided**: `.env.example` shows required variables without exposing real values

### Dependencies
- Regular dependency updates via `npm audit`
- Only trusted packages from npm registry
- Minimal dependency footprint to reduce attack surface

### Content Security
- No inline JavaScript in HTML
- Proper input validation on contact form
- XSS prevention through React's built-in escaping

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps:

### 1. **Do NOT** open a public issue
Security vulnerabilities should be reported privately to prevent exploitation.

### 2. Report via GitHub Security Advisories (Preferred)
1. Go to the [Security tab](https://github.com/Nassim-Lahoudi/Portfolio/security)
2. Click "Report a vulnerability"
3. Fill in the details about the vulnerability

### 3. Or contact directly
- **Email**: info@nassim-lahoudi.de
- **Subject**: `[SECURITY] Portfolio Vulnerability Report`

### What to include in your report
Please provide as much information as possible:
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if you have one)
- Your contact information for follow-up

## 📋 Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - **Critical**: Within 24-48 hours
  - **High**: Within 1 week
  - **Medium**: Within 2 weeks
  - **Low**: Within 1 month

## 🎯 Scope

### In Scope
- Authentication/authorization issues (if applicable)
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Injection vulnerabilities
- Exposed sensitive data
- Dependency vulnerabilities

### Out of Scope
- Social engineering attacks
- Physical security
- Attacks requiring physical access to devices
- Issues in third-party services (EmailJS, Netlify, etc.)
- Denial of Service (DoS) attacks

## 🔐 Security Best Practices for Contributors

If you're contributing to this project:

1. **Never commit sensitive data**
   - No API keys, passwords, or tokens in code
   - Use `.env` files for local development
   - Double-check before committing

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Review security advisories**
   - Check GitHub Dependabot alerts
   - Update vulnerable packages promptly

4. **Follow secure coding practices**
   - Validate and sanitize user input
   - Use parameterized queries (if database is added)
   - Implement proper error handling without exposing sensitive information

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [npm Security Best Practices](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)

## 🙏 Acknowledgments

We appreciate the security research community and responsible disclosure. Security researchers who report valid vulnerabilities will be acknowledged (with their permission) in the project's release notes.

---

**Last Updated**: December 26, 2025
