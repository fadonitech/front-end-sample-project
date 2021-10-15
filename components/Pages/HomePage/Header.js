import React from 'react';

import { DefaultBtn } from '../../Buttons/Buttons';
import Prototype from './Prototype';

const Header = () => {
	return (
		<div className='homepage__container'>
			<div className='container__left'>
				<div className='homepage__title'>
					<div className='homepage__text margin-bottom-8'>
						<h1 className='source-sans-semibold title-8'>AR Made Easy</h1>
						<h1 className='source-sans-semibold title-6'>
							With READY-TO-USE
							3D Models 
							For E-commerces
						</h1>
					</div>
					<div className='homepage__container--btn'>
						<DefaultBtn content='GET YOUR INVITATION' />
					</div>
				</div>
			</div>
			<Prototype />
		</div>
	);
};

export default Header;
// with READY-TO-USE TEMPLATES
