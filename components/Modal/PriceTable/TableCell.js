const TableCell = ({ title = null, val1 = null, val2 = null }) => {
  if (title) {
    return (
      <tr className="modal__table--collumn-title open-sans-semibold text-align-left">{title}</tr>
    )
  } else if (val1 !== null) {
    return (
      <tr className="modal__table--collumn-option-1">{
        val1
          ? (
            <svg xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none" stroke="#47B533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>)
          : (<h3 className="source-sans-bold">-</h3>)
      }
      </tr>
    )
  } else if (val2 !== null) {
    return (
      <tr className="modal__table--collumn-option-2">{
        val2
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#47B533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg>)
          : (<h3 className="source-sans-bold">-</h3>)
      }
      </tr>
    )
  }
}

export default TableCell;
