# Dev Setup Guide for CLI + Web App (SolidJS)

## Core Tools (Install via Terminal)
- **Homebrew**
- **Node.js (LTS Version)**
- **Git**
- **Yarn (optional)**

## Recommended Editor
- **Visual Studio Code** + Extensions

## Install NVM
```bash
brew install nvm
mkdir ~/.nvm
```
Add to `~/.zshrc`:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
```
Then:
```bash
source ~/.zshrc
nvm install --lts
```

## Project Setup
```bash
git clone https://github.com/yourusername/cli-web-solidjs.git
cd cli-web-solidjs
npm install
```

## Commands
| Action | Command |
|:---|:---|
| Run CLI (Dev) | `npm run cli` |
| Run CLI (Build Mode) | `npm run cli:build` |
| Dev Server (Web) | `npm run web:dev` |
| Build Web | `npm run web:build` |
| Preview Build | `npm run web:preview` |
| Bundle CLI to .exe | `pkg .` |

## GitHub Pages Deploy
- Auto triggered by GitHub Actions on push to `main`.

## Global NPM Tools (Optional)
```bash
npm install -g pkg ts-node vite eslint
```

## GitHub CLI (Optional)
```bash
brew install gh
```

> Enjoy a fast, clean, and scalable dev environment 🚀