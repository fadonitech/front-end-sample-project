import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

export default function Chair(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();

	// useFrame((state, delta) => (mesh.current.rotation.y -= 0.01));

	// Return view, these are regular three.js elements expressed in JSX
	const group = useRef();

	const { nodes, materials } = useGLTF('/chair.glb');

	const denimMap = useTexture({
		map: './image/textures/denim.jpg',
	});

	const woodMap = useTexture({
		map: './image/textures/wood.jpg',
	});

	const vintageFloralMap = useTexture({
		map: './image/textures/vintage_floral.jpg',
	});

	const vintageArtworkMap = useTexture({
		map: './image/textures/vintage_artwork.jpg',
	});

	return (
		<group ref={group} ref={mesh} dispose={null}>
			<group name='Scene'>
				<mesh
					name='legs'
					castShadow
					receiveShadow
					geometry={nodes.legs.geometry}
					material={nodes.legs.material}
					rotation={[Math.PI, Math.PI * 1.25, Math.PI]}
					scale={[0.2, 0.2, 0.2]}
					userData={{ name: 'legs' }}
				>
					{typeof props.legsColor !== 'string' ? (
						<meshPhongMaterial
							{...(props.legsColor.name === 'wood' ? woodMap : [])}
						/>
					) : (
						<meshStandardMaterial color={props.legsColor} />
					)}
				</mesh>
				<mesh
					name='cushions'
					castShadow
					receiveShadow
					geometry={nodes.cushions.geometry}
					material={materials.wire_196010216}
					rotation={[Math.PI, Math.PI * 1.25, Math.PI]}
					scale={[0.2, 0.2, 0.2]}
					userData={{ name: 'cushions' }}
				>
					{typeof props.cushionsColor !== 'string' ? (
						<meshPhongMaterial
							{...(props.cushionsColor.name === 'denim'
								? denimMap
								: props.cushionsColor.name === 'vintage_floral'
								? vintageFloralMap
								: props.cushionsColor.name === 'vintage_artwork'
								? vintageArtworkMap
								: [])}
						/>
					) : (
						<meshStandardMaterial color={props.cushionsColor} />
					)}
				</mesh>
				<mesh
					name='back'
					castShadow
					receiveShadow
					geometry={nodes.back.geometry}
					material={nodes.back.material}
					rotation={[Math.PI, Math.PI * 1.25, Math.PI]}
					scale={[0.2, 0.2, 0.2]}
					userData={{ name: 'back' }}
				>
					{typeof props.backColor !== 'string' ? (
						<meshPhongMaterial
							{...(props.backColor.name === 'wood' ? woodMap : [])}
						/>
					) : (
						<meshStandardMaterial color={props.backColor} />
					)}
				</mesh>
				<mesh
					name='supports'
					castShadow
					receiveShadow
					geometry={nodes.supports.geometry}
					material={nodes.supports.material}
					rotation={[Math.PI, Math.PI * 1.25, Math.PI]}
					scale={[0.2, 0.2, 0.2]}
					userData={{ name: 'supports' }}
				>
					{typeof props.supportsColor !== 'string' ? (
						<meshPhongMaterial
							{...(props.supportsColor.name === 'wood' ? woodMap : [])}
						/>
					) : (
						<meshStandardMaterial color={props.supportsColor} />
					)}
				</mesh>
				<mesh
					name='base'
					castShadow
					receiveShadow
					geometry={nodes.base.geometry}
					material={nodes.base.material}
					rotation={[Math.PI, Math.PI * 1.25, Math.PI]}
					scale={[0.2, 0.2, 0.2]}
					userData={{ name: 'base' }}
				>
					{typeof props.baseColor !== 'string' ? (
						<meshPhongMaterial
							{...(props.baseColor.name === 'wood' ? woodMap : [])}
						/>
					) : (
						<meshStandardMaterial color={props.baseColor} />
					)}
				</mesh>
			</group>
		</group>
	);
}

useGLTF.preload('/chair.glb');
