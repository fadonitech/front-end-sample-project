import { Link as ScrollLink } from 'react-scroll';

const FormBtn = () => (
  <button className="cta-btn" type="submit">
    BOOK A MEETING
  </button>
)

const NormalBtn = () => (
  <ScrollLink to="contactus">
    <button className="cta-btn">
      BOOK A MEETING
    </button>
  </ScrollLink>
)

const CtaBtn = ({
  formBtn = false
}) => {
  return formBtn ? <FormBtn />: <NormalBtn />
};

export default CtaBtn;