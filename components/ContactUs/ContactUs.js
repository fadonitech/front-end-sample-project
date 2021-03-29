import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import CtaBtn from "../Buttons/CtaBtn";

const ContactUs = () => {
  const { pathname } = useRouter();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessageSent(true);
    if (name && email && message) {
      await axios.post(`https://a3euwetft5.execute-api.us-east-1.amazonaws.com/test1/`, {
        name,
        email,
        message
      });
    }
  }

  const onChange = e => {
    const value = e.target.value;
    if (value !== '') {
      switch (e.target.name) {
        case 'name':
          nameValidation(value);
          break;
        case 'email':
          setEmail(value);
          break;
        default:
          setMessage(value);
          break;
      }
    }
  }

  const nameValidation = value => {
    if (!/\d/.test(value)) {
      setName(value);
    }
  }

  return (
    <div id={pathname === '/' ? 'contactus' : 'contactus-page'}>
      <h1 className="adam title">BEGIN YOUR FREE WEEK NOW!</h1>
      <div id="contactus__container">
        <div id="contactus__container--form">
          <form onSubmit={onSubmit}>
            <textarea
              type="projectdetails"
              name="projectdetails"
              placeholder="Project Details"
              onChange={onChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={onChange}
            />
            <input
              type="name"
              name="name"
              placeholder="Name"
              onChange={onChange}
            />
            <CtaBtn formBtn={true} />
          </form>
        </div>
        <div id="contactus__container--text">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <h3 className="adam">We'll respond you within 24 hours.</h3>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <h3 className="adam">We'll sign an NDA if requested.</h3>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <h3 className="adam">You'll be talking with experts.</h3>
            </li>
          </ul>
          <div id="contactus__container--text-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3 className="open-sans">Contact Us</h3>
            <h4 className="open-sans">contactus@fadonitech.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
