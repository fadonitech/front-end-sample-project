import StandardBtn from '../../Buttons/StandardBtn';

const WhatWeDoCard = ({
  title,
  examples
}) => {
  const renderExamples = examples.map((example, index) => (
    <h2 className="open-sans" key={`${example}-${index}`}>
      {example}
    </h2>
  ))

  return (
    <div className="what-we-do__card">
      <div className="what-we-do__card-1">
        <h1 className="adam">
          {title}
        </h1>
      </div>
      <div className="what-we-do__card-2">
        {renderExamples}
      </div>
    </div>
  )
};

const WhatWedo = () => {
  return (
    <div className="what-we-do">
      <div className="what-we-do__header">
        <h1 className="adam">
          WHAT WE CAN DO
        </h1>
        <h2 className="open-sans">
          We create high quality products wherever we go,
          does not matter if it is a small or large project
        </h2>
      </div>
      <div className="what-we-do__content">
        <WhatWeDoCard 
          title="Web Development"
          examples={[
            'Shopify Themes/Stores',
            'Single/Multi Page Apps',
            'CMS Development',
            'Web Portals & Apps',
            'Booking Systems'
          ]}
        />
        <WhatWeDoCard 
          title="Mobile Development"
          examples={[
            'Mobile Games',
            'E-commerce Stores',
            'Delivery Apps',
            'Single/Multi Page Apps',
            'Booking Systems'
          ]}
        />
        <WhatWeDoCard 
          title="API Development"
          examples={[
            'API Integration',
            'Custom API Integration',
            'Public APIs'
          ]}
        />
      </div>
      <StandardBtn 
        title="LEARN MORE"
        url="/our-services"
      />
    </div>
  )
}

export default WhatWedo;