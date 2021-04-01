import CtaBtn from '../../Buttons/CtaBtn';

const ServiceHeaderText = () => (
  <div className="service-page__header-txt">
    <h1 className="open-sans">
      Our Services
    </h1>
    <h2 className="open-sans">
      We take care of every aspect of development, enabling you to focus on the growth of your organization
    </h2>
    <CtaBtn />
  </div>
);

const ServiceHeaderImg = () => (
  <div className="service-page__header-img">
    <img src='/svg/service-draw.svg' />
  </div>
)

const ServiceHeader = () => (
  <div className="service-page__header">
    <ServiceHeaderText />
    <ServiceHeaderImg />
  </div>
)

export default ServiceHeader;