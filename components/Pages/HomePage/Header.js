import React from 'react';

import { DefaultBtn } from '../../Buttons/Buttons';
import Prototype from './Prototype';

const Header = () => {
	return (
		<div className='homepage__container'>
			<div className='container__left'>
				<div className='homepage__title'>
					<div className="homepage__title--logo">
						<img
							src='/logo-black.png'
							alt='Software Development'
						/>
					</div>
					<div className='homepage__text margin-bottom-8'>
						<h1 className='source-sans-semibold title-8'>
							AR Made Easy
						</h1>
						<h1 className='source-sans-light title-6'>
							With Customizable 3D Models for Online Stores
						</h1>
					</div>
					<div className='homepage__container--btn'>
						<DefaultBtn content='SUBSCRIBE NOW' />
					</div>
				</div>
			</div>
			<Prototype />
		</div>
	);
};

export default Header;
