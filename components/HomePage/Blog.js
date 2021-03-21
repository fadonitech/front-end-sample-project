import { useContext } from 'react';
import Link from 'next/link';

import StandardBtn from '../Buttons/StandardBtn';
import { ArticlesContext } from '../../pages/index';

const BlogCard = ({
  id,
  imageSrc,
  title
}) => (
  <Link href={`/blog/${id}`}>
    <div className="blog-card">
      <img src={imageSrc} />
      <div className="blog-card__content">
        <h2 className="open-sans">
          {title}
        </h2>
      </div>
    </div>
  </Link>
)

const Blog = () => {
  const articles = useContext(ArticlesContext);

  return (
    <div id="blog-section">
      <h1 className="adam">
        OUR BLOG
    </h1>
      <div className="news">
        <BlogCard
          id={articles[0].id}
          imageSrc={articles[0].imgSrc}
          title={articles[0].title}
        />
        <BlogCard
          id={articles[1].id}
          imageSrc={articles[1].imgSrc}
          title={articles[1].title}
        />
        <BlogCard
          id={articles[2].id}
          imageSrc={articles[2].imgSrc}
          title={articles[2].title}
        />
      </div>
      <StandardBtn
        title="READ MORE"
        url="/blog"
      />
    </div>
  )
}

export default Blog;
