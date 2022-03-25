import React from 'react';
import Img1 from './images/register.png'
import Img2 from './images/login.png';
import Img3 from './images/markdown.png';


function Home() {
  return (
    <div className="container" >
    <div className="row justify-content-evenly" id="home-wrapper">
    <div className="col-xs-12 col-md-6">
    <div className="homeText">
      <p><strong>Markdown</strong> is a lightweight markup language based on the formatting conventions
that people naturally use in email.</p>
      <p>Follow steps below:</p>
      <p><strong>Step1 :</strong> Register by giving valid credentials.</p>
      <p><strong>Step2 :</strong> Verification link has been sent to your mail. Verify your account by clicking on the link sent.</p>
      <p><strong>Step3 :</strong> Login into markdown viewer through your registered email.</p>
      <p><strong style={{color : "green"}}>Here you go!</strong></p>
    </div>
    </div>

    <div className="col-xs-12 col-md-6">
   
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <center>
      <img src={Img1} alt="..."/>
      </center>
      </div>
    <div className="carousel-item" data-bs-interval="2000">
      <center>
      <img src={Img2} className="d-block w-100" alt="..."/>
      <br></br>
      </center>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    </div>
    
  )
}

export default Home
