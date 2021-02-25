import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CtaBtn from "../Buttons/CtaBtn";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ContactUs = () => (
  <div id="contactus">
    <h1 className="adam title">BEGIN YOUR FREE WEEK NOW!</h1>
    <div id="contactus__container">
      <div id="contactus__container--form">
        <form>
          <textarea
            type="projectdetails"
            name="projectdetails"
            placeholder="Project Details"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <input
            type="name"
            name="name"
            placeholder="Name"
          />
        </form>
        <CtaBtn />
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

export default ContactUs;
