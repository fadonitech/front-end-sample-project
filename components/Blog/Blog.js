import { useState, useEffect } from 'react';
import { useQuery, gpl } from '@apollo/client';
import { LIST_BLOG_POSTS } from '../../GraphQL/Queries';

import BlogHeader from './BlogHeader';
import BlogArticles from './BlogArticles';

const BlogContent = () => {
  const [articles, setArticles] = useState();
  const { error, loading, data } = useQuery(LIST_BLOG_POSTS)

  useEffect(() => {
    if (data) {
      setArticles([...data.blogPosts].reverse())
    }
  }, [data])

  return (
    <div className="blog-page">
      <div>
        <h1 id="blog-title" className="open-sans">The Blog</h1>
        {articles && <BlogHeader article={articles[0]}/>}
        {articles && <BlogArticles articles={articles}/>}
      </div>
    </div>
  )
}

export default BlogContent;
