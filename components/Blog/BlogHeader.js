import Link from 'next/link';

const BlogHeader = ({
  article
}) => (
  <Link href={`/blog/${article.title.split(' ').join('-')}-${article.id}`}>
    <div className="blog-header">
      <img src={article.image} alt="Software Development" />
      <div>
        <h3 className="open-sans">
          {article.date}
        </h3>
        <h1 className="open-sans">
          {article.title}
        </h1>
        <p className="open-sans">
          {article.description}
        </p>
      </div>
    </div>
  </Link>
)

export default BlogHeader;
