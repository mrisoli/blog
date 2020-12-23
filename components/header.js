import Logo from './logo'
import Link from 'next/link'
import {DarkModeToggle} from './toggle'

const Header = () => (
  <header>
    <Link href="/">
      <a className="logo" href="/">
        <Logo />
      </a>
    </Link>

    <nav>
      <DarkModeToggle />
      <a
        className="src"
        rel="noopener"
        target="_blank"
        href="https://github.com/mrisoli/blog"
      >
        Source
      </a>
      <a
        className="button"
        rel="noopener"
        target="_blank"
        href="https://calendly.com/mrisoli/officehours"
      >
        Office Hours
      </a>
      <a
        className="button"
        rel="noopener"
        target="_blank"
        href="https://twitter.com/mgrisoli"
      >
        Follow Me
      </a>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav {
        align-items: center;
        display: flex;
        padding: 10px 0 10px 5px;
      }
      nav a {
        padding: 6px 10px;
        display: inline-block;
        text-decoration: none;
        margin-right: 15px;
      }
      nav a.src {
        font-size: 13px;
        color: var(--nav-link-color);
      }
      nav a.button {
        font-weight: bold;
        color: var(--nav-button-text-color);
        background-color: var(--nav-button-background-color);
        font-size: 13px;
      }
      a.logo {
        text-decoration: none;
        color: var(--logo-text-color);
        display: inline-flex;
        transition: 150ms background-color ease;
        padding: 5px;
      }
      @media (any-hover: hover) {
        a.logo:hover {
          background-color: var(--link-highlight);
          color: var(--link-highlight-text);
        }
        a.logo:active {
          background-color: var(--logo-background-color-active);
        }
      }
      @media (max-width: 500px) {
        nav {
          align-items: stretch;
          display: flex;
          flex-direction: column;
        }
        nav a:not(:last-child) {
          margin-bottom: 5px;
        }
      }
      @media (min-width: 500px) {
        header {
          max-width: 42rem;
          margin: auto;
          padding: 10px 0;
        }
        nav {
          padding: 0;
        }
      }
    `}</style>
  </header>
)

export default Header
