import { css, unsafeCSS } from "lit-element";
import * as foundations from "@bbva-web-components/bbva-foundations-styles";

export default css`
:host {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.img-pokemon {
  width: 15rem;
}

.card {
  width: 300px;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 30px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  text-align: center;
}

h2 {
  font-size: 1.5em;
  margin: 10px 0;
  text-align: center;
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
`;
