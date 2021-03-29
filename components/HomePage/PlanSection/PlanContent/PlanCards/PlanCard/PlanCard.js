const PlanCard = ({ card, index }) => (
  <div key={`${card.title}-${index}`} className={`subs-plan__content--card-${index + 1}`}>
    <h3 className="open-sans italic">STEP {index + 1}</h3>
    <h2 className="open-sans">{card.title}</h2>
    <img alt={card.alt} src={`/step-${index + 1}.svg`} />
  </div>
)

export default PlanCard;
