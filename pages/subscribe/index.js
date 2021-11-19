import Head from 'next/head';
import { createContext } from 'react';
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

				{/* <meta http-equiv="refresh" content={`5;url="https://www.fadonitech.com/`} /> */}
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
				></link>
				<link
					rel='stylesheet'
					href='https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css'
				></link>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
					}}
				/>
			</Head>
			<main>
				{alert.isOpen && <Alert />}
				<Navbar />
				<GetInvitedSection handleAlert={handleAlert} />
			</main>
			<Footer />
		</div>
	);
};

export default GetInvited;
