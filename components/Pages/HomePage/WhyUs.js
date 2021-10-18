import { useState } from 'react';
import { DefaultBtn } from '../../Buttons/Buttons';

import { stringWhyUs } from '../../../copywrite';

const WhyUsCard = ({ title, paragraph }) => {
	const minusIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-minus-circle'
		>
			<circle cx='12' cy='12' r='10'></circle>
			<line x1='8' y1='12' x2='16' y2='12'></line>
		</svg>
	);

	const plusIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-plus-circle'
		>
			<circle cx='12' cy='12' r='10'></circle>
			<line x1='12' y1='8' x2='12' y2='16'></line>
			<line x1='8' y1='12' x2='16' y2='12'></line>
		</svg>
	);

	return (
		<dir className='about-us__why--content-cards'>
			<div className='about-us__why--content-cards--header'>
				<h4 className='source-sans-bold'>{title}</h4>
			</div>
			<p className='open-sans-light'>{paragraph}</p>
		</dir>
	);
};

const WhyUs = () => {
	const renderCards = stringWhyUs.cards.map((card, index) => (
		<WhyUsCard key={index} title={card.title} paragraph={card.paragraph} />
	));

	return (
		<div className='about-us--section about-us__why'>
			<div className='about-us__why--title margin-bottom-2'>
				<h1 className='source-sans-bold title-9'>{stringWhyUs.title}</h1>
				<h3 className='open-sans-light title-2'>{stringWhyUs.text}</h3>
			</div>
			<div className='about-us__why--content'>
				<div className='about-us__why--content-list'>{renderCards}</div>
			</div>
			<DefaultBtn content='GET YOUR INVITATION' />
		</div>
	);
};

export default WhyUs;
