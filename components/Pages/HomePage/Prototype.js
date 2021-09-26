import React, { useState, Suspense, useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import DraggableChair from './DraggableChair';
import ChairOptions from './ChairOptions';
import ColorOptions from './ColorOptions';
import DragInfo from './DragInfo';

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

	function Lights() {
		return (
			<>
				<hemisphereLight
					skyColor={0xffffff}
					groundColor={0xffffff}
					intensity={0.61}
					position={[0, 50, 0]}
				/>
				<directionalLight
					color={0xffffff}
					intensity={0.54}
					position={[10, 12, 8]}
					castShadow={true}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
				/>
			</>
		);
	}

	return (
		<div className='container__right'>
			<ChairOptions
				selectedPart={selectedPart}
				setSelectedPart={setSelectedPart}
			/>
			<Canvas
				shadows
				shadowMap
				dpr={[1, 2]}
				camera={{ fov: 50 }}
				frameloop='demand'
				performance={{
					current: 1,
					min: 0.1,
					max: 1,
					debounce: 200,
				}}
			>
				{/* <Lights /> */}
				<Suspense fallback={null}>
					<Stage
						controls={ref}
						preset='rembrandt'
						intensity={1}
						environment='city'
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
					autoRotate={true}
					minDistance='5'
					maxDistance='10'
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 3}
					enableDamping={true}
					dampingFactor='0.1'
					enablePan={false}
				/>
			</Canvas>
			<ColorOptions
				selectedPart={selectedPart}
				handleColorChange={handleColorChange}
			/>
			<DragInfo />
		</div>
	);
};

export default Prototype;
