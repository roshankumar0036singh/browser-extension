# Contributing to BrowsePing

Thank you for your interest in contributing to BrowsePing! We appreciate your help in making this project better. Please take a moment to read through these guidelines before submitting your contribution.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Code Review Guidelines](#code-review-guidelines)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors. Be professional, considerate, and constructive in all interactions.

## How to Contribute

1. **Fork the repository** to your own GitHub account
2. **Clone your fork** locally
3. **Create a new branch** following our branch naming conventions
4. **Make your changes** with clear, descriptive commits
5. **Test thoroughly** to ensure nothing breaks
6. **Push to your fork** and submit a pull request
7. **Respond to feedback** during the code review process

## Branch Naming Conventions

**⚠️ IMPORTANT**: Always create a new branch for your contribution. Never commit directly to `main` or `develop`.

Use the following prefixes for your branch names:

- `feature/` - For new features or enhancements
  - Example: `feature/add-dark-mode`
  - Example: `feature/improve-analytics-dashboard`

- `fix/` - For bug fixes
  - Example: `fix/login-validation-error`
  - Example: `fix/memory-leak-in-websocket`

- `hotfix/` - For urgent production fixes
  - Example: `hotfix/critical-security-patch`

- `refactor/` - For code refactoring without changing functionality
  - Example: `refactor/simplify-auth-logic`

- `docs/` - For documentation changes
  - Example: `docs/update-readme`
  - Example: `docs/add-api-documentation`

- `test/` - For adding or updating tests
  - Example: `test/add-unit-tests-for-auth`

- `chore/` - For maintenance tasks, dependency updates, etc.
  - Example: `chore/update-dependencies`
  - Example: `chore/configure-eslint`

- `style/` - For formatting, styling, or UI improvements
  - Example: `style/improve-button-spacing`

**Format**: `<type>/<short-description-in-kebab-case>`

## Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit messages must follow this format:

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Commit Types

- **feat**: A new feature
  - Example: `feat(auth): add password reset functionality`
  
- **fix**: A bug fix
  - Example: `fix(popup): resolve layout overflow on small screens`
  
- **docs**: Documentation changes only
  - Example: `docs(readme): update installation instructions`
  
- **style**: Code style changes (formatting, missing semicolons, etc.) - no code logic change
  - Example: `style(components): format code with prettier`
  
- **refactor**: Code changes that neither fix bugs nor add features
  - Example: `refactor(api): simplify error handling logic`
  
- **perf**: Performance improvements
  - Example: `perf(tracking): optimize tab monitoring algorithm`
  
- **test**: Adding or updating tests
  - Example: `test(auth): add unit tests for login flow`
  
- **chore**: Maintenance tasks, dependency updates, build configuration
  - Example: `chore(deps): update react to version 18.3.0`
  
- **ci**: Changes to CI/CD configuration
  - Example: `ci(github): add automated testing workflow`
  
- **build**: Changes to build system or external dependencies
  - Example: `build(webpack): update webpack config for production`

### Commit Message Examples

✅ **Good commits:**
```
feat(friends): add ability to block users
fix(websocket): prevent reconnection loop on network error
docs(contributing): add commit message guidelines
refactor(components): extract reusable Button component
test(analytics): add integration tests for hourly tracking
chore(deps): bump tailwindcss from 3.4.0 to 3.4.1
```

❌ **Bad commits:**
```
updated stuff
fix bug
WIP
changes
fixed it
```

## Pull Request Process

### Before Submitting a PR

1. **Test your changes thoroughly** - Ensure your code works as expected
2. **Run the build** - Make sure `npm run build` completes without errors
3. **Check for breaking changes** - Your PR should only contain changes related to your contribution
4. **Update documentation** - If you've added features, update the README or relevant docs
5. **Self-review your code** - Check for console logs, commented code, or debug statements

### ⚠️ CRITICAL: Review Your Changes Carefully

**Before committing and creating a PR, you MUST:**

- Review every single file you're committing
- Ensure ONLY your intended changes are included
- Remove any accidental changes, debug code, or unrelated modifications
- Verify no breaking changes are introduced to existing functionality
- Test that existing features still work correctly

**⚠️ WARNING**: Pull requests that include unrelated changes, breaking changes, or modifications beyond the stated purpose will be **immediately closed with an "invalid" tag** and will not be reviewed.

We take code quality seriously. Please respect our codebase and review guidelines.

### PR Title Format

Your PR title should follow the same convention as commit messages:

```
<type>(<scope>): <description>
```

Examples:
- `feat(inbox): add message search functionality`
- `fix(auth): resolve token expiration handling`
- `docs(readme): improve installation instructions`

### PR Description Template

When creating a pull request, include:

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement
- [ ] Test addition/update

## Related Issue
Closes #(issue number)

## Changes Made
- List specific changes made
- Be clear and concise
- Include any important details

## Testing Done
- Describe how you tested your changes
- Include test cases if applicable

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have tested my changes thoroughly
- [ ] Any dependent changes have been merged and published
```

## Code Review Guidelines

### For Contributors

- Be patient during the review process
- Respond to feedback constructively
- Make requested changes promptly
- Ask questions if feedback is unclear
- Be open to suggestions and improvements

### Review Timeline

- Initial review: Within 2-3 business days
- Follow-up reviews: Within 1-2 business days
- Please be patient - maintainers are often volunteers

## Development Setup

Please refer to the [README.md](README.md) for detailed development setup instructions.

Quick start:
```bash
git clone https://github.com/browseping/browser-extension.git
cd browser-extension
npm install
cp .env.example .env
npm run dev
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid using `any` type unless absolutely necessary
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow existing styling patterns
- Ensure responsive design
- Test on different screen sizes

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Add meaningful comments for complex logic
- Remove console.logs before committing
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principles

### File Naming

- Use PascalCase for component files: `UserProfile.tsx`
- Use camelCase for utility files: `localStorage.ts`
- Use kebab-case for style files: `user-profile.css`

## Testing

- Write tests for new features
- Ensure existing tests pass
- Test edge cases and error scenarios
- Test on multiple browsers if UI changes are made

## Questions or Issues?

If you have questions or run into issues:

- **Discord Community**: Join our [Discord server](https://discord.gg/GdhXuEAZ) for real-time discussions and support
- **GitHub Issues**: Check existing issues or create a new one with detailed information
- **Email Support**: Contact us at [support@browseping.com](mailto:support@browseping.com)
- **Follow Us**: Stay updated on [Twitter/X](https://x.com/browseping) and [LinkedIn](https://www.linkedin.com/company/browseping)

## Recognition

All contributors will be recognized in our README and release notes. Thank you for helping make BrowsePing better!

---

**Remember**: Quality over quantity. A well-tested, properly documented small PR is more valuable than a large, rushed contribution.

Thank you for contributing to BrowsePing!
