import Head from 'next/head';

import Navbar from '../../components/Navbar/Navbar';
import Plans from '../../components/Price/Price';
import Footer from '../../components/Footer/Footer';

const Price = () => (
  <div className="price-page">
    <Head>
      <title>FadoniTech | Price</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="description" content="Monthly Partnership allows a full senior dev team to grow your business beyond limits!" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <main>
      <Navbar />
      <div className="price-page__content">
        <Plans />
        <Footer />
      </div>
    </main>
  </div>
)

export default Price;
