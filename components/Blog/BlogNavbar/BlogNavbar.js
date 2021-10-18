import Link from 'next/link';
import { useState, useEffect } from 'react';

const BlogWebNavbar = () => (
	<div className='blogNavbar'>
		<Link href='/'>
			<div className='blogNavbar--logo'>
				<img
					src='/logo-black.png'
					height={45.6}
					width={40}
					alt='Software Development'
				/>
				<h3 className='open-sans-light'>FadoniTech</h3>
			</div>
		</Link>

		<div className='blogNavbar--links'>
			<ul>
				<li>
					<Link href='/about-us'>About Us</Link>
				</li>
				{/* <li>
          <Link href="/blog">
            Blog
          </Link>
        </li> */}
			</ul>

			<Link href='/get-invited'>
				<button className='navbar--cta'>GET YOUR INVITATION</button>
			</Link>
		</div>
	</div>
);

const BlogMobilebNavbar = () => {
	const [btnActive, setBtnActive] = useState(false);

	const onClick = () => {
		setBtnActive(!btnActive);
	};

	return (
		<>
			<div className={`navbar-mobile__bg-${btnActive ? 'show' : 'hide'}`}>
				<Link href='/'>
					<img
						src='/logo-black.png'
						height={65.6}
						width={63}
						alt='Software Development'
						style={{
							marginTop: '1rem',
						}}
					/>
				</Link>
			</div>

			<button
				className={`
          navbar-mobile--hamburger hamburger hamburger--collapse ${
						btnActive && 'is-active'
					}
        `}
				onClick={onClick}
				type='button'
			>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>

			<div
				className={`navbar-mobile__links-${btnActive ? 'show' : 'hide'} adam`}
			>
				<Link href='/'>
					<img src='/logo-white.png' alt='Tech Partnership' />
				</Link>
				<ul>
					<li className='open-sans-light'>
						<Link href='/about-us' onClick={onClick}>
							About Us
						</Link>
					</li>
				</ul>
				<Link href='/get-invited' onClick={onClick}>
					<button className='navbar--cta'>GET YOUR INVITATION</button>
				</Link>
			</div>
		</>
	);
};

const BlogNavbar = () => {
	const [isPhone, setIsPhone] = useState(false);

	const validateScreen = () => {
		setIsPhone(window.innerWidth <= 500);
	};

	useEffect(() => {
		setIsPhone(window.innerWidth <= 500);
		const resizeEvent = window.addEventListener('resize', validateScreen);
		return window.removeEventListener('resize', resizeEvent);
	}, []);

	return isPhone ? <BlogMobilebNavbar /> : <BlogWebNavbar />;
};

export default BlogNavbar;
