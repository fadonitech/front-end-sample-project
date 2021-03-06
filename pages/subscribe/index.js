import Head from 'next/head';
import Script from 'next/script'
import { useEffect, useState } from 'react';

import { GetInvitedSection } from '../../components/Pages/Page';
import Alert from '../../components/Alert/AlertSuccess';
import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';

import { gaSignUp } from '../../lib/ga/events';

const GetInvited = () => {
	const [alert, setAlert] = useState({
		isOpen: false,
		title: '',
		message: '',
	});

	useEffect(() => {
		gaSignUp();
	}, []);

	const handleAlert = ({ title, message }) => {
		setAlert({
			isOpen: true,
			title,
			message,
		});

		setTimeout(
			() =>
				setAlert({
					...alert,
					isOpen: false,
				}),
			2600
		);
	};

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
				<Script
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							(function(h,o,t,j,a,r){
								h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
								h._hjSettings={hjid:2761813,hjsv:6};
								a=o.getElementsByTagName('head')[0];
								r=o.createElement('script');r.async=1;
								r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
								a.appendChild(r);
							})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
						`,
					}}
				/>
				{alert.isOpen && <Alert />}
				<Navbar />
				<GetInvitedSection handleAlert={handleAlert} />
			</main>
			<Footer />
		</div>
	);
};

export default GetInvited;
