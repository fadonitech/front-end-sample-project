import { useState, useEffect } from 'react';
import CtaBtn from '../../Buttons/CtaBtn';

const ServiceTag = ({ title, style }) => (
  <div className={`${style}__tag-item`}>
    <h3 className="open-sans">{title}</h3>
  </div>
)

const ServiceWebDev = ({ service }) => {
  const [phone, setPhone] = useState(false);
  const [tablet, setTablet] = useState(false);
  const { color, title, paragraph, webTags } = service;
  const style = `service-section-${color}`;
  let exampleRow = [];


  const validateScreen = () => {
    setPhone(window.innerWidth <= 600);
    setTablet(window.innerWidth <= 900 && window.innerWidth > 600);
  }

  useEffect(() => {
    setPhone(window.innerWidth <= 600);
    setTablet(window.innerWidth <= 900 && window.innerWidth > 600);
    const resizeEvent = window.addEventListener('resize', validateScreen);
    return window.removeEventListener('resize', resizeEvent)
  }, []);

  const renderWebTags = webTags.map((tag, index) => {
    const number = index + 1;
    const screen = tablet ? 3 : phone ? 2 : 4;

    exampleRow.push(
      <ServiceTag
        title={tag}
        style={style}
      />
    );

    if (
      number % screen === 0 ||
      (index + 1 > screen && index === webTags.length - 1) ||
      (webTags.length < screen && index === webTags.length - 1)
    ) {
      const tags = exampleRow;
      exampleRow = [];

      return (
        <div
          key={`${tag}-${index}`}
          className={`${style}__tag-row`}
        >
          {tags}
        </div>
      )
    }
  }).filter(row => row !== undefined);

  return (
    <div className={style}>
      <h1 className="open-sans title">
        {title}
      </h1>
      <p className="open-sans paragraph">
        {paragraph}
      </p>
      <h2 className="open-sans example">
        Examples:
      </h2>
      <div className={`${style}__tag`}>
        {renderWebTags}
      </div>
      <div className={`${style}__btn-container`}>
        <CtaBtn />
      </div>
    </div>
  )
}

export default ServiceWebDev;