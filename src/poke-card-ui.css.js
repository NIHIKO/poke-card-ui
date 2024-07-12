import { css, unsafeCSS } from "lit-element";
import * as foundations from "@bbva-web-components/bbva-foundations-styles";

export default css`
  :host {
    display: block;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .card {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background-color: #fff;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .img-pokemon {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
  }

  .container {
    padding: 2px 16px;
    text-align: center;
  }

  h2 {
    font-size: 1.5em;
    margin: 10px 0;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .stat {
    text-align: center;
    width: 45%;
    margin-bottom: 10px;
  }

  .stat span {
    display: block;
  }

  .stat .label {
    color: gray;
    font-size: 0.8em;
  }

  .stat .value {
    font-size: 1.2em;
    font-weight: bold;
  }
`;
