export const DefaultBtn = ({ content, onClick }) => (
  <button 
    className="button__default" 
    onClick={onClick}
  >
    {content}
  </button>
)