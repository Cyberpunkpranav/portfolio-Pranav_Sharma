import React, { useState } from "react";

function Introsection(props) {
  // const chatinputref = useRef()
  // const [chat, setchat] = useState('')
  // const [chatarr, setchatarr] = useState([])
  // const [openchat, setopenchat] = useState('none')
  // var client = new websocket('ws://localhost:3500/chat')
  // let chatarray = []

  // function sendmessage() {
  //   chatinputref.current.value = ''
  //   client.onopen = function Chatopened() {
  //     console.log("connection established")
  //     client.send(chat)
  //   }

  //   client.onmessage = function message(e) {
  //     console.log("message sent")
  //     chatarray.push(e.data)
  //     setchatarr(prevState => [...prevState, chatarray])
  //   }
  //   client.close = function clientclosed() {
  //     console.log('client closed')
  //   }
  // }
  const [resume, setresume] = useState("none");
  const toggleresume = () => {
    if (resume == "none") {
      setresume("block");
    }
    if (resume == "block") {
      setresume("none");
    }
  };
  return (
    <>
      <div className={`section container-fluid text-${props.mode}`}>
        <div className="row justify-content-around ">
          <div className="col-lg-8 col-md-6 col-sm-4 col-12 col-xl-7 introduction text-start pt-lg-5 ">
            {/* <span className="">Hello.. </span>I am  
              <span className='text-warning'> Pranav Sharma </span> I am a <span className='text-warning '>
                Front End Developer.</span>
              <br className='p-0 m-0'/>
              <p className='p-0 m-0 mt-5'>Today Everyone Wants themselves on internet.</p>
              <p className='p-0 m-0'>SO Let's DO IT.</p>
              <p className='p-0 m-0'>Share Your creative and innovative ideas with me and let me make it happen for <span>REAL.</span></p> */}
            Welcome to my portfolio website! I am Pranav Sharma, a front-end
            developer with a passion for creating beautiful and functional
            websites. Here you can explore my latest projects and learn more
            about my skills and experience. Thank you for visiting, and I hope
            you enjoy your stay!
            <button
              onClick={toggleresume}
              className="btn btn-lightpink fs-5 mt-5 px-5"
            >
              {" "}
              Resume{" "}
            </button>
            <div
              className={`resume d-${resume} position-absolute start-0 end-0 p-5 bg-pink`}
            >
              <div
                className="btn bg-white btn-close"
                onClick={toggleresume}
              ></div>
              <embed
                src={process.env.PUBLIC_URL + "images/PRANAV_SHARMA_RESUME.pdf"}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-4 col-xl-3 position-relative ">
            <div className="circle1 mt-4">
              {/* <img
              className="profile img-fluid"
              src={process.env.PUBLIC_URL + "images/profile.jpg"}
            /> */}
            </div>
            <div className="circle2 position-absolute"></div>
            <div className="circle3 position-absolute"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <a
              className="btn btn-lightpink rounded-pill "
              href="https://www.linkedin.com/in/pranav-sharma-618914187/"
              target="_blank"
            >
              <img
                className="btn-img"
                src={process.env.PUBLIC_URL + "images/linkedin.png"}
              />
              Linkedin
            </a>
          </div>
          <div className="col-auto">
            <a
              className="btn btn-lightpink rounded-pill "
              href="https://github.com/Cyberpunkpranav"
              target="_blank"
            >
              <img
                className="btn-img"
                src={process.env.PUBLIC_URL + "images/github.png"}
              />
              Git Hub
            </a>
          </div>
          <div className="col-auto">
            <a
              className="btn btn-lightpink rounded-pill "
              href="mailto: pranavsharma733902@gmail.com"
              target="_blank"
            >
              <img
                className="btn-img"
                src={process.env.PUBLIC_URL + "images/email.png"}
              />
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 mx-0 w-100 carousel1 mt-lg-5 mb-lg-5 mt-1 mb-1 col-sm-12">
        <h1 className={`text-center  mt-5 mb-2 text-lightpink`}>
          {" "}
          Technologies I Work On{" "}
        </h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around">
                <img
                  src={process.env.PUBLIC_URL + "images/html.jpg"}
                  className="d-block border w-25 img-fluid justify-content-center"
                  alt="..."
                />
                <img
                  src={process.env.PUBLIC_URL + "images/css.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
                <img
                  src={process.env.PUBLIC_URL + "images/javascript.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <img
                  src={process.env.PUBLIC_URL + "images/react.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
                <img
                  src={process.env.PUBLIC_URL + "images/bootstrap.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
                <img
                  src={process.env.PUBLIC_URL + "images/jquery.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <img
                  src={process.env.PUBLIC_URL + "images/react.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
                <img
                  src={process.env.PUBLIC_URL + "images/figma.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
                <img
                  src={process.env.PUBLIC_URL + "images/adobeillustrator.jpg"}
                  className="d-block border w-25 img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid carousel2 mt-lg-5 mb-lg-5 mt-1 mb-1 col-sm-12">
        <h1 className={`text-center  mt-5 mb-2 text-${props.mode}`}>
          Technologies I Work On
        </h1>
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
              <img
                src={process.env.PUBLIC_URL + "images/html.jpg"}
                className="d-block border w-100 img-fluid justify-content-center"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/react.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/adobeillustrator.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/jquery.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/bootstrap.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/javascript.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/css.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "images/figma.jpg"}
                className="d-block border w-100 img-fluid"
                alt="..."
              />
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + "images/html.jpg"}
              className="border img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + "images/react.jpg"}
              className="border img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + "images/adobeillustrator.jpg"}
              className=" border img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + "images/jquery.jpg"}
              className="border img-fluid rounded-circle"
              alt="..."
            />
          </div>
        </div>

        <img
          src={process.env.PUBLIC_URL + "images/bootstrap.jpg"}
          className="d-block border w-100 img-fluid"
          alt="..."
        />
        <img
          src={process.env.PUBLIC_URL + "images/javascript.jpg"}
          className="d-block border w-100 img-fluid"
          alt="..."
        />
        <img
          src={process.env.PUBLIC_URL + "images/css.jpg"}
          className="d-block border w-100 img-fluid"
          alt="..."
        />
        <img
          src={process.env.PUBLIC_URL + "images/figma.jpg"}
          className="d-block border w-100 img-fluid"
          alt="..."
        />
      </div>
    </>
  );
}

function Introsection2(props) {
  return (
    <div className="container-fluid">
      <h1 className={`text-center text-lightpink mb-2 mt-5`}>
        {" "}
        Qualification{" "}
      </h1>
      <div className="row g-2 justify-content-evenly">
        {props.data.map((data) => (
          <div className="col-lg-5 col-md-6 col-xl-4 col-12 qualifications">
            <div className="card shadow border-0 text-bg-dark">
              <img
                src={process.env.PUBLIC_URL + `images/${data.image}`}
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h2 className="card-title">{data.title}</h2>
                <h5 className="card-text">{data.college}</h5>
                <p className="card-text">{data.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Introsection };
export { Introsection2 };
