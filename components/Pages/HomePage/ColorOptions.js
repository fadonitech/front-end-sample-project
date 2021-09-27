const ColorOptions = ({ handleColorChange, selectedPart }) => (
	<div className='colorpicker-container'>
		<div
			className='color-picker'
			onClick={() => handleColorChange(selectedPart, '#525252')}
			style={{
				backgroundColor: '#525252',
			}}
		/>
		<div
			className='color-picker'
			style={{
				backgroundColor: '#C22727',
			}}
			onClick={() => handleColorChange(selectedPart, '#C22727')}
		/>
		<div
			className='color-picker'
			style={{
				backgroundColor: '#42AD87',
			}}
			onClick={() => handleColorChange(selectedPart, '#42AD87')}
		/>
		<div
			className='color-picker'
			style={{
				backgroundColor: '#4A90E2',
			}}
			onClick={() => handleColorChange(selectedPart, '#4A90E2')}
		/>
		<div
			className='color-picker'
			style={{
				backgroundColor: '#C5BE26',
			}}
			onClick={() => handleColorChange(selectedPart, '#C5BE26')}
		/>
	</div>
);

export default ColorOptions;
