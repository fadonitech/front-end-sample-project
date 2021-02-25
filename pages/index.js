import { useEffect, useState } from 'react';
import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/HomePage/Header';
import Credibility from '../components/HomePage/Credibility';
import SubscriptionPlan from '../components/HomePage/SubscriptionPlan';
import Benefits from '../components/HomePage/Benefits';
import Plans from '../components/HomePage/Plans/Plans';
import Guarantee from '../components/HomePage/Guarantee';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const Warning = () => (
  <div id="warning">
    <h1 className="adam">
      Sorry! We are working on the mobile version yet!
    </h1>
  </div>
)

const HomePage = () => (
  <>
    <Navbar />
    <Header />
    <Credibility />
    <SubscriptionPlan />
    <Benefits />
    <Plans />
    <Guarantee />
    <ContactUs />
  </>
)

const Home = () => {
  const [block, setBlock] = useState(false);

  useEffect(() => {
    setBlock(window.innerWidth < 1100);

    const resizeEvent = window.addEventListener('resize', () => {
      console.log("works")
      setBlock(window.innerWidth < 1100);
    });

    return window.removeEventListener('resize', resizeEvent);
  }, []);

  return (
    <div>
      <Head>
        <title>FadoniTech</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        {block ? <Warning /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

export default Home;
