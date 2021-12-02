import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { client } from '../../pages/_app';

import { FIND_BLOG_POST, LIST_BLOG_POSTS } from '../../GraphQL/Queries';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';


const Article = () => {
  const route = useRouter();
  const [articles, setArticles] = useState({
    id: '',
    title: '',
    description: '',
    author: '',
    time: 0,
    date: '',
    content: '',
    image: '',
  });
  const {
    id,
    title,
    description,
    author,
    time,
    date,
    content,
    image,
  } = articles;

  const fetchData = async () => {
    const newId = route.pathname.split('-').reverse()[0];

    const { data } = await client.query(
      {
        query: FIND_BLOG_POST,
        variables: { newId }
      }
    )

    setArticles(data.findBlogPost);
  }

  useEffect(() => {
    fetchData();
  }, [articles]);

  return (
    <div>
      <Head>
        <title>FadoniTech | {title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <main>
        <Navbar />
        <div className="blogArticlePage">
          <div className="blogArticlePage__content">
            <div className="blogArticlePage__headline">
              <h1 className="open-sans">
                {title}
              </h1>
              <h2 className="open-sans">
                {date}
              </h2>
            </div>
            <div className="blogArticlePage__text">
              <img src={image} alt="Software Development" />
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Article;