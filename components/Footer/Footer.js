import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <Link href="/">
      <img
        src="/logo-white.png"
        height={91.2}
        width={80}
        alt="Software Development"
      />
    </Link>
    <h1 className="open-sans-light">
      FadoniTech © 2021
    </h1>
  </footer>
);

export default Footer;