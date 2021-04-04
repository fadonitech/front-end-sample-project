import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const MobileNavbar = () => {
  const [btnActive, setBtnActive] = useState(false);

  const onClick = () => {
    setBtnActive(!btnActive);
  }

  return (
    <>
      <div className={`navbar-mobile__bg-${btnActive ? "show" : "hide"}`} />
      <img
        className={`navbar-mobile__img-${btnActive ? "hide" : "show"}`}
        src="/logo-white.png"
        alt="Software Development"
      />

      <button
        className={`
          navbar-mobile--hamburger hamburger hamburger--collapse ${btnActive && "is-active"}
        `}
        onClick={onClick}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className={`navbar-mobile__links-${btnActive ? "show" : "hide"} adam`}>
        <Link href="/">
          <img src="/logo-white.png" alt="Tech Partnership" />
        </Link>
        <ul>
          <li>
            <Link href="/about-us" onClick={onClick}>
              About Us
          </Link>
          </li>
          <li>
            <Link href="/our-services" onClick={onClick}>
              Services
          </Link>
          </li>
          <li>
            <Link href="/price" onClick={onClick}>
              Price
          </Link>
          </li>
          <li>
            <Link href="/blog" onClick={onClick}>
              Blog
          </Link>
          </li>
        </ul>
        <Link href="contactus" onClick={onClick}>
          <button className="navbar--cta">
            BOOK A MEETING
          </button>
        </Link>
      </div>
    </>
  )
}

export default MobileNavbar;