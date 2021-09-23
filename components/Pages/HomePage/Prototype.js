import React, { useState, Suspense, useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';

import DraggableChair from './DraggableChair';
import ChairOptions from './ChairOptions';
import ColorOptions from './ColorOptions';

const Prototype = () => {
  const ref = useRef();
  const [selectedPart, setSelectedPart] = useState('legs');
  const [legsColor, setLegsColor] = useState('#fff');
  const [cushionsColor, setCushionsColor] = useState('#fff');
  const [supportsColor, setSupportsColor] = useState('#fff');
  const [backColor, setBackColor] = useState('#fff');
  const [baseColor, setBaseColor] = useState('#fff');

  const handleColorChange = (selectedPart, color) => {
    switch (selectedPart) {
      case 'legs':
        setLegsColor(color);
        break;
      case 'cushions':
        setCushionsColor(color);
        break;
      case 'supports':
        setSupportsColor(color);
        break;
      case 'back':
        setBackColor(color);
        break;
      case 'base':
        setBaseColor(color);
        break;
    }
  };

  return (
    <div
      className='container__right'
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ChairOptions
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
      />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50 }}
        frameloop="demand"
        performance={{
          current: 1,
          min: 0.1,
          max: 1,
          debounce: 200,
        }}
      >
        <Suspense
          fallback={null}
        >
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment="city"
          >
            <DraggableChair
              legsColor={legsColor}
              cushionsColor={cushionsColor}
              supportsColor={supportsColor}
              backColor={backColor}
              baseColor={baseColor}
            />
          </Stage>
        </Suspense>
        <OrbitControls
          ref={ref}
          autoRotate
        />
      </Canvas>
      <ColorOptions
        selectedPart={selectedPart}
        handleColorChange={handleColorChange}
      />
    </div>
  )
}

export default Prototype;

// PAST CANVAS

/* <Canvas
  frameloop="demand"
  performance={{
    current: 1,
    min: 0.1,
    max: 1,
    debounce: 200,
  }}
>
  <ambientLight />
  <pointLight position={[10, 10, 10]} />
  <Suspense fallback={null}>
    <DraggableChair
      legsColor={legsColor}
      cushionsColor={cushionsColor}
      supportsColor={supportsColor}
      backColor={backColor}
      baseColor={baseColor}
    />
  </Suspense>
</Canvas> */