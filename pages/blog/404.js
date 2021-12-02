import Head from 'next/head'
import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';

const Unavailable = () => {
  return (
    <div>
      <Head>
        <title>FadoniTech | Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="description" content="Weekly content about technology and innovation for businesses in different industries!" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className='blog-page--loading'>
          <h2 className='source-sans-light title-6'>
            Ups! This post is unavailable.
          </h2>
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default Unavailable;
