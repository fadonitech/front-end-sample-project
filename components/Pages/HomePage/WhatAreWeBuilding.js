const WhatAreWeBuilding = () => {


  return (
    <div className="homepage--section homepage__what">
      <div className="homepage__what--title margin-bottom-2">
        <h1 className="source-sans-semibold title-4">
          What Are We Building?
        </h1>
        <div className="line" />
        <h3 className="source-sans-light title-2">
          We are creating a vast library of read-to-use 3D Templates for e-commerce stores
        </h3>
      </div>
      <iframe
        className="homepage__what--video"
        src="https://player.vimeo.com/video/601889045?h=ee8ee0ec66"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default WhatAreWeBuilding;
