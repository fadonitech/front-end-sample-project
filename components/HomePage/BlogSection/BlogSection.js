import { useContext } from 'react';

import { ArticlesContext } from '../../../pages/index';
import BlogSectionContent from './BlogSectionContent/BlogSectionContent';
import StandardBtn from '../../Buttons/StandardBtn';

const BlogSection = () => {
  const articles = useContext(ArticlesContext);

  return (
    <div id="blog-section">
      <h1 className="adam">
        OUR BLOG
      </h1>
      <BlogSectionContent articles={articles} />
      <StandardBtn
        title="READ MORE"
        url="/blog"
      />
    </div>
  )
}

export default BlogSection;
