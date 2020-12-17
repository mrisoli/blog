import css from 'styled-jsx/css'

const style = css.global`
  :root {
    --link-color: #0c00ff;
    --link-highlight: yellow;
    --meta-text-color: #4f4f4f;
    --ui-item-color: #5b5b5b;
    --ui-item-color-hover: #eee;
    --ui-item-color-active: #ccc;
    --nav-link-color: #333;
    --nav-button-text--color: #fff;
    --nav-button-background--color: #000;
    --logo-text--color: #000;
    --logo-background-color-active: #fff445;
  }
  ::selection {
    background-color: #0070f3;
    color: #fff;
  }
`

export default style
