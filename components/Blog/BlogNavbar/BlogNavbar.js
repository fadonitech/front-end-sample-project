import Link from 'next/link';

const BlogNavbar = () => (
  <div className="blogNavbar">
    <Link href="/">
      <div className="blogNavbar--logo">
        <img
          src="/logo-black.png"
          height={45.6}
          width={40}
          alt="Software Development"
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

export default BlogNavbar;