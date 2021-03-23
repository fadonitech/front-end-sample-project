import CtaBtn from '../Buttons/CtaBtn';

const Benefits = () => (
  <div id="benefits" className="benefits" >
    <h1 className="adam">
      DON'T GET STUCK WITH A BAD TEAM
    </h1>
    <h1 className="adam bold">
      SAVE RESOURCES
    </h1>

    <img alt="Software Development" id="programming-img" src='/programing.svg' alt='next' />
    <img alt="Team Leasing" id="three" src='/three.svg' alt='next' />

    <div className="benefits__container">
      <div className="benefits__container--card">
        <h3 className="open-sans">Start Paying After 2 Weeks</h3>
      </div>
      <div className="benefits__container--card">
        <h3 className="open-sans">Cancel Anytime, Anywhere!</h3>
      </div>
      <div className="benefits__container--card">
        <h3 className="open-sans">Flexible Development Team</h3>
      </div>
      <div className="benefits__container--card">
        <h3 className="open-sans">Full Refund Guaranteed!</h3>
      </div>
    </div>
    <CtaBtn />
  </div>
)

export default Benefits;
