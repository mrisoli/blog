const Logo = () => (
  <span>
    <div className="svg-container">
      <img src="/logo.svg" alt="black right triangle logo" />
    </div>
    risoli.dev
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
