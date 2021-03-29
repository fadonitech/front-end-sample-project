import PlanCards from './PlanCards/PlanCards';
import CtaBtn from '../../../Buttons/CtaBtn';

const PlanContent = () => (
  <div className="subs-plan__content">
    <h1 className="title adam">PARTNERSHIP PLAN</h1>
    <h3 className="subtitle open-sans">Let us take care of development and management for you!</h3>
    <PlanCards />
    <CtaBtn />
  </div>
)

export default PlanContent;