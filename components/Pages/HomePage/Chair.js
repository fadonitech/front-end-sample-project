import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Chair(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();

	// useFrame((state, delta) => (mesh.current.rotation.y -= 0.01));

	// Return view, these are regular three.js elements expressed in JSX
	const group = useRef();

	const { nodes, materials } = useGLTF('/chair.glb');

	return (
		<group ref={group} ref={mesh} dispose={null}>
			<group name='Scene'>
				<mesh
					name='legs'
					castShadow
					receiveShadow
					geometry={nodes.legs.geometry}
					material={nodes.legs.material}
					material-color={props.legsColor}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.25, 0.25, 0.25]}
				/>
				<mesh
					name='cushions'
					castShadow
					receiveShadow
					geometry={nodes.cushions.geometry}
					material={materials.wire_196010216}
					material-color={props.cushionsColor}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.25, 0.25, 0.25]}
				/>
				<mesh
					name='back'
					castShadow
					receiveShadow
					geometry={nodes.back.geometry}
					material={nodes.back.material}
					material-color={props.backColor}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.25, 0.25, 0.25]}
				/>
				<mesh
					name='supports'
					castShadow
					receiveShadow
					geometry={nodes.supports.geometry}
					material={nodes.supports.material}
					material-color={props.supportsColor}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.25, 0.25, 0.25]}
				/>
				<mesh
					name='base'
					castShadow
					receiveShadow
					geometry={nodes.base.geometry}
					material={nodes.base.material}
					material-color={props.baseColor}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={[0.25, 0.25, 0.25]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/chair.glb');
