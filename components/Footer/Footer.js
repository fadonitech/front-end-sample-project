import Image from 'next/image';

const Footer = () => (
  <footer className="footer">
    <Image
      src="/logo-white.png"
      height={91.2}
      width={80}
    />
    <h1 className="adam">
      FadoniTech © 2020
    </h1>
  </footer>
);

export default Footer;
