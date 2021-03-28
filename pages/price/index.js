import Navbar from '../../components/Navbar/Navbar';
import Plans from '../../components/Price/Price';
import Footer from '../../components/Footer/Footer';

const Price = () => (
  <div className="price-page">
    <Navbar />
    <div className="price-page__content">
      <Plans />
      <Footer />
    </div>
  </div>
)

export default Price;
