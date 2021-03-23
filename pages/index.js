import { createContext } from 'react';
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

export const ArticlesContext = createContext({});

const HomePage = () => (
  <>
    <Navbar />
    <Header />
    <Credibility />
    <SubscriptionPlan />
    <Benefits />
    <Guarantee />
    <Plans />
    <Blog />
    <ContactUs />
  </>
)

const Home = ({ articles }) => (
  <div>
    <Head>
      <title>FadoniTech</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="A fast, reliable and flexible subscription-based Software Development service for Businesses!" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <main>
      <ArticlesContext.Provider value={articles}>
        <HomePage />
      </ArticlesContext.Provider>
    </main>
    <Footer />
  </div>
)

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/data/articles.json");
  const data = await req.json();

  return {
    props: {
      ...data
    }
  }
}

export default Home;
