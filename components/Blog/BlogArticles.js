import { useContext } from 'react';
import Link from 'next/link';

import { ArticlesContext } from '../../pages/blog/index';

const BlogArticle = ({ id, imgSrc, date, title }) => (
  <Link href={`/blog/${id}`}>
    <div className="blogArticle">
      <img src={imgSrc} alt="Software Development" />
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

const BlogContent = () => {
  const articles = useContext(ArticlesContext);

  const renderArticles = articles.map(article => articles[0].id !== article.id && (
    <BlogArticle
      key={article.id}
      id={article.id}
      imgSrc={article.imgSrc}
      date={article.date}
      title={article.title}
    />
  ));

  return (
    <div className="blogContent">
      {renderArticles}
    </div>
  )
}

export default BlogContent;
