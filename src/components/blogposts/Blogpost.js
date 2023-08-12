import React from "react";
import './blogpost.scss';
export default function Blogpost(){
    return (
       
       <div className="card-grid">
        <div className="cards">
            <div className="card-content">
                <img src="assets/project5.jpg" alt="" />
                <span>1 Dec 2022</span>
                <h3>Web design trend in 2022</h3>
                <p>Contrary of the belief Lorem, ipsum <br /> dolor sit amet consectetur adipisicing <br /> elit. Consectetur, pariatur.</p>
            </div>
        </div>
        <div className="cards">
            <div className="card-content">
                <img src="assets/project4.jpg" alt="" />
                <span>1 Dec 2022</span>
                <h3>Web design trend in 2022</h3>
                <p>Contrary of the belief Lorem, ipsum <br /> dolor sit amet consectetur adipisicing <br /> elit. Consectetur, pariatur.</p>
            </div>
        </div>
        <div className="cards">
            <div className="card-content">
                <img src="assets/project3.jpg" alt="" />
                <span>1 Dec 2022</span>
                <h3>Web design trend in 2022</h3>
                <p>Contrary of the belief Lorem, ipsum <br /> dolor sit amet consectetur adipisicing <br /> elit. Consectetur, pariatur.</p>
            </div>
        </div>
       </div>
    
    )
}