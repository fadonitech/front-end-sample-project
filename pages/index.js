import { createContext } from 'react';
import Head from 'next/head'
import { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from '../components/Blog/BlogNavbar/BlogNavbar';
import { Modal } from '../components/Pages/HomePage/Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { HomePage } from '../components/Pages/Page';

const Alert = ({ title, message, icon }) => (
  <div className="alert-success">
    <FontAwesomeIcon icon={icon} />
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
        {alert.isOpen && <Alert title={alert.title} message={alert.message} icon={faCheckCircle} />}
        {animateModal && <Modal showModal={modal} handleModal={onClick} handleAlert={handleAlert} />}
        <Navbar onClick={onClick} />
        <SubsPlanSelected.Provider value={{}}>
          <HomePage onClick={onClick} />
        </SubsPlanSelected.Provider>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
