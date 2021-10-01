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
		{/* Texture pickers */}
		<div
			className='texture-picker'
			onClick={() =>
				handleColorChange(selectedPart, {
					texture: './image/textures/denim.jpg',
					size: [3, 3, 3],
					shininess: 0,
					name: 'denim',
				})
			}
		>
			<img src='./image/textures/denim.jpg' />
		</div>
		<div
			className='texture-picker'
			onClick={() =>
				handleColorChange(selectedPart, {
					texture: './image/textures/wood.jpg',
					size: [2, 2, 2],
					shininess: 60,
					name: 'wood',
				})
			}
		>
			<img src='./image/textures/wood.jpg' />
		</div>
		<div
			className='texture-picker'
			onClick={() =>
				handleColorChange(selectedPart, {
					texture: './image/textures/vintage_floral.jpg',
					size: [2, 2, 2],
					shininess: 60,
					name: 'vintage_floral',
				})
			}
		>
			<img src='./image/textures/vintage_floral.jpg' />
		</div>
		<div
			className='texture-picker'
			onClick={() =>
				handleColorChange(selectedPart, {
					texture: './image/textures/vintage_artwork.jpg',
					size: [2, 2, 2],
					shininess: 60,
					name: 'vintage_artwork',
				})
			}
		>
			<img src='./image/textures/vintage_artwork.jpg' />
		</div>
	</div>
);

export default ColorOptions;
