import Head from 'next/head'

import { useEffect } from 'react';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';
import { gaFontAttribution } from '../../lib/ga/events';


const FontAttribution = () => {
  useEffect(() => {
    gaFontAttribution();
  }, []);

  return (
    <div>
      <Head>
        <title>FadoniTech</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates" />
        <meta property="og:title" content="FadoniTech" key="ogtitle" />
        <meta property="og:description" content="Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates" key="ogdesc" />

        <meta property="og:url" content="https://www.fadonitech.com/" key="ogurl" />
        <meta property="og:image" content='/image/social-media-banner.png' key="ogimage" />
        <meta property="og:site_name" content="FadoniTech" key="ogsitename" />

        {/* <meta http-equiv="refresh" content={`5;url="https://www.fadonitech.com/`} /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
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
        <Navbar />
        <div className="license">
          <h2>FADONITECH FONT ATTRIBUTION</h2>
          <p>
            On this link (<a href="https://fonts.google.com/attribution" target="_blank">https://fonts.google.com/attribution</a>), you can see all the Google
            Fonts we may use and their licenses are listed directly next to each.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FontAttribution;
