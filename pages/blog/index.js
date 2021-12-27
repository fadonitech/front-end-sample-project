import { createContext } from 'react';
import Script from 'next/script'
import Head from 'next/head'

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import BlogNavbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import BlogContent from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';

export const ArticlesContext = createContext({});

const Blog = () => (
  <>
    <Navbar />
    <BlogContent />
  </>
)

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>FadoniTech | Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="description" content="Weekly content about technology and innovation for businesses in different industries!" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <Script
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							(function(h,o,t,j,a,r){
								h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
								h._hjSettings={hjid:2761813,hjsv:6};
								a=o.getElementsByTagName('head')[0];
								r=o.createElement('script');r.async=1;
								r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
								a.appendChild(r);
							})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
						`,
					}}
				/>
      </Head>
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage;
