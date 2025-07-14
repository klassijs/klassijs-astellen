# Klassijs-astellen

This is used to control all the Global and Environment variables that's used in klassi-js test framework as well as independently in your own framework/project.

## Installation

```bash
pnpm add klassijs-astellen
```

## Usage

```javascript
const { astellen } = require('klassijs-astellen');

// Set values
astellen.set('BROWSER_NAME', 'chrome');
astellen.set('activePageObject', setPageObject(tagFromCommandLine, pageObjectMap));

// Get values
const browserName = astellen.get('BROWSER_NAME');
const activePageObject = astellen.get('activePageObject');

// Check if key exists
if (astellen.has('BROWSER_NAME')) {
  console.log('Browser name is set');
}

// Delete a key
astellen.delete('BROWSER_NAME');

// Print all stored values (useful for debugging)
astellen.print();

// Reset all values
astellen.reset();
```

## API Reference

- `set(key, value)` - Store a value with the given key
- `get(key)` - Retrieve a value by key
- `has(key)` - Check if a key exists
- `delete(key)` - Remove a key-value pair
- `print()` - Display all stored values in console
- `reset()` - Clear all stored values

## Credit
[Paul Grossman](https://www.linkedin.com/in/pmgrossman/)