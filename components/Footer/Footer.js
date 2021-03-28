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
    <h1 className="adam">
      FadoniTech © 2020
    </h1>
  </footer>
);

export default Footer;
