import Link from 'next/link';
import { useState } from 'react';

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
					<img src='/logo-white.png' alt='E-commerce' />
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
						<Link href='/subscribe' onClick={onClick}>
							Library
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

export default BlogMobilebNavbar;
