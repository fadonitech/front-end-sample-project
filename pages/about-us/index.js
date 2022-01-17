import { createContext } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import WhoWeAre from '../../components/Pages/HomePage/WhoWeAre';
import WhyUs from '../../components/Pages/HomePage/WhyUs';
import OurStory from '../../components/Pages/HomePage/OurStory';
import Footer from '../../components/Footer/Footer';

import { gaAboutUs } from '../../lib/ga/events';

export const SubsPlanSelected = createContext({});

const AboutUs = () => (
	<div className='about-us'>
		<WhyUs />
		<WhoWeAre />
		<OurStory />
	</div>
);

const AboutUsPage = () => {
	useEffect(() => {
		gaAboutUs();
	}, []);

	return (
		<div>
			<Head>
				<title>FadoniTech | About Us</title>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
					key='viewport'
				/>
				<meta name='robots' content='index, follow' />
				<meta
					name='description'
					content='Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates'
				/>
				<meta property='og:title' content='FadoniTech' key='ogtitle' />
				<meta
					property='og:description'
					content='Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates'
					key='ogdesc'
				/>
				<meta
					property='og:url'
					content='https://www.fadonitech.com/'
					key='ogurl'
				/>
				<meta
					property='og:image'
					content='/image/social-media-banner.png'
					key='ogimage'
				/>
				<meta property='og:site_name' content='FadoniTech' key='ogsitename' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
				></link>
				<link
					rel='stylesheet'
					href='https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css'
				></link>
			</Head>
			<main>
				<Navbar />
				<AboutUs />
			</main>
			<Footer />
		</div>
	);
};

export default AboutUsPage;
