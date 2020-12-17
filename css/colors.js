import css from 'styled-jsx/css'

const style  = css.global`
  :root {
    --bg-color: #fff;
    --primary-color: #000;
    --link-color: #0c00ff;
    --link-highlight: yellow;
    --meta-text-color: #4f4f4f;
    --ui-item-color: #5b5b5b;
    --ui-item-color-hover: #eee;
    --ui-item-color-active: #ccc;
    --nav-link-color: #333;
    --nav-button-text-color: #fff;
    --nav-button-background-color: #000;
    --logo-text--color: #000;
    --logo-background-color-active: #fff445;
    --text-selection-background-color: #0070f3;
    --text-selection-color: #fff;
  }

  [data-theme="dark"] {
    --bg-color: #2E3440;
    --primary-color: #D8DEE9;
    --link-color: #88C0D0;
    --link-highlight: yellow;
    --meta-text-color: #4C566A;
    --ui-item-color: #E5E9F0;
    --ui-item-color-hover: #E5E9F0;
    --ui-item-color-active: #81A1C1;
    --nav-link-color: #ECEFF4;
    --nav-button-text-color: #3B4252;
    --nav-button-background-color: #D8DEE9;
    --logo-text--color: #ECEFF4;
    --logo-background-color-active: #EBCB8B;
    --text-selection-background-color: #0070f3;
    --text-selection-color: #fff;
  }

  body {
    background-color: var(--bg-color);
    color: var(--primary-color);
  }

  ::selection {
    background-color: var(--text-selection-background-color);
    color: var(--text-selection-color);
  }
`

export default style
