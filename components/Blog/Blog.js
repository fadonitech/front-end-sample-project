import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LIST_BLOG_POSTS } from '../../GraphQL/Queries';

import BlogHeader from './BlogHeader';
import BlogArticles from './BlogArticles';
import { LoadingAnimation } from '../../components/Loading/Loading';

const BlogContent = () => {
  const [articles, setArticles] = useState();
  const { error, loading, data } = useQuery(LIST_BLOG_POSTS)
  
  let renderComp = (
    <div>
      <h1 id="blog-title" className="open-sans">The Blog</h1>
      {articles && <BlogHeader article={articles[0]} />}
      {articles && <BlogArticles articles={articles} />}
    </div>
  )

  useEffect(() => {
    if (data) {
      setArticles([...data.blogPosts].reverse())
    }
  }, [data])

  if (loading) {
    renderComp = (
      <LoadingAnimation />
    )
  } else if (error) {
    renderComp = (
      <h2 className='source-sans-light title-6'>
        Ups! Your connection is unstable.
      </h2>
    )
  }

  return (
    <div className={`blog-page${loading || error ? '--loading' : ''}`}>
      {renderComp}
    </div>
  )
}

export default BlogContent;
