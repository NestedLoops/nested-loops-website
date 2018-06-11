import Page from '../layouts/page';

export default () => <Page>
  <style jsx>{`
    p {
      max-width: 400px;
      margin: 5rem auto 0 auto;
      text-align: center;
    }
  `}</style>
  <p>
    <ul>
      <li>
        <a href="http://youtu.be/e6wrCr7bzSg">2018</a>
      </li>
      <li>
        <a href="http://youtu.be/lCn-XCASn98">2017</a>
      </li>
      <li>
        <a href="http://youtu.be/lJ1kY-CSpBk">2015</a>
      </li>
    </ul>
  </p>
</Page>