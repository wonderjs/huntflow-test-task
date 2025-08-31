# Huntflow Test Task

## About
This is a test task for Huntflow. The project uses Vite with Vanilla JS, ESLint, and Prettier.

## Requirements
- Node.js >= 22.12.0 (recommended to use nvm; see `.nvmrc` if present)
- npm (or pnpm/yarn) installed

## Installation
1. To start using, clone the repository with this command:
```bash
git clone https://github.com/wonderjs/huntflow-test-task.git
```
2. Then proceed to the folder and install dependencies:
```bash
npm install
npm run dev
```

## Scripts

Use the following scripts for your development workflow:

- Start the development server:
```bash
npm run dev
```

- Checks your code for any linting errors:
```bash
npm run lint
```

- Tries to automatically fix any linting errors present in your code:
```bash
npm run lint:fix
```

- Formats your code in a consistent, predefined style using Prettier:
```bash
npm run format
```

- Build for production
```bash
npm run build
```

- Preview the build
```bash
npm run preview
```

## Deployment
To deploy the project to GitHub Pages:
```bash
npm run deploy
```

## Tech stack

- [Vite](https://vitejs.dev/) 7
- Vanilla JavaScript
- [the-new-css-reset](https://github.com/elad2412/the-new-css-reset)
- ESLint (Airbnb + Prettier rules)
- Prettier (with css-order plugin)
- PostCSS: autoprefixer, cssnano, nesting, custom-media
- [gh-pages](https://github.com/tschaub/gh-pages) — deployment

## License

This template was created under the [MIT License](LICENSE.md).

