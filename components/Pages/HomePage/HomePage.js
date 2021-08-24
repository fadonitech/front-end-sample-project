import Header from './Header';
import WhatAreWeBuilding from './WhatAreWeBuilding';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import WhoWeAre from './WhoWeAre';
import WhyUs from './WhyUs';

export const HomePage = ({ onClick }) => (
  <div className="homepage">
    <Header onClick={onClick} />
    {/* <WhatAreWeBuilding /> */}
    <AboutUs />
    <HowItWorks />
    <WhyUs />
    <WhoWeAre />
  </div>
)
