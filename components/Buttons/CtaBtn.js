import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const FormBtn = () => (
  <button className="cta-btn" type="submit">
    BOOK A MEETING
  </button>
)

const NormalBtn = () => {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return (
      <ScrollLink to="contactus">
        <button className="cta-btn">
          BOOK A MEETING
        </button>
      </ScrollLink>
    )
  } else {
    return (
      <Link href="/contactus">
        <button className="cta-btn">
          BOOK A MEETING
      </button>
      </Link>
    )
  }
}

const CtaBtn = ({
  formBtn = false
}) => {
  return formBtn ? <FormBtn /> : <NormalBtn />
};

export default CtaBtn;