import Link from 'next/link';

const FormBtn = () => (
  <button className="cta-btn" type="submit">
    BOOK A MEETING
  </button>
)

const NormalBtn = () => (
  <Link href="/contact">
    <button className="cta-btn">
      BOOK A MEETING
    </button>
  </Link>
)

const CtaBtn = ({
  formBtn = false
}) => {
  return formBtn ? <FormBtn />: <NormalBtn />
};

export default CtaBtn;