import React from 'react'

function Introsection(props) {

    return (
      <>
        <div className={`section container-fluid row text-${props.mode}`}>
          <div className="row">
            <div id="intro" className="col-lg-8 col-md-6 col-sm-4 col-12 ms-0 ps-0 text-start ">
              <h1 className="p-0 m-0">Hii!!</h1>
              <p className="p-0 m-0 text-wrap">My name is <span className="p-0 m-0 text-wrap"><u className="p-0 m-0 text-wrap">Pranav Sharma</u></span><br />I'm a <u className="p-0 m-0 text-wrap">Front End Developer.</u><p className="p-0 m-0 text-wrap">I make websites using HTML , CSS , JavaScript and React js as well as i can design things using Adobe Illustrator.</p>
              </p>
            </div>
            <div id="profile  text-wrap" className="col-lg-4 col-md-6 col-sm-4 col-12 ">
              <div id="photo"></div>
            </div>
          </div>
        </div>
  
  
  
        <div className="container-fluid mt-5 mb-5 col-sm-12">
          <h2 className={`text-center fs-1 mt-5 mb-5 text-${props.mode}`}>Technologies I Work On</h2>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
  
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="d-flex justify-content-around">
                  <img src={process.env.PUBLIC_URL + "html.jpg"} class="d-block border w-25 img-fluid justify-content-center" alt="..." />
                  <img src={process.env.PUBLIC_URL + "css.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "javascript.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                </div>
              </div>
              <div class="carousel-item">
                <div className="d-flex justify-content-around">
                  <img src={process.env.PUBLIC_URL + "react.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "bootstrap.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "jquery.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                </div>
              </div>
              <div class="carousel-item">
                <div className="d-flex justify-content-around">
                  <img src={process.env.PUBLIC_URL + "react.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "figma.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "adobeillustrator.jpg"} class="d-block border w-25 img-fluid" alt="..." />
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <h2 className={`text-center fs-1 text-${props.mode} mb-5 mt-5`}>Qualification</h2>
      </>
    );
  }
  
  function Introsection2(props) {
    return (
      <div>
        <div className={`card bg-${props.backgroundmode} text-${props.mode}`}>
          <img src={props.image} className="card-img-top" alt={props.alt} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    )
  }


  export { Introsection };
  export { Introsection2 }