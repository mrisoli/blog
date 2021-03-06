import {useCallback} from 'react'
import Toggle from 'react-toggle'

import Moon from '../components/icons/moon'
import Sun from '../components/icons/sun'
import useDarkMode from '../hooks/use-dark-mode'

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const handleChange = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode])
  return (
    <div>
      <Toggle
        aria-label="Switch between Dark and Light mode"
        defaultChecked={darkMode}
        icons={{
          checked: <Moon />,
          unchecked: <Sun />,
        }}
        onChange={handleChange}
      />
      <style jsx>{`
        div :global(.react-toggle) {
          touch-action: pan-x;

          display: inline-block;
          position: relative;
          cursor: pointer;
          background-color: transparent;
          border: 0;
          padding: 0;

          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
        }

        div :global(.react-toggle-screenreader-only) {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }

        div :global(.react-toggle--disabled) {
          cursor: not-allowed;
          opacity: 0.5;
          -webkit-transition: opacity 0.25s;
          transition: opacity 0.25s;
        }

        div :global(.react-toggle-track) {
          width: 50px;
          height: 24px;
          padding: 0;
          border-radius: 30px;
          background-color: #4d4d4d;
          -webkit-transition: all 0.2s ease;
          -moz-transition: all 0.2s ease;
          transition: all 0.2s ease;
        }

        div
          :global(.react-toggle:hover:not(.react-toggle--disabled)
            .react-toggle-track) {
          background-color: #000000;
        }

        div :global(.react-toggle--checked .react-toggle-track) {
          background-color: #4c566a;
        }

        div
          :global(.react-toggle--checked:hover:not(.react-toggle--disabled)
            .react-toggle-track) {
          background-color: #434c5e;
        }

        div :global(.react-toggle-track-check) {
          position: absolute;
          width: 14px;
          height: 10px;
          top: 0px;
          bottom: 0px;
          margin-top: auto;
          margin-bottom: auto;
          line-height: 0;
          left: 8px;
          opacity: 0;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        div :global(.react-toggle--checked .react-toggle-track-check) {
          opacity: 1;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        div :global(.react-toggle-track-x) {
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0px;
          bottom: 0px;
          margin-top: auto;
          margin-bottom: auto;
          line-height: 0;
          right: 10px;
          opacity: 1;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        div :global(.react-toggle--checked .react-toggle-track-x) {
          opacity: 0;
        }

        div :global(.react-toggle-thumb) {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
          position: absolute;
          top: 1px;
          left: 1px;
          width: 22px;
          height: 22px;
          border: 1px solid #4d4d4d;
          border-radius: 50%;
          background-color: #fafafa;

          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;

          -webkit-transition: all 0.25s ease;
          -moz-transition: all 0.25s ease;
          transition: all 0.25s ease;
        }

        div :global(.react-toggle--checked .react-toggle-thumb) {
          left: 27px;
          border-color: #4c566a;
        }

        div :global(.react-toggle--focus .react-toggle-thumb) {
          -webkit-box-shadow: 0px 0px 3px 2px #81a1c1;
          -moz-box-shadow: 0px 0px 3px 2px #81a1c1;
          box-shadow: 0px 0px 2px 3px #81a1c1;
        }

        div
          :global(.react-toggle:active:not(.react-toggle--disabled)
            .react-toggle-thumb) {
          -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
          -moz-box-shadow: 0px 0px 5px 5px #0099e0;
          box-shadow: 0px 0px 5px 5px #0099e0;
        }
      `}</style>
    </div>
  )
}
