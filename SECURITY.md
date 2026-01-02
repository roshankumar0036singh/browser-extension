# Security Policy

## Our Commitment to Security

At BrowsePing, we take the security of our users and their data very seriously. As an open-source browser extension that handles user browsing data and social interactions, we are committed to maintaining the highest security standards to protect our community.

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

We strongly recommend always using the latest version of BrowsePing to ensure you have all security patches and updates.

## Reporting a Vulnerability

We appreciate the security research community's efforts in responsibly disclosing vulnerabilities. If you discover a security vulnerability in BrowsePing, please help us protect our users by reporting it responsibly.

### For Critical Security Issues

**⚠️ DO NOT create a public GitHub issue for security vulnerabilities.**

If you've found a critical security vulnerability, please report it privately through one of the following methods:

#### Primary Contact
- **Email**: [support@browseping.com](mailto:support@browseping.com)
- **Subject**: "SECURITY: [Brief Description]"

#### Direct Contact with Maintainer
For critical or urgent security issues, you can contact the lead maintainer directly:
- **Email**: [akashkumar.dev00@gmail.com](mailto:akashkumar.dev00@gmail.com)
- **Subject**: "URGENT SECURITY: [Brief Description]"

### What to Include in Your Report

Please provide as much information as possible to help us understand and resolve the issue quickly:

1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Potential impact** of the vulnerability
4. **Affected versions** (if known)
5. **Suggested fix** (if you have one)
6. **Your contact information** for follow-up questions

### Example Security Report

```
Subject: SECURITY: XSS Vulnerability in Message Display

Description:
A cross-site scripting (XSS) vulnerability exists in the message display 
component that could allow malicious users to execute arbitrary JavaScript.

Steps to Reproduce:
1. Create a new message with the payload: <script>alert('XSS')</script>
2. Send the message to another user
3. When the recipient opens the message, the script executes

Impact:
High - Could allow attackers to steal session tokens or perform actions 
on behalf of users.

Affected Versions:
Tested on v1.2.0, likely affects earlier versions.

Contact:
researcher@example.com
```

## Response Timeline

We are committed to responding promptly to security reports:

- **Initial Response**: Within 24-48 hours of receiving your report
- **Status Update**: Within 5 business days with our assessment and planned action
- **Resolution**: We aim to release patches for critical vulnerabilities within 7-14 days

## Our Security Process

1. **Acknowledgment**: We'll acknowledge receipt of your vulnerability report
2. **Investigation**: Our team will investigate and validate the issue
3. **Mitigation**: We'll develop and test a fix
4. **Release**: We'll release a security patch and update affected users
5. **Disclosure**: After the patch is deployed, we may publicly disclose the vulnerability (with credit to you, if desired)

## Security Best Practices for Contributors

If you're contributing to BrowsePing, please follow these security guidelines:

### Code Security

- **Never commit secrets**: No API keys, passwords, or tokens in the code
- **Validate all inputs**: Sanitize and validate user inputs to prevent injection attacks
- **Use secure dependencies**: Keep dependencies up to date and audit for vulnerabilities
- **Follow secure coding practices**: Use parameterized queries, avoid eval(), sanitize HTML
- **Handle errors gracefully**: Don't expose sensitive information in error messages

### Data Privacy

- **Minimize data collection**: Only collect data that's necessary
- **Encrypt sensitive data**: Use encryption for sensitive information in transit and at rest
- **Respect user privacy**: Follow our privacy policy and obtain proper consent
- **Secure storage**: Use browser's secure storage APIs appropriately

### Authentication & Authorization

- **Secure session management**: Implement proper token handling and expiration
- **HTTPS only**: All API communications must use HTTPS
- **Proper authentication**: Implement strong authentication mechanisms
- **Least privilege**: Request only necessary browser permissions

## Vulnerability Disclosure Policy

We follow responsible disclosure practices:

- We will work with you to understand and address the vulnerability
- We ask that you give us reasonable time to fix the issue before public disclosure
- We will credit you for the discovery (unless you prefer to remain anonymous)
- We will publicly acknowledge your contribution once the fix is deployed

## Security Features in BrowsePing

Our extension implements several security measures:

- **Content Security Policy (CSP)**: Prevents XSS attacks
- **Permission-based access**: Requests only necessary browser permissions
- **Secure API communication**: All communications with backend use HTTPS
- **Token-based authentication**: Secure JWT-based authentication system
- **Data encryption**: Sensitive data is encrypted in transit
- **Regular security audits**: We regularly review our codebase for vulnerabilities

## Known Security Considerations

As a browser extension that tracks browsing activity:

- **Local data storage**: Some data is stored locally in the browser
- **Tab monitoring**: The extension monitors active tabs with user consent
- **WebSocket connections**: Real-time features use WebSocket connections
- **Third-party dependencies**: We regularly audit and update dependencies

## Bug Bounty Program

While we don't currently have a formal bug bounty program, we deeply appreciate security researchers' efforts. We recognize contributors who help us improve security:

- Public acknowledgment (if desired)
- Recognition in our security hall of fame
- Potential rewards for critical vulnerability discoveries

## Security Updates

- **Subscribe to updates**: Watch our [GitHub repository](https://github.com/browseping/browser-extension) for security advisories
- **Follow us**: Stay informed through our [Discord community](https://discord.gg/GdhXuEAZ)
- **Check regularly**: Review our [changelog](https://github.com/browseping/browser-extension/releases) for security patches

## Contact Information

For general security questions or concerns:

- **Email**: [support@browseping.com](mailto:support@browseping.com)
- **Discord**: [Join our community](https://discord.gg/GdhXuEAZ)
- **Website**: [browseping.com](https://browseping.com)
- **Twitter/X**: [@BrowsePing](https://x.com/browseping)

For critical security vulnerabilities, always use email and mark as "SECURITY" in the subject line.

---

## Additional Resources

- [Chrome Extension Security Best Practices](https://developer.chrome.com/docs/extensions/mv3/security/)
- [Mozilla Extension Security](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/)

---

**Thank you for helping keep BrowsePing and our community safe!**

Last Updated: January 3, 2026
