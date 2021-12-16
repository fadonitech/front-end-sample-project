import Link from 'next/link';

const BlogArticle = ({
  id,
  title,
  description,
  image,
  date,
  time,
}) => (
  <Link href={`/blog/${title.split(' ').join('-')}-${id}`}>
    <div className="blogArticle">
      <img src={image} alt="FadoniTech e-commerce" />
      <div>
        <h3 className="open-sans">
          {date}
        </h3>
        <h1 className="open-sans">
          {title}
        </h1>
      </div>
    </div>
  </Link>
);

const BlogContent = ({
  articles
}) => {
  const renderArticles = articles && articles.map(article => articles[0].id !== article.id && (
    <BlogArticle
      key={article.id}
      id={article.id}
      title={article.title}
      description={article.description}
      image={article.image}
      date={article.date}
      time={article.time}
    />
  ));

  return (
    <div className="blogContent">
      {renderArticles}
    </div>
  )
}

export default BlogContent;
