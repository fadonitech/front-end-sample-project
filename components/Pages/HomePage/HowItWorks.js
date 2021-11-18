import { DefaultBtn } from '../../Buttons/Buttons';

const HowItWorks = () => (
  <div className="homepage--section homepage__how-it-works">
    <div className="homepage__what--title">
      <h1 className="source-sans-semibold title-4">
        Here is how it works
      </h1>
      <div className="line" />
      <h3 className="source-sans-light title-2">
        Easy, fast and intuitive
      </h3>
    </div>
    <div className="homepage__how-it-works--list">
      <ul>
        <li className="source-sans-light title-25 blue-span">
          1. Find A <span>Template</span>!
        </li>
        <li className="source-sans-light title-25 blue-span">
          2. <span>Customize</span> Your Model!
        </li>
        <li className="source-sans-light title-25 blue-span">
          3. <span>Download</span> Your Template!
        </li>
        <li className="source-sans-light title-25 blue-span">
          4. <span>Upload</span> it to your website!
        </li>
      </ul>
    </div>
    <DefaultBtn content="SUBSCRIBE NOW" />
  </div>
)

export default HowItWorks;