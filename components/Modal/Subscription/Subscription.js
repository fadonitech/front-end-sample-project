const ModalSubsForm = ({
  firstName = '',
  lastName = '',
  email = '',
  setFirstName,
  setLastName,
  setEmail,
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
    <div className="modal__form">
      <form className="modal__form-subs">
        <input
          onChange={onChange}
          value={firstName ? firstName : ''}
          className={warning.firstName ? "text-input--error" : "text-input"} type="text"
          name="first-name"
          placeholder="First Name"
          required
        />
        <input
          onChange={onChange}
          value={lastName ? lastName : ''}
          className={warning.lastName ? "text-input--error" : "text-input"} type="text"
          name="last-name"
          placeholder="Last Name"
          required
        />
        <input
          onChange={onChange}
          value={email ? email : ''}
          className={warning.email ? "text-input--error" : "text-input"} type="email"
          name="email"
          placeholder="E-mail"
          required
        />
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

export default ModalSubsForm;