import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Head>

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
