const ModalPlan = ({ id, title, discount = false, subtext = false, price, last = false, onClick, plan, warning }) => {
  const renderDiscount = discount && (<span>SAVE 20%</span>)
  const renderSubtext = subtext && (<h3 className="source-sans-bold text-align-left modal__plan-content-subtext">{subtext}</h3>)
  let renderPrice = price && (<h3 className="open-sans-bold">${price}<span>.99/month</span></h3>)

  if (price && typeof price === "string") {
    renderPrice = (<h3 className="open-sans-bold">{price}</h3>)
  }

  return (
    <div className="modal__plan">
      <div className="modal__line-1" />
      <div className="modal__plan-content">
        <div className="modal__plan-content-header">
          <label className="radio-container">
            <input id={id} type="radio" name="service-plans" onChange={onClick} checked={plan === id} />
            <span className={`radio-checkmark${warning ? '-error' : ''}`}></span>
          </label>
          <div className="modal__plan-content-head">
            <h3 className="source-sans-bold text-align-left">
              {title}{renderDiscount}
            </h3>
            {renderSubtext}
          </div>
        </div>

        <div className="modal__plan-content-price">
          {renderPrice}
        </div>
      </div>
      {last && (<div className="modal__line-2" />)}
    </div>
  );
}

export default ModalPlan;