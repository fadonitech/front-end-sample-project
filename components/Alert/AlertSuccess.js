const Alert = () => (
  <div className="alert-success">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#47B533"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <div>
      <h3 className="text-align-center source-sans-bold">SUCCESS!!</h3>
      <p className="text-align-center open-sans-light">Thank You For Subscribing To Our Waiting List!</p>
    </div>
  </div>
)

export default Alert;