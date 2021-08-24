import ModalPlan from './Plan';

const ModalPlans = ({ plan, setPlan }) => {
  const onClick = (event) => {
    setPlan(event.target.id)
  }

  return (
    <div>
      <ModalPlan id="annual" plan={plan} onClick={onClick} title="Annual" discount={true} subtext="Billed yearly at $479.88" price={39} />
      <ModalPlan id="monthly" plan={plan} onClick={onClick} title="Monthly" subtext="Cancel at anytime" price={49} />
      <ModalPlan id="trial" plan={plan} onClick={onClick} title="14 Day Trial" price="FREE" last={true} />
    </div>
  )
}

export default ModalPlans;