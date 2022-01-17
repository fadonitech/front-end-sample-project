import { useState, useEffect } from 'react';

import BlogMobilebNavbar from './BlogMobilebNavbar/BlogMobilebNavbar';
import BlogWebNavbar from './BlogWebNavbar/BlogWebNavbar';

const BlogNavbar = () => {
	const resolution = 630;
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
