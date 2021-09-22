import React from 'react';

import { DefaultBtn } from '../../Buttons/Buttons';
import Prototype from './Prototype';

const Header = () => {
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
			<Prototype />
		</div>
	);
};

export default Header;
// with READY-TO-USE TEMPLATES
