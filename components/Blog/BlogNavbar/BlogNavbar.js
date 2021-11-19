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

const BlogMobilebNavbar = () => {
	const [btnActive, setBtnActive] = useState(false);

	const onClick = () => {
		setBtnActive(!btnActive);
	};

	return (
		<>
			<div className={`navbar-mobile__bg-${btnActive ? 'show' : 'hide'}`}>
				<Link href='/'>
					<div className="navbar-mobile__icon">
						<img
							src='/logo-white.png'
							alt='Software Development'
						/>
					</div>
				</Link>
			</div>

			<button
				className={`
          navbar-mobile--hamburger hamburger hamburger--collapse ${btnActive && 'is-active'
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
						<Link href='/' onClick={onClick}>
							Home
						</Link>
					</li>
					<li className='open-sans-light'>
						<Link href='/about-us' onClick={onClick}>
							About Us
						</Link>
					</li>
					<li className='open-sans-light'>
						<Link href='/blog' onClick={onClick}>
							Blog
						</Link>
					</li>
				</ul>
				<Link href='/subscribe' onClick={onClick}>
					<button className='navbar--cta'>SUBSCRIBE NOW</button>
				</Link>
			</div>
		</>
	);
};

const BlogNavbar = () => {
	const resolution = 600;
	const [isPhone, setIsPhone] = useState(false);

	const validateScreen = () => {
		setIsPhone(window.innerWidth <= resolution);
	};

	useEffect(() => {
		setIsPhone(window.innerWidth <= resolution);
		const resizeEvent = window.addEventListener('resize', validateScreen);
		return window.removeEventListener('resize', resizeEvent);
	}, []);

	return isPhone ? <BlogMobilebNavbar /> : <BlogWebNavbar />;
};

export default BlogNavbar;
