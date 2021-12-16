import { useContext } from 'react';
import Link from 'next/link';

import { ArticlesContext } from '../../pages/blog/index';

const BlogHeader = () => {
  const articles = useContext(ArticlesContext);

  return (
    <Link href={`/blog/${articles[0].id}`}>
      <div className="blog-header">
        <img src={articles[0].imgSrc} alt="Fadonitech E-commerce" />
        <div>
          <h3 className="open-sans">
            {articles[0].date}
          </h3>
          <h1 className="open-sans">
            {articles[0].title}
          </h1>
          <p className="open-sans">
            {articles[0].summary}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogHeader;
