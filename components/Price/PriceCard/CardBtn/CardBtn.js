import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const CardBtn = () => {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return (
      <ScrollLink to="contactus">
        <button id="card-btn">
          BOOK A MEETING
        </button>
      </ScrollLink>
    );
  } else {
    return (
      <Link href="/contactus">
        <button id="card-btn">
          BOOK A MEETING
        </button>
      </Link>
    )
  }
}

export default CardBtn;