const ChairOption = ({ part, selectedPart, setSelectedPart, alt, style }) => (
	<div
		className={selectedPart === part ? 'picker-div selected' : 'picker-div'}
		onClick={() => setSelectedPart(part)}
	>
		<img
			src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/${part}.svg`}
			alt={alt}
			className={`picker_select ${style}`}
		/>
	</div>
);

const ChairOptions = ({ selectedPart, setSelectedPart }) => (
	<div className='chairoptions'>
		<ChairOption
			part={'legs'}
			selectedPart={selectedPart}
			setSelectedPart={setSelectedPart}
			alt={'chair-legs'}
			style={'chair-part-image'}
		/>
		<ChairOption
			part={'cushions'}
			selectedPart={selectedPart}
			setSelectedPart={setSelectedPart}
			alt={'chair-cushions'}
			style={'chair-part-image'}
		/>
		<ChairOption
			part={'supports'}
			selectedPart={selectedPart}
			setSelectedPart={setSelectedPart}
			alt={'chair-supports'}
			style={'chair-part-image'}
		/>
		<ChairOption
			part={'base'}
			selectedPart={selectedPart}
			setSelectedPart={setSelectedPart}
			alt={'chair-base'}
			style={'chair-part-image'}
		/>
		<ChairOption
			part={'back'}
			selectedPart={selectedPart}
			setSelectedPart={setSelectedPart}
			alt={'chair-back'}
			style={'chair-part-image'}
		/>
	</div>
);

export default ChairOptions;
