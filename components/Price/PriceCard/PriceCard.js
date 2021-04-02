import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import CardBtn from './CardBtn/CardBtn';

const price = {
  1: {
    halfMonth: "$700,00",
    monthly: "$1.000,00",
    yearly: "$950,00"
  },
  2: {
    halfMonth: "$1.400,00",
    monthly: "$2.000,00",
    yearly: "$1.900,00"
  },
  3: {
    halfMonth: "$2.100,00",
    monthly: "$3.000,00",
    yearly: "$2.850,00"
  },
  4: {
    halfMonth: "$2.800,00",
    monthly: "$4.000,00",
    yearly: "$3.800,00"
  },
  5: {
    halfMonth: "$3.500,00",
    monthly: "$5.000,00",
    yearly: "$4.750,00"
  },
  6: {
    halfMonth: "$4.200,00",
    monthly: "$6.000,00",
    yearly: "$5.700,00"
  }
}

const PriceCard = ({
  value,
  title,
  subtitle,
  support = true,
  management = true,
  development = false,
  subscription
}) => {
  const benefits = [
    "Software Support",
    "Team Management",
    "Software Development"
  ]

  const render = benefits.map((benefit, index) => (
    <li key={`${benefit}-${index}`}>
      <FontAwesomeIcon icon={faCheckCircle} />
      <h4 className="open-sans">{benefit}</h4>
    </li>
  ));

  return (
    <div className="card">
      {subscription === 'yearly' && (
        <div className="card--recommended">
          <h3 className="open-sans">RECOMMENDED</h3>
        </div>
      )}
      <div className="card-1">
        <h2 className="open-sans title">{title}</h2>
        <h2 className="open-sans title">{subtitle}</h2>
        <ul>
          {support && render[0]}
          {development && render[2]}
          {management && render[1]}
        </ul>
      </div>
      <div className="card-2">
        <h2 className="open-sans">
          {price[value][subscription]}
          <span className="adam">/month</span>
        </h2>
        <CardBtn />
      </div>
    </div>
  )
}

export default PriceCard;

// const price = {
//   1: {
//     halfMonth: "$1.900,00",
//     monthly: "$3.000,00",
//     yearly: "$2.750,00"
//   },
//   2: {
//     halfMonth: "$3.800,00",
//     monthly: "$6.000,00",
//     yearly: "$5.750,00"
//   },
//   3: {
//     halfMonth: "$5.700,00",
//     monthly: "$9.000,00",
//     yearly: "$8.500,00"
//   },
//   4: {
//     halfMonth: "$7.600,00",
//     monthly: "$12.000,00",
//     yearly: "$11.200,00"
//   },
//   5: {
//     halfMonth: "$9.500,00",
//     monthly: "$15.000,00",
//     yearly: "$14.200,00"
//   },
//   6: {
//     halfMonth: "$11.400,00",
//     monthly: "$18.000,00",
//     yearly: "$17.200,00"
//   }
// }