import React, { useState, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';

import Chair from './Chair';

const DraggableChair = ({
	legsColor,
	cushionsColor,
	supportsColor,
	backColor,
	baseColor,
}) => {
	const ref = useRef();
	const [rotation, setRotation] = useState([0, 0, 0]);

	const { size, viewport } = useThree();
	const aspect = size.width / viewport.width;
	const bind = useDrag(
		({ offset: [x, y] }) => {
			const [, , z] = rotation;
			setRotation([y / aspect, x / aspect, z]);
		},
		{ pointerEvents: true }
	);

	return (
		<mesh {...bind()} ref={ref}>
			<Chair
				legsColor={legsColor}
				cushionsColor={cushionsColor}
				supportsColor={supportsColor}
				backColor={backColor}
				baseColor={baseColor}
			/>
		</mesh>
	);
};

export default DraggableChair;
