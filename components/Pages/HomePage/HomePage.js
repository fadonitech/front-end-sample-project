import Header from './Header';
import WhatAreWeBuilding from './WhatAreWeBuilding';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Prototype from './Prototype';

export const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <WhatAreWeBuilding />
      <AboutUs />
      <HowItWorks />
    </div>
  )
}