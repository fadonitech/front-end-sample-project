import Link from 'next/link';

const StandardBtn = ({ title, url }) => (
  <Link
    href={url}
    scroll={false}
  >
    <button id="standard-btn">
      {title}
    </button>
  </Link>
)

export default StandardBtn;