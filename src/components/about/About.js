import React from "react";
import './about.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function About(){
    return (
        <div className="end">
            <h3>Prixima<span>.</span></h3>
            <p>Contrary is a belief Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. Rem beatae labore, <br />officia natus totam atque!</p>
            <div className="icons-social"><FontAwesomeIcon icon={faFacebook}  />
            <FontAwesomeIcon icon={faInstagram}  />
            <FontAwesomeIcon icon={faTwitter}  />
            <FontAwesomeIcon icon={faPinterest}  />
        </div>
        <div className="links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Disclaimers</a>
        </div>
        <div className="copyright">
            <hr />
            <p>Copyright Vicpra 2022, All rights reserved</p>
            <h6>Distributed by Theme wagon</h6>
        </div>
        

        </div>
    )
}