import { DefaultBtn } from '../../Buttons/Buttons';

import { stringWhyUs } from '../../../copywrite';

const WhyUsCard = ({ title, paragraph }) => {
	return (
		<dir className='aboutus__why--content-cards'>
			<div className='aboutus__why--content-cards--header'>
				<h4 className='source-sans-bold'>{title}</h4>
			</div>
			<p className='open-sans-light'>{paragraph}</p>
		</dir>
	);
};

const WhyUs = () => {
	const renderCards = stringWhyUs.cards.map((card) => (
		<WhyUsCard title={card.title} paragraph={card.paragraph} />
	));

	return (
		<div className='aboutus__why'>
			<div className='aboutus__why--title margin-bottom-2'>
				<h1 className='source-sans-bold title-9'>{stringWhyUs.title}</h1>
				<h3 className='open-sans-light title-2'>{stringWhyUs.text}</h3>
			</div>
			<div className='aboutus__why--content'>
				<div className='aboutus__why--content-list'>{renderCards}</div>
			</div>
			<DefaultBtn content='GET YOUR INVITATION' />
		</div>
	);
};

export default WhyUs;
