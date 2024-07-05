import { useEffect, useState } from 'react'
import './styles/Nav.scss'

function Nav() {
    const [show, handleShow] = useState(false);

      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }};

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    // Se cambia esta función desactualizada, por separar la función de handleScroll para poder aplicarle añadir y/o retirar el EventListener del scroll

    //useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener('scroll');
    //     };
    // }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png" alt="Netflix Logo" />
        <img className="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Your avatar" />
    </div>
  )
}

export default Nav
