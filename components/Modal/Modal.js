import { useState } from 'react';
import axios from 'axios';

import { LoadingAnimation } from '../Loading/Loading';

import ModalHeader from './Header/ModalHeader';
import ModalPriceTable from './PriceTable/ModalPriceTable';
import ModalPlans from './Plans/Plans';
import ModalSubsForm from './Subscription/Subscription';
import { ModalSubmitBtn } from './Button/Button';

export const Modal = ({ showModal, handleModal, handleAlert }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [plan, setPlan] = useState(null);
  const [warning, setWarning] = useState({
    firstName: false,
    lastName: false,
    email: false
  });

  const [errorForm, setErrorForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const onBack = async () => {
    if (plan) {
      setAnimate(true);

      await setTimeout(() => {
        setAnimate(false)
      }, 300);

      if (secondPage) {
        await setTimeout(() => {
          setSecondPage(false);
        }, 100);
      }
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = async () => {
    if (
      (firstName && firstName !== '') &&
      (lastName && lastName !== '') &&
      (email && email !== '')
    ) {
      if (validateEmail(email)) {
        setLoading(true)

        const { data } = await axios.post(process.env.REACT_APP_API_URL, {
          firstName,
          lastName,
          email,
          subsPlan: plan
        });

        const { error, title, message } = JSON.parse(data.body);

        setLoading(false);

        if (!error) {
          setErrorForm(false)
          setErrorMsg('')
          handleModal();
          handleAlert({ title, message });
  
          await setTimeout(() => {
            setFirstName(null);
            setLastName(null);
            setEmail(null);
            setPlan(null);
            setSecondPage(false);
          }, 50);
        } else {
          setWarning({
            ...warning,
            email: true
          });
          setErrorMsg(message)
          setErrorForm(true);
        }
      } else {
        setWarning({
          ...warning,
          email: true
        })
      }
    } else {
      setWarning({
        firstName: firstName || firstName !== '',
        lastName: lastName || lastName !== '',
        email: email || email !== ''
      })
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
                  <ModalPlans plan={plan} setPlan={setPlan} />
                </>
              )
              : (
                <>
                  {loading ? <LoadingAnimation /> :
                    <ModalSubsForm
                      errorMsg={errorMsg}
                      error={errorForm}
                      setError={setErrorForm}
                      warning={warning}
                      setWarning={setWarning}
                      firstName={firstName}
                      lastName={lastName}
                      email={email}
                      setFirstName={setFirstName}
                      setLastName={setLastName}
                      setEmail={setEmail}
                    />}
                </>
              )
          }
        </div>
      </div>
      <ModalSubmitBtn
        onBack={
          () => secondPage ? onBack() : handleModal()
        }
        onClick={
          () => secondPage ? onSubmit() : onClick()
        }
        secondPage={secondPage}
      />
    </div>
  )
}