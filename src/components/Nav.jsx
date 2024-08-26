import { useEffect, useState } from 'react'
import '../styles/components/Nav.scss'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.png'
import bell_icon from '../assets/bell_icon.png'
import profile_img from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.png'

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
      <div className='nav-left'>
        <a href="https://www.netflix.com">
          <img className="logo"
            src={logo} alt="Netflix Logo" />
        </a>
        <ul>
          <a href="https://www.netflix.com"><span>Home</span></a>
          <a href="https://www.netflix.com/browse/genre/83"><span>TV Shows</span></a>
           <a href="https://www.netflix.com/browse/genre/34399"><span>Movies</span></a>
          <a href="https://www.netflix.com/latest"><span>New & Popular</span></a>
          <a href="https://www.netflix.com/browse/my-list"><span>My List</span></a>
          <a href="https://www.netflix.com/browse/original-audio"><span>Browse by Languages</span></a>
        </ul>
      </div>  

      <div className='nav-right'>
        <img src={search_icon} alt="search icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className='icons' />
        
        <div className="nav-profile">
          <img src={profile_img} alt="profile image" className='profile' />
          <img src={caret_icon} alt="caret" className='icons' />
          <div className="dropdown">
            <p>My profile</p>
            <p>Settings</p>
            <p className='signout'>Sign Out</p>
          </div>
        </div>
      </div>
        {/* <img className="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Your avatar" /> */}
    </div>
  )
}

export default Nav