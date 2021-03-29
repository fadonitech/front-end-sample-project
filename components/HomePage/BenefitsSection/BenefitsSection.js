import BenefitsImage from './BenefitsImage/BenefitsImage';
import BenefitsContainer from './BenefitsContainer/BenefitsContainer';
import CtaBtn from '../../Buttons/CtaBtn';

const BenefitsSection = () => (
  <div id="benefits" className="benefits" >
    <h1 className="adam">
      DON'T GET STUCK WITH A BAD TEAM
    </h1>
    <h1 className="adam bold">
      SAVE RESOURCES
    </h1>
    <BenefitsImage />
    <BenefitsContainer />
    <CtaBtn />
  </div>
)

export default BenefitsSection;
