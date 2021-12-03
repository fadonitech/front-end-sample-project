import { useState, useEffect } from 'react';
import { useQuery, gpl } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { client } from '../../pages/_app';

import { FIND_BLOG_POST, LIST_BLOG_POSTS } from '../../GraphQL/Queries';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';


const Article = ({
  id = '',
  title = '',
  description = '',
  author = '',
  time = 0,
  date = '',
  content = '',
  image = '',
}) => (
  <div>
    <Head>
      <title>FadoniTech | {title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
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

export async function getStaticPaths() {
  const { data } = await client.query(
    {
      query: LIST_BLOG_POSTS
    }
  )

  const paths = data.blogPosts.map(post => ({
    params: { article: `${post.title.split(' ').join('-')}-${post.id}` },
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const id = params.article.split('-').reverse()[0];

  const { data } = await client.query(
    {
      query: FIND_BLOG_POST,
      variables: {
        id: id
      }
    }
  )

  return {
    props: { ...data.findBlogPost }
  }
}
export default Article;