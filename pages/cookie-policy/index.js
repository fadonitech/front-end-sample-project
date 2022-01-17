import Head from 'next/head'
import Link from 'next/link';

import { useEffect } from 'react';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';
import { gaLicense } from '../../lib/ga/events';


const Home = () => {
  useEffect(() => {
    gaLicense();
  }, []);

  return (
    <div>
      <Head>
        <title>FadoniTech</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates" />
        <meta property="og:title" content="FadoniTech" key="ogtitle" />
        <meta property="og:description" content="Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates" key="ogdesc" />
        <meta property="og:url" content="https://www.fadonitech.com/" key="ogurl" />
        <meta property="og:image" content='/image/social-media-banner.png' key="ogimage" />
        <meta property="og:site_name" content="FadoniTech" key="ogsitename" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
      </Head>
      <main>
        <Navbar />
        <div className="license">
          <h2>Cookie Policy</h2>

          <p>
            Cookies, clear gifs and similar technologies (cookies) are used on our sites to personalise content and ads, provide and improve product features and to analyse our traffic on our sites by FadoniTech, our business partners and authors. As a part of our commitment to upholding a high standard of transparency with our users, we’ve created this guide to explain the tracking technologies we use on our sites.
          </p>
          <p>
            This explanation applies to all of the sites we operate including: fadonitech.com.
          </p>

          <h3>
            What are cookies, clear gifs and similar technologies ?
          </h3>

          <p>
            Cookies are a small data file sent to your web browser or mobile device that is stored on your browser cache.
          </p>
          <p>
            Clear gifs and pixel trackers are tiny graphics with a unique identifier and are similar in function to cookies, and are used to track the movements of web users between pages and websites.They are embedded invisibly on web pages and are about the size of a single pixel.
          </p>
          <p>
            First - party cookies are set by us when you’re visiting one of our sites, and third - party cookies are set by a party other than the website you're visiting.
          </p>

          <h3>
            Cookies and similar technologies are used for the following purposes on the FadoniTech sites
          </h3>
          <p>
            Strictly Necessary: Strictly necessary cookies help make a website usable by enabling basic functions like page navigation, website security and access to information that requires authentication.
          </p>
          <p>
            Preferences: These cookies enable storage of information that changes the way a website behaves or looks, like settings for your region.
          </p>
          <p>
            Statistics: Statistics cookies help us to understand how visitors interact with our websites by collecting and reporting information.
          </p>
          <p>
            Marketing: Marketing cookies are used for tracking browsing activity and to customise and display ads that are relevant and engaging.
          </p>
          <p>
            Third Parties: Our business partners and authors use cookies for the purposes described above.
          </p>

          <h3>
            How to manage your preferences and settings
          </h3>

          <p>
            Please keep in mind that your experience may not be as we intended if you change the standard settings.

          </p>
          <p>
            Visitors located in the European Union can select their preferences with the preferences panel, and can change their preferences by clearing their cookies, refreshing the page, and selecting their preferences again.

          </p>
          <p>
            Any interested visitor can learn how to opt out of third party cookies by consulting <Link href="https://optout.networkadvertising.org/?c=1">this page</Link>, or learn how to change your browser settings:
            <ol>
              <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Firefox</Link></li>
              <li><Link href="https://support.google.com/chrome/answer/95647?hl=en">Chrome</Link></li>
              <li><Link href="https://support.apple.com/en-us/HT201265">Safari</Link></li>
            </ol>
          </p>

          <h3>
            Contact, questions and changes
          </h3>

          <p>
            We may make changes to the Cookie Policy from time to time and we will take reasonable steps to let our users know about these changes.You can keep track of changes made by referring to the date below.
          </p>

          <p>
            If you have any questions about our privacy practices, or about how to change your cookie preferences,
            please contact our privacy champion at <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>. You can also write to us at Comendador Jose Garcia 27 –
            Sala 1104 / Pouso Alegre MG, Brazil (37550-007).
          </p>

          <p>
            Updated 11 Oct 2021.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
