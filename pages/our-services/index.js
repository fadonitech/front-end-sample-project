import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';

const ServicePage = () => (
  <div>
    <Head>
      <title>FadoniTech | Service</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="description" content="Subscription-based software solutions for small and medium businesses in the US and EU" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <main>
      <Navbar />
      <Services />
      <Footer />
    </main>
  </div>
)

export default ServicePage;
