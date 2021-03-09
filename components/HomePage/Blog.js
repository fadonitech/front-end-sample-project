import StandardBtn from '../Buttons/StandardBtn';

const BlogCard = ({
  imageSrc,
  title
}) => (
  <div className="blog-card">
    <img src={imageSrc} />
    <div className="blog-card__content">
      <h2 className="open-sans">
        {title}
      </h2>
    </div>
  </div>
)

const Blog = () => (
  <div id="blog-section">
    <h1 className="adam">
      OUR BLOG
    </h1>
    <div className="news">
      <BlogCard
        imageSrc="./blog-post-example.png"
        title="PWA: Advantages And Disadvantages"
      />
      <BlogCard
        imageSrc="./blog-post-example.png"
        title="PWA: Advantages And Disadvantages"
      />
      <BlogCard
        imageSrc="./blog-post-example.png"
        title="PWA: Advantages And Disadvantages"
      />
    </div>
    <StandardBtn title="READ MORE" />
  </div>
)

export default Blog;
