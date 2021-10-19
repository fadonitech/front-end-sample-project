import BlogHeader from './BlogHeader';
import BlogArticles from './BlogArticles';

const BlogContent = () => {
  return (
    <div className="blog-page">
      <div>
        <h1 id="blog-title" className="open-sans">The Blog</h1>
        <BlogHeader />
        <BlogArticles />
      </div>
    </div>
  )
}

export default BlogContent;
