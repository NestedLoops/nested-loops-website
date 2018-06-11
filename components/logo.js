export default () => <>
  <style jsx>{`
    .logo {
      max-width: 450px;
      margin: 5rem auto 5rem auto;
      position: relative;
      top: 0px;
    }

    @media (max-width: 970px) {
      .logo {
        margin-top: 1vh;
      }
    }
    
    img {
      width: 100%;
      display: block;
    }
  `}</style>

  <div className="logo">
    <a href="/">
      <img src="/static/nested-loops-logo.png" alt="Nested Loops Logo" />
    </a>
  </div>
</>