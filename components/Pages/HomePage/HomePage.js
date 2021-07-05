import { DefaultBtn } from '../../Buttons/Buttons';

export const HomePage = ({ onClick }) => (
  <div id="homepage">
    <div className="padding-left-10">
      <div className="margin-bottom-8">
        <h1 className="source-sans-semibold title-8">
          OOPS!
        </h1>
        <h1 className="source-sans-semibold title-6 margin-bottom-2">
          You Caught Us Early!
        </h1>
        <h2 className="open-sans-light subtitle-2">
          CURRENTLY WE ARE WORKING ON THIS PRODUCT AND WILL LAUNCH SOON!
        </h2>
      </div>
      <div id="homepage__container--btn">
        <DefaultBtn content="JOIN WAITING LIST" onClick={onClick} />
      </div>
    </div>
    {/* <div>
      <h1>
        What We Are Building?
      </h1>
      <h2>

      </h2>
    </div> */}
  </div>
)