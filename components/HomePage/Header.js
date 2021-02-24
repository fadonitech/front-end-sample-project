import Image from 'next/image';
import CtaBtn from '../Buttons/CtaBtn';

const Header = () => (
  <div className="header-homepage">
    <div className="header-homepage__content">
      <Image
        src="/logo-white.png"
        height={148}
        width={130}
        layout="responsive"
      />
      <h1 className="adam blue-span">
        WE <span>BUILD</span> AND <span>FIX</span> ALL KINDS OF SOFTWARE
     </h1>
     <CtaBtn />
    </div>
  </div>
)

export default Header;