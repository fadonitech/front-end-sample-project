import Link from 'next/link';

const StandardBtn = ({ title }) => (
  <Link href="/blog">
    <button id="standard-btn">
      {title}
    </button>
  </Link>
)

export default StandardBtn;