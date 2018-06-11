import Page from '../layouts/page';
import Performances from '../mdx/performances.mdx';

export default () => <Page>
  <style jsx>{`
    div {
      max-width: 400px;
      margin: 5rem auto 0 auto;
      text-align: center;
    }
  `}</style>
  <div>
    <Performances />
  </div>
</Page>