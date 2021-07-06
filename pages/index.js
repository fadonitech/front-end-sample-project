import { createContext } from 'react';
import Head from 'next/head'
import { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from '../components/Blog/BlogNavbar/BlogNavbar';
import { Modal } from '../components/Pages/HomePage/Modal/Modal';

import { HomePage } from '../components/Pages/Page';
import Footer from '../components/Footer/Footer';

const Alert = () => (
  <div className="alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#47B533" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <div>
      <h3 className="text-align-center source-sans-bold">SUCCESS!!</h3>
      <p className="text-align-center open-sans-light">Thank You For Subscribing To Our Waiting List!</p>
    </div>
  </div>
)

export const SubsPlanSelected = createContext({});

const Home = () => {
  const [animateModal, setAnimateModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState({
    isOpen: false,
    title: '',
    message: ''
  });

  useEffect(() => {
    const closeModal = (event) => {
      const closest = event.target.closest('#subsModal');

      if ((null === closest || 0 < closest.length) && modal) {
        setModal(false);
      }
    }

    window.addEventListener('click', closeModal);
    window.addEventListener('touchend', closeModal);

    return () => {
      window.removeEventListener('click', closeModal);
      window.removeEventListener('touchend', closeModal);
    }
  }, [modal]);

  const onClick = () => {
    setModal(!modal);

    if (!modal) {
      setTimeout(() => setAnimateModal(true), 300);
    } else {
      setAnimateModal(true)
    }
  }

  const handleAlert = ({ title, message }) => {
    setAlert({
      isOpen: true,
      title,
      message
    });

    setTimeout(() => setAlert({
      ...alert,
      isOpen: false
    }), 2600);
  }

  return (
    <div>
      <Head>
        <title>FadoniTech</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Fast, reliable, and flexible software solution service for your businesses and project" />
        {/* <meta http-equiv="refresh" content={`5;url="https://www.fadonitech.com/`} /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        {alert.isOpen && <Alert />}
        {animateModal && <Modal showModal={modal} handleModal={onClick} handleAlert={handleAlert} />}
        <Navbar onClick={onClick} />
        <SubsPlanSelected.Provider value={{}}>
          <HomePage onClick={onClick} />
        </SubsPlanSelected.Provider>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
