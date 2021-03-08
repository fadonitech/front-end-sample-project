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
          <img src="/logo-white.png" />
        </Link>
        
        <ul>
          <li>
            <ScrollLink to="howitworks" onClick={onClick}>
              How It Works
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="benefits" onClick={onClick}>
              Benefits
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="pricing" onClick={onClick}>
              Price
            </ScrollLink>
          </li>
          {/* 
          <li>
            <ScrollLink to="blog">
              Blog
            </ScrollLink>
          </li> 
          */}
        </ul>

        <ScrollLink to="contactus" onClick={onClick}>
          <button className="navbar--cta">
            BOOK A MEETING
          </button>
        </ScrollLink>
      </div>
    </>
  )
}

export default MobileNavbar;