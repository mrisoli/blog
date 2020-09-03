import SvgLogo from '../static/logo.svg'
const Logo = () => (
  <span>
    <div className="svg-container">
      <SvgLogo />
    </div>
    risoli.co
    <style jsx>{`
      span {
        font-weight: bold;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        height: 30px;
        line-height: 20px;
        padding: 10px;
      }
      .svg-container {
        margin-right: 10px;
      }
    `}</style>
  </span>
)

export default Logo
