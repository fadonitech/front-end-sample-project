import Image from 'next/image';
import CtaBtn from '../Buttons/CtaBtn';

const SubscriptionPlan = () => (
  <div className="subs-plan">
    <div className="subs-plan--bg">
      <div className="ball-1"></div>
      <div className="ball-2"></div>
      <div className="ball-3"></div>
      <div className="ball-4"></div>
      <div className="ball-5"></div>
      <div className="ball-6"></div>
      <div className="ball-7"></div>
      <div className="ball-8"></div>

      <div className="subs-plan__content">
        <h1 className="title adam">SUBSCRIPTION PLAN</h1>
        <h3 className="subtitle open-sans">Let us take care of development and management for you!</h3>

        <div className="subs-plan__content--container">
          <div className="subs-plan__content--card-1">
            <h3 className="open-sans italic">STEP 1</h3>
            <h2 className="open-sans">Book A Meeting</h2>
            <img src='/step-1.svg' alt='software development' />
          </div>
          <div className="subs-plan__content--card-2">
            <h3 className="open-sans italic">STEP 2</h3>
            <h2 className="open-sans">Give Access To Our Team</h2>
            <img src='/step-2.svg' alt='next' />
          </div>
          <div className="subs-plan__content--card-3">
            <h3 className="open-sans italic">STEP 3</h3>
            <h2 className="open-sans">Send Weekly Tasks</h2>
            <img src='/step-3.svg' alt='next' />
          </div>
          <div className="subs-plan__content--card-4">
            <h3 className="open-sans italic">STEP 4</h3>
            <h2 className="open-sans">Enjoy Scaling Your Business</h2>
            <img src='/step-4.svg' alt='next' />
          </div>
        </div>

        <CtaBtn />
      </div>
    </div>
  </div>
)

export default SubscriptionPlan;