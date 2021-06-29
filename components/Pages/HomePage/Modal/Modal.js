import { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const ModalHeader = ({ secondPage }) => (
  <div>
    <h2 className="open-sans-light text-align-center">
      {secondPage ? "Subscribe to our waiting list" : "Which plan would you be more interested?"}
    </h2>
    <div className="modal__page-marker">
      <div className="modal__page-marker-1 marker-blue"></div>
      <div className="modal__page-marker-2"></div>
    </div>
  </div>
)

const TableCell = ({ title = null, val1 = null, val2 = null }) => {
  if (title) {
    return (
      <tr className="modal__table--collumn-title open-sans-semibold text-align-left">
        {title}
      </tr>
    )
  } else if (val1 !== null) {
    return (
      <tr className="modal__table--collumn-option-1">
        {
          val1
            ? <FontAwesomeIcon icon={faCheckCircle} />
            : <h3 className="source-sans-bold">-</h3>
        }
      </tr>
    )
  } else if (val2 !== null) {
    return (
      <tr className="modal__table--collumn-option-2">
        {
          val2
            ? <FontAwesomeIcon icon={faCheckCircle} />
            : <h3 className="source-sans-bold">-</h3>
        }
      </tr>
    )
  }
}

const ModalPriceTable = () => (
  <div className="modal__table">
    <th className="modal__table--collumn">
      <tr className="modal__table--collumn-header source-sans-bold text-align-left">
        FEATURES
      </tr>
      <TableCell title="3D Model Library" />
      <TableCell title="Custom Models" />
      <TableCell title="24/7 Support" />
      <TableCell title="Commercial Use" />
      <TableCell title="Credit Creator" />
    </th>
    <th className="modal__table--collumn">
      <tr className="modal__table--collumn-header source-sans-bold">
        14 DAY TRIAL
      </tr>
      <TableCell val1={true} />
      <TableCell val1={false} />
      <TableCell val1={false} />
      <TableCell val1={false} />
      <TableCell val1={true} />
    </th>
    <th className="modal__table--collumn">
      <tr className="modal__table--collumn-header source-sans-bold">
        MONTHLY
      </tr>
      <TableCell val2={true} />
      <TableCell val2={true} />
      <TableCell val2={true} />
      <TableCell val2={true} />
      <TableCell val2={false} />
    </th>
  </div>
)

const ModalPlan = ({ id, title, discount = false, subtext = false, price, last = false, onClick }) => {
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
            <input id={id} type="radio" name="service-plans" onChange={onClick} />
            <span class="radio-checkmark"></span>
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

const ModalSubmitBtn = ({ onClick, secondPage }) => (
  <div className={secondPage ? "modal__btn-seconda-page" : "modal__btn-container"} onClick={onClick}>
    <button className="modal__submit-btn" onClick={onClick} type={secondPage ? "submit" : "button"}>
      {secondPage ? "KEEP ME IN THE LOOP" : "NEXT"}
    </button>
  </div>
)

const ModalPlans = ({ setPlan }) => {
  const onClick = (event) => {
    setPlan(event.target.id)
  }

  return (
    <div>
      <ModalPlan id="annual" onClick={onClick} title="Annual" discount={true} subtext="Billed yearly at $479.88" price={39} />
      <ModalPlan id="monthly" onClick={onClick} title="Monthly" subtext="Cancel at anytime" price={49} />
      <ModalPlan id="trial" onClick={onClick} title="14 Day Trial" price="FREE" last={true} />
    </div>
  )
}

const ModalSubsForm = ({ setFirstName, setLastName, setEmail }) => {
  const onChange = async (event) => {
    switch (event.target.name) {
      case "first-name":
        await setTimeout(() => { setFirstName(event.target.value) }, 700)
        break;
      case "last-name":
        await setTimeout(() => { setLastName(event.target.value) }, 700)
        break;
      case "email":
        await setTimeout(() => { setEmail(event.target.value) }, 700)
        break;
    }
  }

  return (
    <div className="modal__form">
      <form className="modal__form-subs">
        <input onChange={onChange} className="text-input" type="text" name="first-name" placeholder="First Name" required />
        <input onChange={onChange} className="text-input" type="text" name="last-name" placeholder="Last Name" required />
        <input onChange={onChange} className="text-input" type="email" name="email" placeholder="E-mail" required />
        {/* <div className="select-input">
          <select name="purpose" id="purpose" required>
            <option value="" disabled selected>Purpose</option>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
          </select>
        </div> */}
      </form>
    </div>
  )
}

export const Modal = ({ showModal, handleModal, handleAlert }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [plan, setPlan] = useState(null);

  const [animate, setAnimate] = useState(false);
  const [secondPage, setSecondPage] = useState(false);

  const onClick = async () => {
    if (plan) {
      setAnimate(true);

      await setTimeout(() => {
        setAnimate(false)
      }, 300);

      if (!secondPage) {
        await setTimeout(() => {
          setSecondPage(true);
        }, 100);
      }
    }
  }

  const onSubmit = async () => {
    handleModal();

    if (firstName, lastName, email) {
      const { data } = await axios.post("https://a3euwetft5.execute-api.us-east-1.amazonaws.com/test1/", {
        firstName,
        lastName,
        email,
        subsPlan: plan
      });
      const { title, message } = JSON.parse(data.body)
      handleAlert({title, message});

      await setTimeout(() => {
        setFirstName(null);
        setLastName(null);
        setEmail(null);
        setPlan(null);
        setSecondPage(false);
      }, 200);
    }
  }

  return (
    <div id="subsModal" className={showModal ? 'show-modal' : 'hide-modal'}>
      <ModalHeader secondPage={secondPage} />
      <div className="modal__content">
        <div className={animate ? "modal__content-out" : "modal__content-in"}>
          {
            !secondPage
              ? (
                <>
                  <ModalPriceTable />
                  <ModalPlans setPlan={setPlan} />
                </>
              )
              : (
                <ModalSubsForm
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                />
              )
          }
        </div>
      </div>
      <ModalSubmitBtn onClick={() => secondPage ? onSubmit() : onClick()} secondPage={secondPage} />
    </div>
  )
}