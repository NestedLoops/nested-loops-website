import Head from 'next/head';
import Logo from '../components/logo';
import Nav from '../components/nav';

export default ({ children }) => <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400" rel="stylesheet" />
  </Head>
  <main>
    <style jsx global>{`
      * { 
        box-sizing: border-box;
      }

      html {
        background-color: #000;
        font-family: Nunito, sans-serif;
        letter-spacing: 1px;
        font-weight: 300;
        color: #fff;
        font-size: 18px;
        line-height: 1.6em;
      }

      nav {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
      }

      nav a {
        text-decoration: none;
      }

      nav a:hover {
        text-decoration: none;
        border-bottom: 1px solid white;
      }
  
      ul {
        margin: 0 auto;
        padding: 0;
        display: inline-block;
      }
  
      li {
        list-style-type: none;
        display: inline-block;
        padding: 0 1rem;
      }
  
      a, a:hover, a:active, a:visited {
        color: #fff;
        letter-spacing: 2px;
      }
    `}</style>
    <Logo />
    <Nav />
    { children }
  </main>
</>;