import BlogSectionCard from './BlogSectionCard/BlogSectionCard';

const BlogSectionContent = ({ articles }) => (
  <div className="news">
    <BlogSectionCard
      id={articles[0].id}
      imageSrc={articles[0].imgSrc}
      title={articles[0].title}
    />
    <BlogSectionCard
      id={articles[1].id}
      imageSrc={articles[1].imgSrc}
      title={articles[1].title}
    />
    <BlogSectionCard
      id={articles[2].id}
      imageSrc={articles[2].imgSrc}
      title={articles[2].title}
    />
  </div>
)

export default BlogSectionContent;