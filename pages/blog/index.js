import { createContext } from 'react';
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
      </Head>
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage;
