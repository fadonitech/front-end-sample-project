const parseVal = eventVal => {
  switch (eventVal) {
    case 6:
      return 100;
    case 5:
      return 80;
    case 4:
      return 60;
    case 3:
      return 40;
    case 2:
      return 20;
    default:
      return 0;
  }
}

const SlideInput = ({ value, setValue }) => {
  const onInput = e => {
    setValue(e.target.value);
  }

  const onMouseMove = e => {
    const eventVal = parseFloat(e.target.value);
    const percent = parseVal(eventVal);

    const color = `
    linear-gradient(
      to right, #4a90e2 ${percent}%, 
      #F5F2F2 ${percent}%
    )`;

    e.target.style.backgroundImage = color;
  }

  return (
    <div className="plans__dev-container">
      <h3 className="open-sans">1</h3>
      <input
        id="slider"
        type="range"
        min={1}
        max={6}
        value={value}
        onChange={onInput}
        onMouseMove={onMouseMove}
      />
      <h3 className="open-sans">6</h3>
    </div>
  )
}

export default SlideInput;
