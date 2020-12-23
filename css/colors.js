import css from 'styled-jsx/css'

const style = css.global`
  :root {
    --bg-color: #fff;
    --primary-color: #000;
    --link-color: #0c00ff;
    --link-highlight: yellow;
    --link-highlight-text: #000;
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

  body.dark-mode {
    --bg-color: #2e3440;
    --primary-color: #d8dee9;
    --link-color: #88c0d0;
    --link-highlight: #ebcb8b;
    --link-highlight-text: #2e3440;
    --meta-text-color: #81a1c1;
    --ui-item-color: #e5e9f0;
    --ui-item-color-hover: #e5e9f0;
    --ui-item-color-active: #81a1c1;
    --nav-link-color: #eceff4;
    --nav-button-text-color: #3b4252;
    --nav-button-background-color: #d8dee9;
    --logo-text--color: #eceff4;
    --logo-background-color-active: #ebcb8b;
    --text-selection-background-color: #0070f3;
    --text-selection-color: #fff;
  }

  body {
    background-color: var(--bg-color);
    color: var(--primary-color);
    transition: color 0.2s ease-out, background 0.2s ease-out;
  }

  ::selection {
    background-color: var(--text-selection-background-color);
    color: var(--text-selection-color);
  }
`

export default style
