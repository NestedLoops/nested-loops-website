import Page from '../layouts/page';

export default () => <Page>
  <style jsx>{`
    p {
      max-width: 400px;
      margin: 5rem auto 0 auto;
    }
  `}</style>
  <p>
    We are a band that combines video, audio and live vocals with JavaScript inside of an Electron window. 
    We performed at the JSConf EU opening performances in 2015, 2017 and 2018.
  </p>
</Page>