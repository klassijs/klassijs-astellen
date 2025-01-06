# Klassijs-astellen

This is used to control all the Global and Environment variables that's used in klassi-js test framework as well as independently in your own framework/project.

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
## Credit
[Paul Grossman](https://www.linkedin.com/in/pmgrossman/)