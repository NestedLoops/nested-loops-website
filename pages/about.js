import Page from '../layouts/page';
import About from '../mdx/about.mdx';

export default () => <Page>
  <style jsx>{`
    div {
      max-width: 450px;
      margin: 5rem auto 0 auto;
      border: 1px solid white;
      padding: 0 1.3rem;
    }
  `}</style>
  <div>
    <About />
  </div>
</Page>