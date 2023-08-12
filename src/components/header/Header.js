import React from 'react'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div>
      
        <header>
            <div className="left-h">
            <FontAwesomeIcon icon={faEnvelope}  />
            <h3>nikhilpakhloo@gmail.com</h3>
            <FontAwesomeIcon icon={faPhone}  />
            <h3>+91 8894601634 </h3>
            

            </div>
            <div className="right-h">
            <FontAwesomeIcon icon={faFacebook}  />
            <FontAwesomeIcon icon={faInstagram}  />
            <FontAwesomeIcon icon={faTwitter}  />
            <FontAwesomeIcon icon={faPinterest}  />

            </div>
        
        
            
            
        </header>
    </div>
  )
}
