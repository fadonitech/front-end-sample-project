import Link from 'next/link';
import Navbar from '../../Navbar/WebNavbar/WebNavbar';
import { useState, useEffect } from 'react';


const BlogWebNavbar = () => (
  <div className="blogNavbar">
    <Link href="/">
      <div className="blogNavbar--logo">
        <img
          src="/logo-black.png"
          height={45.6}
          width={40}
          alt="E-commerce"
        />
        <h3 className="adam">
          FadoniTech
        </h3>
      </div>
    </Link>

    <div className="blogNavbar--links">
      <ul>
        <li>
          <Link href="/about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/service">
            Service
          </Link>
        </li>
        <li>
          <Link href="/price">
            Price
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <Link href="contactus">
        <button className="navbar--cta">
          BOOK A MEETING
        </button>
      </Link>
    </div>
  </div>
)

const BlogMobilebNavbar = () => {
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
          <img src="/logo-white.png" alt="Tech Partnership" />
        </Link>
        <ul>
          <li>
            <Link href="/about-us" onClick={onClick}>
              About Us
          </Link>
          </li>
          <li>
            <Link href="/service" onClick={onClick}>
              Service
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

const BlogNavbar = () => {
  const [isPhone, setIsPhone] = useState(false);

  const validateScreen = () => {
    setIsPhone(window.innerWidth <= 600);
  }

  useEffect(() => {
    setIsPhone(window.innerWidth <= 600);
    const resizeEvent = window.addEventListener('resize', validateScreen);
    return window.removeEventListener('resize', resizeEvent)
  }, []);

  return (
    !isPhone ? <BlogWebNavbar /> : <BlogMobilebNavbar />
  )
}

export default BlogNavbar;