import PlanCard from './PlanCard/PlanCard';

const PlanCards = () => {
  const cards = [
    {
      title: 'Book A Meeting',
      alt: 'Book a meeting in our platform'
    },
    {
      title: 'Give Access To Our Team',
      alt: 'Give access to our team in your project'
    },
    {
      title: 'Send Weekly Tasks',
      alt: 'Send weekly tasks for our development team'
    },
    {
      title: 'Enjoy Scaling Your Business',
      alt: 'Enjoy taking care of your business'
    }
  ]

  const renderCards = cards.map((card, index) => (
    <PlanCard key={index} card={card} index={index} />
  ))

  return (
    <div className="subs-plan__content--container">
      {renderCards}
    </div>
  )
}

export default PlanCards;