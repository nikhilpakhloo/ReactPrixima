import React from 'react'
import './slideshow.scss'

export default function Slideshow() {
  return (
   
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 corouselimg"  src="assets/bg_banner1.jpg" alt="First slide"/>

      <div className="carousel-caption d-none d-md-block caption">
        <p>Design Driven for Professionals</p>

    <h1>WE CRAFT DIGITAL EXPERIENCES</h1>
  
      <button className='btn1'>Get Started</button>
      <button className='btn2' >Our Work</button>
    
   
  </div>
      


    </div>
    <div className="carousel-item">
      <img className="d-block w-100 corouselimg" src="assets/bg_banner1.jpg" alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block caption">
        <p>Design Driven for Professionals</p>

    <h1>WE CRAFT DIGITAL EXPERIENCES</h1>
    <button className='btn1'>Get Started</button>
      <button className='btn2'>Our Work</button>
   
  </div>
    </div>
   
  </div>
</div>
        

   
  )
}
