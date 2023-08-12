import React from 'react'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className="nav-l">
                <h1>Prixima <span>.</span></h1>
            </div>
            <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
       
            <div className="nav-r">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Reviews</li>
                    
                    <button className='navbtn'>Contact</button>
                </ul>
            </div>
        </nav>
    </div>
  )
}
