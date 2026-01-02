# BrowsePing Browser Extension

## Overview

BrowsePing is an open-source browser extension that transforms your solitary browsing into a vibrant social experience. Connect with friends, share your digital presence, and discover what's capturing everyone's attention across the web. Make your browsing more insightful with comprehensive analytics, real-time presence tracking, and meaningful social interactions.

### Key Features

- **Social Presence**: See what your friends are browsing in real-time and connect over shared interests
- **Advanced Analytics**: Track your browsing habits with detailed insights including hourly presence, tab usage, and productivity metrics
- **Friend System**: Add friends, send messages, and engage in meaningful conversations about your online discoveries
- **Privacy First**: Full control over your data with customizable privacy settings
- **Real-time Messaging**: Built-in inbox to chat with your network
- **Leaderboard**: Friendly competition to see who's the most active browser

Learn more at [browseping.com](https://www.browseping.com)

## Download

- **Chrome Web Store**: [Install BrowsePing](https://chromewebstore.google.com/detail/browseping/lkcmcldjgmbojnhepnhegkmddfempmcd)
- **Microsoft Edge Add-ons**: [Install BrowsePing](https://microsoftedge.microsoft.com/addons/detail/browseping)

Compatible with Chrome, Edge, Brave, Opera, and other Chromium-based browsers.

## Installation for Development

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/browseping/browser-extension.git
   cd browser-extension
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file to configure your backend URL:
   
   - **For production testing** (default): Keep `BACKEND_URL=https://api.browseping.com`
   - **For local development**: Use the [browseping/server](https://github.com/browseping/server) repository and update `.env`: `BACKEND_URL=http://localhost:3000`

4. **Start development mode**
   ```bash
   npm run dev
   ```

5. **Load the extension in your browser**
   
   - Open Chrome/Edge and navigate to `chrome://extensions/` (or `edge://extensions/`)
   - Enable **Developer mode** (toggle in the top right)
   - Click **Load unpacked**
   - Select the `dist` directory from your project folder
   
   The extension is now loaded! Any code changes will trigger automatic rebuilds (you may need to reload the extension to see changes).

## Scripts

The project includes the following npm scripts:

- **`npm run dev`**: Runs webpack in watch mode for development. This continuously rebuilds the extension as you make changes to the code, making it ideal for development.

- **`npm run build`**: Builds the extension for production. This creates optimized files in the `dist` directory ready for distribution.

## Development Workflow

1. Run `npm run dev` to start the development build process
2. Load the extension from the `dist` folder into your browser:
   - Open Chrome/Edge and navigate to `chrome://extensions/` (or `edge://extensions/`)
   - Enable **Developer mode**
   - Click **Load unpacked** and select the `dist` directory
3. Make changes to the code - the extension will automatically rebuild
4. Reload the extension in your browser to see changes (click the refresh icon on the extension card)

## Project Structure

```
browser-extension/
├── src/
│   ├── background/       # Background service worker
│   ├── popup/           # Extension popup UI
│   │   ├── components/  # React components
│   │   ├── context/     # React context providers
│   │   ├── pages/       # Page components
│   │   └── utils/       # Utility functions
│   └── services/        # API and service integrations
├── public/              # Static assets
├── dist/                # Built extension files
└── manifest.json        # Extension manifest
```

## Contributing

We welcome contributions! BrowsePing is an open-source project and we'd love your help in making it better. Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

Join our community on [Discord](https://discord.gg/GdhXuEAZ) to discuss ideas, ask questions, and collaborate with other contributors.

Visit our [GitHub organization](https://github.com/browseping) to explore more repositories and contribute.

## Support

- **Help Center**: [browseping.com/help](https://www.browseping.com/help)
- **Contact Us**: [browseping.com/contact](https://www.browseping.com/contact)
- **Email**: [support@browseping.com](mailto:support@browseping.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Community & Links

### Connect With Us

- **Discord**: [Join our community](https://discord.gg/GdhXuEAZ)
- **Twitter/X**: [@BrowsePing](https://x.com/browseping)
- **LinkedIn**: [BrowsePing Company](https://www.linkedin.com/company/browseping)
- **GitHub**: [github.com/browseping](https://github.com/browseping)

---
