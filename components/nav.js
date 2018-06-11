import Link from 'next/link';

export default () => <>
  <nav>
    <ul>
      <li>
        <Link href="/performances">
          <a>Performances</a>
        </Link>
      </li>
      <li>
        <a href="https://soundcloud.com/nested-loops">SoundCloud</a>
      </li>
      <li>
        <a href="https://shop.spreadshirt.net/nested-loops">Merch</a>
      </li>
      <li>
        <a href="https://twitter.com/nested_loops">Twitter</a>
      </li>
      <li>
        <a href="mailto:hello@kahlil.info">Contact</a>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
</>