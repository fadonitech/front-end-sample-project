import ModalPlan from './Plan';

const ModalPlans = ({ plan, setPlan, warning, setWarning }) => {
  const onClick = (event) => {
    setWarning({
      ...warning,
      plan: false
    });
    setPlan(event.target.id)
  }

  return (
    <div>
      <ModalPlan
        id="annual"
        plan={plan}
        onClick={onClick}
        title="Annual"
        discount={true}
        subtext="Billed yearly at $479.88"
        price={14}
        warning={warning.plan}
      />
      <ModalPlan
        id="monthly"
        plan={plan}
        onClick={onClick}
        title="Monthly"
        subtext="Cancel at anytime"
        price={19}
        warning={warning.plan}
      />
      <ModalPlan
        id="trial"
        plan={plan}
        onClick={onClick}
        title="14 Day Trial"
        price="FREE"
        last={true}
        warning={warning.plan}
      />
    </div>
  )
}

export default ModalPlans;