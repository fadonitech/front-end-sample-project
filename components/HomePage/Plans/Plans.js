import { useState } from "react";
import SliderInput from '../Plans/SliderInput/SliderInput';
import PriceCard from './PriceCard/PriceCard';

const Plans = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="plans" id="pricing">
      <h1 className="title adam">
        MONTHLY PARTNERSHIP PRICE
      </h1>
      <h3 className="subtitle adam">
        How many developers do you need?
      </h3>

      <SliderInput
        value={value}
        setValue={setValue}
      />
      <h2 className="open-sans counter">
        {value}
      </h2>

      <div className="plans__price-container">
        <PriceCard
          value={value}
          title="HALF A MONTH"
          subtitle="PARTNERSHIP"
          subscription="halfMonth"
        />
        <PriceCard
          value={value}
          title="MONTHLY"
          subtitle="PARTNERSHIP"
          subscription="monthly"
          development={true}
        />
        <PriceCard
          value={value}
          title="YEARLY"
          subtitle="PARTNERSHIP"
          subscription="yearly"
          development={true}
        />
      </div>
    </div>
  )
}

export default Plans;
