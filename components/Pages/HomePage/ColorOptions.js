const ColorOptions = ({ handleColorChange, selectedPart }) => (
	<div className='colorpicker-container'>
		<div className='picker-div'>
			<div
				className='grey-div picker_select'
				style={{
					backgroundColor: '#525252',
				}}
				onClick={() => handleColorChange(selectedPart, '#525252')}
			></div>
		</div>
		<div className='picker-div'>
			<div
				className='red-div picker_select'
				style={{
					backgroundColor: '#C22727',
				}}
				onClick={() => handleColorChange(selectedPart, '#C22727')}
			></div>
		</div>
		<div className='picker-div'>
			<div
				className='green-div picker_select'
				style={{
					backgroundColor: '#42AD87',
				}}
				onClick={() => handleColorChange(selectedPart, '#42AD87')}
			></div>
		</div>
		<div className='picker-div'>
			<div
				className='blue-div picker_select'
				style={{
					backgroundColor: '#4A90E2',
				}}
				onClick={() => handleColorChange(selectedPart, '#4A90E2')}
			></div>
		</div>
		<div className='picker-div'>
			<div
				className='yellow-div picker_select'
				style={{
					backgroundColor: '#C5BE26',
				}}
				onClick={() => handleColorChange(selectedPart, '#C5BE26')}
			></div>
		</div>
	</div>
);

export default ColorOptions;
