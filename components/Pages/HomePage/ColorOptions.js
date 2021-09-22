const ColorOptions = ({
  handleColorChange,
  selectedPart
}) => (
  <div className='colorpicker-container'>
        <div
          className='grey-div'
          style={{
            backgroundColor: '#525252',
            width: '32px',
            height: '32px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange(selectedPart, '#525252')}
        ></div>
        <div
          className='red-div'
          style={{
            backgroundColor: '#C22727',
            width: '32px',
            height: '32px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange(selectedPart, '#C22727')}
        ></div>
        <div
          className='green-div'
          style={{
            backgroundColor: '#42AD87',
            width: '32px',
            height: '32px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange(selectedPart, '#42AD87')}
        ></div>
        <div
          className='blue-div'
          style={{
            backgroundColor: '#4A90E2',
            width: '32px',
            height: '32px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange(selectedPart, '#4A90E2')}
        ></div>
        <div
          className='yellow-div'
          style={{
            backgroundColor: '#C5BE26',
            width: '32px',
            height: '32px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange(selectedPart, '#C5BE26')}
        ></div>
      </div>
)

export default ColorOptions;
