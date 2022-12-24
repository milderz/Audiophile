import { StyledFooter } from "./Styles/Footer.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <StyledFooter>
     <div className="content">
      <div className="logo">
       <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="audiophile-logo" />
          </Link>
      </div>
      <nav className="nav-links">
       <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/headphones">HEADPHONES</Link></li>
        <li><Link to="/speakers">SPEAKERS</Link></li>
        <li><Link to="/earphones">EARPHONES</Link></li>
       </ul>
      </nav>
      <p className="footer-about">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <p className="footer-copy">Copyright 2021. All Rights Reserved</p>
      
      <ul className="footer-social-links">
       <li><a href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
       <li><a href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
       <li><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
      </ul>
     </div>
      
    </StyledFooter>
  )
}

export default Footer
