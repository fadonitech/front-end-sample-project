import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <div className="navbar--logo">
          <Image
            src="/logo-white.png"
            height={45.6}
            width={40}
          />
          <h3 className="adam">
            FadoniTech
          </h3>
        </div>
      </Link>

      <div className="navbar--links adam">
        <ul>
          <li>How It Works</li>
          <li>Benefits</li>
          <li>Price</li>
          <li>Blog</li>
        </ul>
        <Link href="/contact">
          <button className="navbar--cta">
            BOOK A MEETING
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;