import React from 'react'

function Introsection(props) {

    return (
      <>
        <div className={`section container-fluid text-${props.mode}`}>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-sm-4 col-12 introduction text-start pt-sm-0 pt-md-0 pt-sm-0 pt-5  ">
              <p className='text-wrap p-0 m-0 mt-4'>
              <span className="">Hello.. </span>I am  
              <span className='text-warning'> Pranav Sharma </span> I am a <span className='text-warning '>
                Front End Developer.</span>
              <br className='p-0 m-0'/>
              <p className='p-0 m-0 mt-5'>Today Everyone Wants themselves on internet.</p>
              
              <p className='p-0 m-0'>SO Let's DO IT.</p>
              <p className='p-0 m-0'>Share Your creative and innovative ideas with me and let me make it happen for <span>REAL.</span></p>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-4 text-wrap ">
              <img className='profile' src={process.env.PUBLIC_URL+ 'images/profile.jpg'}/>
            </div>
          </div>
        </div>

        <div className="container-fluid carousel1 mt-lg-5 mb-lg-5 mt-1 mb-1 col-sm-12">
          <h1 className={`text-center  mt-5 mb-2 text-${props.mode}`}>Technologies I Work On</h1>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
  
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-around">
            <img src={process.env.PUBLIC_URL + "images/html.jpg"} className="d-block border w-25 img-fluid justify-content-center" alt="..." />
                  <img src={process.env.PUBLIC_URL + "images/css.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "images/javascript.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-around">
                  <img src={process.env.PUBLIC_URL + "images/react.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "images/bootstrap.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "images/jquery.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-around">
                  <img src={process.env.PUBLIC_URL + "images/react.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "images/figma.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                  <img src={process.env.PUBLIC_URL + "images/adobeillustrator.jpg"} className="d-block border w-25 img-fluid" alt="..." />
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container-fluid carousel2 mt-lg-5 mb-lg-5 mt-1 mb-1 col-sm-12">
          <h1 className={`text-center  mt-5 mb-2 text-${props.mode}`}>Technologies I Work On</h1>
          <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-4">
              <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + "images/html.jpg"} className="d-block border w-100 img-fluid justify-content-center" alt="..." />
            </div>
              <div className="carousel-item">
                  <img src={process.env.PUBLIC_URL + "images/react.jpg"} className="d-block border w-100 img-fluid" alt="..." />
                </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "images/adobeillustrator.jpg"} className="d-block border w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "images/jquery.jpg"} className="d-block border w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "images/bootstrap.jpg"} className="d-block border w-100 img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
              <img src={process.env.PUBLIC_URL + "images/javascript.jpg"} className="d-block border w-100 img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
              <img src={process.env.PUBLIC_URL + "images/css.jpg"} className="d-block border w-100 img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
              <img src={process.env.PUBLIC_URL + "images/figma.jpg"} className="d-block border w-100 img-fluid" alt="..." />
              </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
        </div>
  
      </>
    );
  }
    
  function Introsection2(props) {
    return (
      <div className='container-fluid'>
      <h1 className={`text-center text-${props.mode} mb-2 mt-5`}>Qualification</h1>
      <div className="row g-2 justify-content-evenly">

      
      {
       props.data.map((data)=>(
        <div className="col-lg-5 col-md-6 col-12 qualifications">
          <div className="card shadow border-0 text-bg-dark">
  <img src={process.env.PUBLIC_URL + `images/${data.image}`} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h2 className="card-title">{data.title}</h2>
    <h5 className="card-text">{data.college}</h5>
    <p className="card-text">{data.year}</p>
  </div>
</div>
        </div>
      
       ))
      }
      </div>
      </div>
    )
  }


  export { Introsection };
  export { Introsection2 }