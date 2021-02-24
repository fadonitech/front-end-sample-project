import CtaBtn from '../Buttons/CtaBtn';

const Benefits = () => (
  <div className="benefits" >
    <h1 className="adam">
      DON'T GET STUCK WITH A BAD TEAM
    </h1>
    <h1 className="adam bold">
      SAVE RESOURCES
    </h1>

    <img id="programming-img" src='/programing.svg' alt='next' />
    <img id="three" src='/three.svg' alt='next' />

    <div className="benefits__container">
      <div className="benefits__container--card">
        <h3 className="open-sans">Start Paying After A Week</h3>
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
