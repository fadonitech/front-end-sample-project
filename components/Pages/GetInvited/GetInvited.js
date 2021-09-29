import { useEffect, useState, Suspense, useRef } from 'react';
import axios from 'axios';
import { gaCompletedSignUp } from '../../../lib/ga/events';

import Form from './Form';
import { LoadingAnimation } from '../../Loading/Loading';

// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { SceneOfficeModel } from './SceneOfficeModel';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Html } from '@react-three/drei';

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

  const ref = useRef();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

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
        <Canvas
          shadows
          shadowMap
          dpr={[1, 2]}
          camera={{ fov: 75, position: [0, 0, 0] }}
          frameloop='demand'
          performance={{
            current: 1,
            min: 0.1,
            max: 1,
            debounce: 200,
          }}
        >
          {
            hasMounted && (
              <Suspense fallback={null}>
                <Stage
                  controls={ref}
                  preset='rembrandt'
                  intensity={1}
                  environment='city'
                >
                  <SceneOfficeModel />
                </Stage>
              </Suspense>
            )
          }
          <OrbitControls
            ref={ref}
            autoRotate={true}
            minDistance='1'
            maxDistance='10'
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            enableDamping={true}
            dampingFactor='0.1'
            enablePan={false}
          />
        </Canvas>
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