import { useState, useEffect } from 'react';
import WebNavbar from './WebNavbar/WebNavbar';
import MobileNavbar from './MobileNavbar/MobileNavbar';

const Navbar = () => {
  const [isPhone, setIsPhone] = useState(false);

  const validateScreen = () => {
    setIsPhone(window.innerWidth <= 600);
  }

  useEffect(() => {
    setIsPhone(window.innerWidth <= 600);
    const resizeEvent = window.addEventListener('resize', validateScreen);
    return window.removeEventListener('resize', resizeEvent)
  }, []);

  return (
    !isPhone ? <WebNavbar /> : <MobileNavbar />
  )
}

export default Navbar;