import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CONTACT } from '../../../GraphQL/Mutations';
import ModalPriceTable from "../../Modal/PriceTable/ModalPriceTable";
import ModalPlans from "../../Modal/Plans/Plans";

import { gaCompletedSignUp } from '../../../lib/ga/events';

import Form from './Form';
import { LoadingAnimation } from '../../Loading/Loading';
import { SubmitBtn } from '../../Buttons/Buttons';

export const SubscribeForm = ({
  loading,
  setLoading,
  setSuccess
}) => {
  const [createContact, { error }] = useMutation(CREATE_CONTACT);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [plan, setPlan] = useState(null);
  const [warning, setWarning] = useState({
    firstName: false,
    lastName: false,
    email: false,
    plan: false
  });

  const [errorForm, setErrorForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);


  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = async () => {
    if (
      (firstName && firstName !== '') &&
      (lastName && lastName !== '') &&
      (email && email !== '') &&
      (plan && plan !== '')
    ) {
      if (validateEmail(email)) {
        setLoading(true)
        gaCompletedSignUp();

        const { data } = await createContact({
          variables: {
            firstName,
            lastName,
            email,
            plan
          }
        })

        setLoading(false);
        console.log(data.createContact, data.createContact.error, data.createContact.message)
        if (!data.createContact.error && !error) {
          setErrorForm(false)
          setErrorMsg('')

          // Create Message
          setSuccess(true);

          setFirstName(null);
          setLastName(null);
          setEmail(null);
          setPlan(null);
        } else {
          setSuccess(false);
          setWarning({
            ...warning,
            email: true
          });
          setErrorMsg(data.createContact.message)
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
        firstName: !(firstName && firstName !== ''),
        lastName: !(lastName && lastName !== ''),
        email: !(email && email !== ''),
        plan: !(plan !== null),
      })
    }
  }

  return loading ? <LoadingAnimation /> :
    (<>
      <div className="getinvited__header">
        <ModalPriceTable />
        <ModalPlans
          plan={plan}
          setPlan={setPlan}
          warning={warning}
          setWarning={setWarning}
        />
      </div>
      <div className="getinvited__container">
        <div className="getinvited__container--block">
          <div className="getinvited__container--header">
            <h2 className="open-sans">
              Get Access Now!
            </h2>
          </div>
          <div className="getinvited__container--form">
            <Form
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
            />
          </div>
          <div className="getinvited__container--button">
            <SubmitBtn onClick={onSubmit} />
          </div>
        </div>
      </div>
    </>
    )
}