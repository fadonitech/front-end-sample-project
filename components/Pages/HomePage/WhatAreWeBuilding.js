import { DefaultBtn } from '../../Buttons/Buttons';

const WhatAreWeBuilding = () => {


  return (
    <div className="homepage--section homepage__what">
      <div className="homepage__what--title margin-bottom-2">
        <h1 className="source-sans-semibold title-4">
          What We Do?
        </h1>
        <div className="line" />
        <h3 className="source-sans-light title-2">
          We created a vast library of fully customizable 3D Models for e-commerce stores to use in Augmented Reality
        </h3>
      </div>
      <iframe
        className="homepage__what--video"
        src="https://player.vimeo.com/video/601889045?h=ee8ee0ec66"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <DefaultBtn content='SUBSCRIBE NOW' />
    </div>
  )
}

export default WhatAreWeBuilding;
