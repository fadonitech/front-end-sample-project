import { useEffect } from 'react';
import { gaHomePage } from '../../../lib/ga/events';

import Header from './Header';
import WhatAreWeBuilding from './WhatAreWeBuilding';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import WhoWeAre from './WhoWeAre';
import WhyUs from './WhyUs';

export const HomePage = () => (
  <div className="homepage">
    <Header />
    <WhatAreWeBuilding />
    <AboutUs />
    <HowItWorks />
  </div>
)