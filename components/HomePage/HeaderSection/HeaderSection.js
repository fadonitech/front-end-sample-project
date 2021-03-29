import CtaBtn from '../../Buttons/CtaBtn';

const HeaderSection = () => (
  <div className="header-homepage">
    <div className="header-homepage__content">
      <img
        src="/logo-white.png"
        height={148}
        width={130}
        alt="Tech Partnership"
      />
      <h1 className="adam blue-span">
        WE <span>BUILD</span> AND <span>FIX</span> ALL KINDS OF SOFTWARE
     </h1>
     <CtaBtn />
    </div>
  </div>
)

export default HeaderSection;