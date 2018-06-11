const { Fragment } = React;

export default () => <Fragment>
  <style jsx>{`
    .logo {
      max-width: 450px;
      margin: 40vh auto 5rem auto;
      position: relative;
      top: 0px;
    }
    
    img {
      width: 100%;
    }
  `}</style>

  <div className="logo">
    <a href="/">
      <img src="static/nested-loops-logo.png" alt="Nested Loops Logo" />
    </a>
  </div>
</Fragment>