import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Article = ({ id, title, date, imgSrc, content }) => {
  const router = useRouter();
  const article = router.query;

  return (
    <div>
      <Navbar />
      <div className="blogArticlePage">
        <div className="blogArticlePage__content">
          <div className="blogArticlePage__headline">
            <h1 className="open-sans">
              {title}
            </h1>
            <h2 className="open-sans">
              {date}
            </h2>
          </div>
          <div className="blogArticlePage__text">
            <img src={imgSrc} alt="Software Development" />
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }) {
  // const req = await fetch(`http://localhost:3000/data/${params.article}.json`);
  const req = await fetch(`https://development.d3b0ch60bihnpd.amplifyapp.com/data/${params.article}.json`);
  const data = await req.json();

  return {
    props: {
      ...data
    }
  }
}

export async function getStaticPaths() {
  // const req = await fetch("http://localhost:3000/data/articles.json");
  const req = await fetch("https://development.d3b0ch60bihnpd.amplifyapp.com/data/articles.json");
  const { articles } = await req.json();

  const paths = articles.map(article => ({
    params: {
      article: article.id.toString()
    }
  })
  )

  return {
    paths,
    fallback: false
  }
}


export default Article;