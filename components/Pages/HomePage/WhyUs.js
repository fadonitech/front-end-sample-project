import { DefaultBtn } from '../../Buttons/Buttons';

import { stringWhyUs } from '../../../copywrite';

const WhyUsCard = ({ title, paragraph }) => {
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
			<div className='about-us__why-invite-btn'>
				<DefaultBtn content='SUBSCRIBE NOW' />
			</div>
		</div>
	);
};

export default WhyUs;
