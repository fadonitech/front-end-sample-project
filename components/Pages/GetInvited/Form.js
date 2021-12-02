import Link from 'next/link';

const Form = ({
  firstName = '',
  lastName = '',
  email = '',
  setFirstName,
  setLastName,
  setEmail,
  error,
  setError,
  errorMsg,
  warning,
  setWarning
}) => {
  const onChange = async (event) => {
    const info = event.target.name
    switch (info) {
      case "first-name":
        setFirstName(event.target.value)
        if (warning.firstName) {
          setWarning({
            ...warning,
            firstName: false
          });
        }
        break;
      case "last-name":
        setLastName(event.target.value)
        if (warning.lastName) {
          setWarning({
            ...warning,
            lastName: false
          });
        }
        break;
      case "email":
        setError(false);
        setEmail(event.target.value)
        if (warning.email) {
          setWarning({
            ...warning,
            email: false
          });
        }
        break;
    }
  }

  return (
    <div className="getinvited__form">
      {warning.plan && (
        <h3 className="getinvited__error-message open-sans-bold">
          Please, select a plan
        </h3>
      )}
      {error && (
        <h3 className="getinvited__error-message open-sans-bold">
          {errorMsg}
        </h3>
      )}
      <form className="getinvited__form-subs">
        <input
          onChange={onChange}
          value={firstName ? firstName : ''}
          className={warning.firstName ? "getinvited-input--error" : "getinvited-input"} type="text"
          name="first-name"
          placeholder="First Name"
          required
        />
        <input
          onChange={onChange}
          value={lastName ? lastName : ''}
          className={warning.lastName ? "getinvited-input--error" : "getinvited-input"} type="text"
          name="last-name"
          placeholder="Last Name"
          required
        />
        <input
          onChange={onChange}
          value={email ? email : ''}
          className={warning.email ? "getinvited-input--error" : "getinvited-input"} type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <div className="getinvited__form--legal">
          <p className="paragraph-small text-align-center">
            By signing up, you agree to our <Link className="open-sans-bold" href="/terms-of-use">Terms of Use</Link > and <Link className="open-sans-bold" href="/privacy-policy">Privacy Policy</Link >.
          </p>
        </div>
        {/* <div className="select-input">
          <select name="purpose" id="purpose" required>
            <option value="" disabled selected>Purpose</option>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
          </select>
        </div> */}
      </form>
    </div>
  )
}

export default Form;