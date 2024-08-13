import '../styles/Footer.scss'
import facebook_icon from '../assets/facebook_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import youtube_icon from '../assets/youtube_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <a href="http://www.facebook.com">
          <img src={facebook_icon} alt="facebook_icon"></img>
        </a> 
        <a href="https://www.instagram.com">
          <img src={instagram_icon} alt="instagram_icon" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter_icon} alt="twitter_icon" />
        </a>
        <a href="https://www.youtube.com">
          <img src={youtube_icon} alt="" />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://www.netflix.com/browse/audio-description" target="_blank" rel='noopener noreferrer'>
          <span> Audio Description</span></a>
        </li>
        <li>
          <a href="https://help.netflix.com/es-es" target="_blank" rel='noopener noreferrer'>
          <span>Help Centre</span></a>
        </li>
        <li>
          <a href="https://www.netflix.com/es/redeem" target="_blank" rel='noopener noreferrer'><span>Gift Cards</span></a></li>
        <li>
          <a href="https://media.netflix.com/es_es/" target="_blank" rel='noopener noreferrer'>
          <span>Media Centre</span></a>
        </li>
        <li>
          <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="_blank" rel='noopener noreferrer'><span>Investor Relations</span></a>
        </li>
        <li>
          <a href="https://jobs.netflix.com/" target="_blank" rel='noopener noreferrer'><span>Jobs</span></a>
        </li>
        <li>
          <a href="https://help.netflix.com/legal/termsofuse" target="_blank" rel='noopener noreferrer'><span>Terms of Use</span></a>
        </li>
        <li>
          <a href="https://help.netflix.com/legal/privacy" target="_blank" rel='noopener noreferrer'><span>Privacy</span></a>
        </li>
        <li>
          <a href="https://help.netflix.com/legal/notices" target="_blank" rel='noopener noreferrer'><span>Legal Notices</span></a>
          </li>
        <li>
          <a href="https://help.netflix.com/legal/privacy#cookies" target="_blank" rel='noopener noreferrer'><span>Cookie Preferences</span></a>
        </li>
        <li>
          <a href="https://help.netflix.com/es-es/node/134094" target="_blank" rel='noopener noreferrer'><span>Corporate Information</span></a>
        </li>
        <li>
          <a href="https://help.netflix.com/es-es/contactus" target="_blank" rel='noopener noreferrer'><span>Contact Us</span></a>
          </li>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
