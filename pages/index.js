import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/HomePage/Header';
import Credibility from '../components/HomePage/Credibility';
import SubscriptionPlan from '../components/HomePage/SubscriptionPlan';
import Benefits from '../components/HomePage/Benefits';
import Plans from '../components/HomePage/Plans/Plans';
import Blog from '../components/HomePage/Blog';
import Guarantee from '../components/HomePage/Guarantee';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const HomePage = () => (
  <>
    <Navbar />
    <Header />
    <Credibility />
    <SubscriptionPlan />
    <Benefits />
    <Plans />
    <Blog />
    <Guarantee />
    <ContactUs />
  </>
)

const Home = () => (
  <div>
    <Head>
      <title>FadoniTech</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <main>
      <HomePage />
    </main>
    <Footer />
  </div>
)

export default Home;
