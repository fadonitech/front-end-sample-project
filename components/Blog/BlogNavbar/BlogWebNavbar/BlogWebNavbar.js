import Link from 'next/link';

const BlogWebNavbar = () => (
	<div className='blogNavbar'>
		<Link href='/'>
			<div className='blogNavbar--logo'>
				<div>
					<img
						src='/logo-white.png'
						alt='Augmented Reality'
					/>
				</div>
				<h3 className='open-sans-light'>FadoniTech</h3>
			</div>
		</Link>

		<div className='blogNavbar--links'>
			<ul>
				<li>
					<Link href='/about-us'>About Us</Link>
				</li>
				<li>
					<Link href='/subscribe'>Library</Link>
				</li>
				<li>
					<Link href="/blog">
						Blog
					</Link>
				</li>
			</ul>

			<Link href='/subscribe'>
				<button className='navbar--cta'>SUBSCRIBE NOW</button>
			</Link>
		</div>
	</div>
);

export default BlogWebNavbar;
