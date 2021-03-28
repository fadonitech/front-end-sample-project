import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const UnderConstruction = () => (
  <div className="under-construction">
    <Navbar />

    <div className="under-construction__content">
      <h1 className="open-sans under-construction__title">
        Ups! This Page Is Under Construction!!!
      </h1>
      <img id="under-construction-img" alt="Software Development" src='/svg/404.svg' />
    </div>
    <Footer />
  </div>
)

export default UnderConstruction;
