import React, { useState, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';

import Chair from './Chair';

export default function DraggableChair(props) {
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
		<mesh rotation={rotation} {...bind()} ref={ref}>
			<Chair
				legsColor={props.legsColor}
				cushionsColor={props.cushionsColor}
				supportsColor={props.supportsColor}
				backColor={props.backColor}
				baseColor={props.baseColor}
			/>
		</mesh>
	);
}
