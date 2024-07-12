import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './poke-card-ui.css.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <poke-card-ui></poke-card-ui>
 * ```
 */
export class PokeCardUi extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      urlImg: { type: String },
      pokemonType: { type: String },
      pokemonAttack: { type: String },
      pokemonDefense: { type: String },
      pokemonSpeed: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "";
    this.urlImg = "";
    this.pokemonAttack = '';
    this.pokemonDefense = '';
    this.pokemonType = '';
    this.pokemonSpeed = '';
  }

  static get styles() {
    return [styles, getComponentSharedStyles("poke-card-ui-shared-styles")];
  }

  render() {
    return html`
      <div class="card">
      <h2>${this.name}</h2>
        <img loading="lazy" class="img-pokemon" src=${this.urlImg} alt="" />
        <div class="stats">
          <div class="stat">
            <span class="label">Ataque</span>
            <span class="value">${this.pokemonAttack}</span>
          </div>
          <div class="stat">
            <span class="label">Defensa</span>
            <span class="value">${this.pokemonDefense}</span>
          </div>
          <div class="stat">
            <span class="label">Velocidad</span>
            <span class="value">${this.pokemonDefense}</span>
          </div>
          <div class="stat">
            <span class="label">Tipo</span>
            <span class="value">${this.pokemonType}</span>
          </div>
        </div>
      </div>
    `;
  }
}