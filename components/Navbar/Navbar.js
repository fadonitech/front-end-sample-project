import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const { pathname } = useRouter();
  const [scroll, setScroll] = useState({
    scrollY: 0,
    isGoingDown: true
  });

  const scrollHandler = e => {
    const newScrollY = window.scrollY;
    const scrollDirection = newScrollY > scroll.scrollY;

    setScroll({
      scrollY: newScrollY,
      isGoingDown: scrollDirection
    });
  }

  useEffect(() => {
    const scrollEvent = document.addEventListener("scroll", scrollHandler);
    return document.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className={`navbar ${scroll.scrollY > 0 || pathname !== '/'  ? 'navbar--bg-black' : ''}`}>
      <Link href="/">
        <div className="navbar--logo">
          <img
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
        <Link href="contact">
          <button className="navbar--cta">
            BOOK A MEETING
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;