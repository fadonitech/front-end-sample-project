import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>FadoniTech | Contact Us</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Contact us, and start taking advantage of our subscription-based software solutions!!!" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <ContactUs />
      </body>
      <Footer />
    </div>
  )
}

export default Home;
