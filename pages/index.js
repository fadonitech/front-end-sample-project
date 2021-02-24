import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/HomePage/Header';
import Credibility from '../components/HomePage/Credibility';
import SubscriptionPlan from '../components/HomePage/SubscriptionPlan';
import Benefits from '../components/HomePage/Benefits';
import Plans from '../components/HomePage/Plans/Plans';
import Guarantee from '../components/HomePage/Guarantee';

const Home = () => {
  return (
    <div>
      <Head>

      </Head>
      <body>
        {/* <Navbar /> */}
        <Header />
        <Credibility />
        <SubscriptionPlan />
        <Benefits />
        <Plans />
        <Guarantee />
      </body>
    </div>
  )
}

export default Home;
