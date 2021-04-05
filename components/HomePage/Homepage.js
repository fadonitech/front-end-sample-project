import Navbar from '../Navbar/Navbar';
import HeaderSection from './HeaderSection/HeaderSection';
import CredentialSection from './CredentialSection/CredentialSection';
import PlanSection from './PlanSection/PlanSection';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import GuaranteeSection from './GuaranteeSection/Guarantee';
import BlogSection from './BlogSection/BlogSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Price from '../Price/Price';
import ContactUs from '../ContactUs/ContactUs';

const HomePage = () => (
  <>
    <Navbar />
    <HeaderSection />
    <CredentialSection />
    <PlanSection />
    <BenefitsSection />
    <WhatWeDo />
    <GuaranteeSection />
    <Price />
    <BlogSection />
    <ContactUs />
  </>
)

export default HomePage;
