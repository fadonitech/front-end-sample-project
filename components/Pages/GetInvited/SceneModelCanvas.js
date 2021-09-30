import React, { useState, Suspense, useRef, useEffect } from 'react';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { LoadingAnimation } from '../../Loading/Loading';

import DraggableScene from './DraggableScene';

const SceneModelCanvas = () => {
	const ref = useRef();
	const [hovered, setHovered] = useState('auto');

	useEffect(() => {
		document.body.style.cursor = hovered;
	}, [hovered]);

	function Loader() {
		return (
			<Html center>
				<LoadingAnimation />
			</Html>
		);
	}

	return (
		<div
			className='getinvited__header__office__container'
			onPointerOver={() => setHovered('grab')}
			onPointerDown={() => setHovered('grabbing')}
			onPointerUp={() => setHovered('grab')}
			onPointerOut={() => setHovered('auto')}
		>
			<Canvas
				className='office__canvas'
				shadows
				shadowMap
				dpr={[1, 2]}
				camera={{ fov: 50, position: [0, 3, 5] }}
				frameloop='demand'
				performance={{
					current: 1,
					min: 0.1,
					max: 1,
					debounce: 200,
				}}
			>
				<Suspense fallback={<Loader />}>
					<Stage
						controls={ref}
						preset='rembrandt'
						intensity={1}
						environment='city'
					>
						<DraggableScene />
					</Stage>
				</Suspense>
				<OrbitControls
					ref={ref}
					autoRotate={false}
					enableZoom={true}
					minDistance='1'
					maxDistance='600'
					// minPolarAngle={Math.PI / 10}
					// maxPolarAngle={Math.PI / 2}
					minAzimuthAngle={-Math.PI / 2}
					maxAzimuthAngle={Math.PI / 2}
					enableDamping={true}
					dampingFactor='0.1'
					enablePan={false}
				/>
			</Canvas>
		</div>
	);
};

export default SceneModelCanvas;
