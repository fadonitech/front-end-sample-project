import Link from 'next/link';

export const DefaultBtn = ({ content, onClick = null }) => {
  if (!onClick) {
    return (
      <Link href="/subscribe">
        <button
          className="button__default"
        >
          {content}
        </button>
      </Link>
    )
  } else {
    return (
      <button
        className="button__default"
        onClick={onClick}
      >
        {content}
      </button>
    )
  }
}

export const SubmitBtn = ({ onClick }) => (
  <div >
    <button className="getinvited__submit-btn" onClick={onClick} type={"submit"}>
      SIGN UP
    </button>
  </div>
)
