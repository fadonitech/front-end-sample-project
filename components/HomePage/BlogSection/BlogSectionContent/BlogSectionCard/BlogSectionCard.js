import Link from 'next/link';

const BlogSectionCard = ({
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

export default BlogSectionCard;
