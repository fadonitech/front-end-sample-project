import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { DefaultBtn } from '../../Buttons/Buttons';

import DraggableChair from './DraggableChair';

const Header = () => {
	const [selectedPart, setSelectedPart] = useState('legs');
	// const [chairColor, setChairColor] = useState([]);
	const [legsColor, setLegsColor] = useState('#fff');
	const [cushionsColor, setCushionsColor] = useState('#fff');
	const [supportsColor, setSupportsColor] = useState('#fff');
	// const [backColor, setBackColor] = useState('#fff');
	// const [baseColor, setBaseColor] = useState('#fff');

	const handleColorChange = (selectedPart, color) => {
		if (selectedPart === 'legs') {
			setLegsColor(color);
		} else if (selectedPart === 'cushions') {
			setCushionsColor(color);
		} else if (selectedPart === 'supports') {
			setSupportsColor(color);
		}
		// else if (selectedPart === 'back') {
		// 	setBackColor(color);
		// }
		// else if (selectedPart === 'base') {
		// 	setBaseColor(color);
		// }

		// setChairColor([
		// 	...chairColor,
		// 	{
		// 		name: selectedPart,
		// 		color: color,
		// 	},
		// ]);
	};

	return (
		<div className='homepage__container' style={{ display: 'flex' }}>
			<div className='container__left'>
				<div className='homepage__title padding-left-10'>
					<div className='margin-bottom-8'>
						<h1 className='source-sans-semibold title-8 '>OOPS,</h1>
						<h1 className='source-sans-semibold title-6 margin-bottom-2'>
							You Caught Us Early!
						</h1>
						<h2 className='open-sans-light subtitle-2'>
							READY-TO-USE AUGMENTD REALITY TEMPLATES FOR E-COMMERCES!
						</h2>
					</div>
					<div className='homepage__container--btn'>
						<DefaultBtn content='GET YOUR INVITATION' />
					</div>
				</div>
			</div>
			<div
				className='container__right'
				style={{
					display: 'flex',
					marginTop: '16px',
					width: '40%',
					height: '90vh',
					justifyContent: 'center',
					alignItems: 'center',
					paddingLeft: '2%',
				}}
			>
				<div>
					<div
						style={{ marginBottom: '8px' }}
						onClick={() => setSelectedPart('legs')}
					>
						<img
							style={{
								border: selectedPart === 'legs' ? '1px solid blue' : '0px',
								cursor: 'pointer',
								width: '50px',
								height: '50px',
								padding: '2px',
							}}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/legs.svg'
							alt='chair-legs'
							className='chair-part-image'
						/>
					</div>
					<div
						style={{ marginBottom: '8px' }}
						onClick={() => setSelectedPart('cushions')}
					>
						<img
							style={{
								border: selectedPart === 'cushions' ? '1px solid blue' : '0px',
								cursor: 'pointer',
								width: '50px',
								height: '50px',
								padding: '2px',
							}}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/cushions.svg'
							alt='chair-cushions'
							className='chair-part-image'
						/>
					</div>
					<div
						style={{ marginBottom: '8px' }}
						onClick={() => setSelectedPart('supports')}
					>
						<img
							style={{
								border: selectedPart === 'supports' ? '1px solid blue' : '0px',
								cursor: 'pointer',
								width: '50px',
								height: '50px',
								padding: '2px',
							}}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/supports.svg'
							alt='chair-supports'
							className='chair-part-image'
						/>
					</div>
					{/* <div onClick={() => setSelectedPart('base')}>
						<img
							style={{
								border: selectedPart === 'base' ? '1px solid blue' : '0px',
								cursor: 'pointer',
								width: '50px',
							}}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/base.svg'
							alt='chair-base'
							className='chair-part-image'
						/>
					</div> */}
					{/* <div onClick={() => setSelectedPart('back')}>
						<img
							style={{
								border: selectedPart === 'back' ? '1px solid blue' : '0px',
								cursor: 'pointer',
								width: '50px',
							}}
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/back.svg'
							alt='chair-back'
							className='chair-part-image'
						/>
					</div> */}
				</div>
				<Canvas>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Suspense fallback={null}>
						<DraggableChair
							legsColor={legsColor}
							cushionsColor={cushionsColor}
							supportsColor={supportsColor}
							// backColor={backColor}
							// baseColor={baseColor}
						/>
					</Suspense>
				</Canvas>
				<div className='colorpicker-container'>
					<div
						className='grey-div'
						style={{
							backgroundColor: '#525252',
							width: '32px',
							height: '32px',
							marginBottom: '8px',
							cursor: 'pointer',
						}}
						onClick={() => handleColorChange(selectedPart, '#525252')}
					></div>
					<div
						className='red-div'
						style={{
							backgroundColor: '#C22727',
							width: '32px',
							height: '32px',
							marginBottom: '8px',
							cursor: 'pointer',
						}}
						onClick={() => handleColorChange(selectedPart, '#C22727')}
					></div>
					<div
						className='green-div'
						style={{
							backgroundColor: '#42AD87',
							width: '32px',
							height: '32px',
							marginBottom: '8px',
							cursor: 'pointer',
						}}
						onClick={() => handleColorChange(selectedPart, '#42AD87')}
					></div>
					<div
						className='blue-div'
						style={{
							backgroundColor: '#4A90E2',
							width: '32px',
							height: '32px',
							marginBottom: '8px',
							cursor: 'pointer',
						}}
						onClick={() => handleColorChange(selectedPart, '#4A90E2')}
					></div>
					<div
						className='yellow-div'
						style={{
							backgroundColor: '#C5BE26',
							width: '32px',
							height: '32px',
							marginBottom: '8px',
							cursor: 'pointer',
						}}
						onClick={() => handleColorChange(selectedPart, '#C5BE26')}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
// with READY-TO-USE TEMPLATES
