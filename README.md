# @bbva-web-components/poke-card-ui

## Package info

### Package installation

Installation using NPM

```bash
npm install @bbva-web-components/poke-card-ui
```

### Entry points & exports

- (Default entry point)
  - PokeCardUi (Class)
- poke-card-ui.js
  - poke-card-ui (Custom Element)


## PokeCardUi (Class) poke-card-ui (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { PokeCardUi } from '@bbva-web-components/poke-card-ui';

class ExampleElement extends PokeCardUi {
  ...
}
```

Use the custom element (defined globally):

```js
import '@bbva-web-components/poke-card-ui/poke-card-ui.js';
```

```html
<poke-card-ui ...>
  ...
</poke-card-ui>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <poke-card-ui></poke-card-ui>
```

### Properties

- **name**: string = "" (attribute: name)
- **pokemonAttack**: string = "" (attribute: pokemonAttack)
- **pokemonDefense**: string = "" (attribute: pokemonDefense)
- **pokemonSpeed**: string = "" (attribute: pokemonSpeed)
- **pokemonType**: string = "" (attribute: pokemonType)
- **urlImg**: string = "" (attribute: urlImg)
