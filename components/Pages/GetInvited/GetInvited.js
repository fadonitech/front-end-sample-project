import { useState } from 'react';
import axios from 'axios';
import { gaCompletedSignUp, gaHomePage } from '../../../lib/ga/events';

import Form from './Form';
import { LoadingAnimation } from '../../Loading/Loading';


export const SubmitBtn = ({ onClick }) => (
  <div >
    <button className="getinvited__submit-btn" onClick={onClick} type={"submit"}>
      SUBMIT
    </button>
  </div>
)

export const GetInvitedSection = ({ handleAlert }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [warning, setWarning] = useState({
    firstName: false,
    lastName: false,
    email: false
  });

  const [errorForm, setErrorForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

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
          subsPlan: "monthly"
        });

        const { error, title, message } = JSON.parse(data.body);

        setLoading(false);

        if (!error) {
          setErrorForm(false)
          setErrorMsg('')
          handleAlert({ title, message });

          await setTimeout(() => {
            setFirstName(null);
            setLastName(null);
            setEmail(null);
          }, 50);

          gaCompletedSignUp();
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
    <div className="getinvited">
      <div className="getinvited__header">
        <h2 className="source-sans-semibold">
          GET
        </h2>
        <h2 className="source-sans-semibold">
          INVITED
        </h2>
        <h2 className="source-sans-semibold">
          NOW
        </h2>
      </div>
      <div className="getinvited__container">
        {loading ? <LoadingAnimation /> :
          <>
            <div className="getinvited__container--header">
              <h2 className="open-sans">
                Get Access For FREE!
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
          </>
        }
      </div>
    </div>
  )
}