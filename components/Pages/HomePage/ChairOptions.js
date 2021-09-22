const ChairOptions = ({
  selectedPart,
  setSelectedPart
}) => (
  <div>
    <div
      style={{ marginBottom: '8px' }}
      onClick={() => setSelectedPart('legs')}
    >
      <img
        style={{
          border: selectedPart === 'legs' ? '1px solid blue' : '0px',
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          padding: '2px',
        }}
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/legs.svg'
        alt='chair-legs'
        className='chair-part-image'
      />
    </div>
    <div
      style={{ marginBottom: '8px' }}
      onClick={() => setSelectedPart('cushions')}
    >
      <img
        style={{
          border: selectedPart === 'cushions' ? '1px solid blue' : '0px',
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          padding: '2px',
        }}
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/cushions.svg'
        alt='chair-cushions'
        className='chair-part-image'
      />
    </div>
    <div
      style={{ marginBottom: '8px' }}
      onClick={() => setSelectedPart('supports')}
    >
      <img
        style={{
          border: selectedPart === 'supports' ? '1px solid blue' : '0px',
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          padding: '2px',
        }}
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/supports.svg'
        alt='chair-supports'
        className='chair-part-image'
      />
    </div>
    <div onClick={() => setSelectedPart('base')}>
      <img
        style={{
          border: selectedPart === 'base' ? '1px solid blue' : '0px',
          cursor: 'pointer',
          width: '50px',
        }}
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/base.svg'
        alt='chair-base'
        className='chair-part-image'
      />
    </div>
    <div onClick={() => setSelectedPart('back')}>
      <img
        style={{
          border: selectedPart === 'back' ? '1px solid blue' : '0px',
          cursor: 'pointer',
          width: '50px',
        }}
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/back.svg'
        alt='chair-back'
        className='chair-part-image'
      />
    </div>
  </div>
)

export default ChairOptions;