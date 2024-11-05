# Klassijs-astellen

Control all Global and Environment variables used in the Klassi-JS framework.

## Installation

```bash
pnpm add klassijs-astellen
```

## Usage

```javascript
const { astellen } = require('klassijs-astellen');

astellen.set('BROWSER_NAME', chrome);
const browserName = astellen.get('BROWSER_NAME');
```
