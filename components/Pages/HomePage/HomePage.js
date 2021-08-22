import { DefaultBtn } from '../../Buttons/Buttons';

import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import WhoWeAre from './WhoWeAre';
import WhyUs from './WhyUs';

export const HomePage = ({ onClick }) => (
  <div className="homepage">
    <div className="homepage__title padding-left-10">
      <div className="margin-bottom-8">
        <h1 className="source-sans-semibold title-8">
          OOPS!
        </h1>
        <h1 className="source-sans-semibold title-6 margin-bottom-2">
          You Caught Us Early!
        </h1>
        <h2 className="open-sans-light subtitle-2">
          WE ARE MAKING AUGMENTED REALITY EASY WITH READY-TO-USE TEMPLATES!
        </h2>
      </div>
      <div className="homepage__container--btn">
        <DefaultBtn content="JOIN WAITING LIST" onClick={onClick} />
      </div>
    </div>
    <div className="homepage--section homepage__what">
      <div className="homepage__what--title margin-bottom-2">
        <h1 className="source-sans-semibold title-4">
          What Are We Building?
        </h1>
        <div className="line" />
        <h3 className="source-sans-light title-2">
          We are creating a vast library of read-to-use 3D Templates for e-commerce stores
        </h3>

        {/* VIDEO */}
      </div>
    </div>

    <AboutUs />
    <HowItWorks />
    <WhyUs />
    <WhoWeAre />
  </div>
)