import Link from 'next/link';

const StandardBtn = ({ title, url }) => (
  <Link
    href={url}
    scroll={true}
  >
    <button id="standard-btn">
      {title}
    </button>
  </Link>
)

export default StandardBtn;