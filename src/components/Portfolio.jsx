import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Introsection, Introsection2 } from "./introsections";
import PropTypes from "prop-types";
import { Project } from "./projects";
import { Projectdetails } from "./json";
import "../css/Portfolio.css";
import "../css/bootstrap.css";

function Navbar(props) {
  const [bg_color, setbg_color] = useState("transparent");
  const ChangeValueonScroll = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 100) {
      setbg_color("pink");
    } else {
      setbg_color("transparent");
    }
  };
  window.addEventListener("scroll", ChangeValueonScroll);
  const location = useLocation()
  const Paths = [
    {
      name: 'Home',
      path: "/"
    },
    {
      name: 'Work/Projects',
      path: "/Projects"
    },
    {
      name: 'About_Me',
      path: "/About"
    },
    {
      name: 'Contact',
      path: "/Contact"
    }
  ]

  return (
    <div
      className="navsection position-fixed top-0 w-100"
      style={{ zIndex: "4" }}
    >
      <nav
        className={`navbar navbar-expand-lg bg-${bg_color} text-white mb-0 pb-0 `}
      >
        <img src={process.env.PUBLIC_URL + "images/star.png"} />
        <a
          className={`navbar-brand ms-2 align-self-center text-white`}
          href="/"
        >
          {" "}
          Pranav Sharma{" "}
        </a>

        <button
          className="navbar-toggler p-0 m-0 me-2 bg-transparent border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>{" "}
        </button>
        <div
          className="collapse navbar-collapse justify-content-center w-50"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {
              Paths.map((data) => (
                <Link className={`nav-link bg-${location.pathname == data.path ? 'pink-dark' : ''} text-white`} to={data.path}>
                  {data.name}
                </Link>
              ))
            }

            {/* <Link className={`nav-link bg-${window.location.pathname == '/Projects' ? 'pink-dark' : ''}  text-white`} to="/Projects">
              {props.nav2}
            </Link>
            <Link className={`nav-link text-white`} to="/About">
              {props.nav3}
            </Link>
            <Link className={`nav-link text-white`} to="/Contact">
              {props.nav4}
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

function Introduction(props) {
  return (
    <>
      <Introsection />
      <Introsection2 data={props.data} />
      <WorkExperience />
    </>
  );
}
function WorkExperience() {
  return (
    <div className="container-fluid workexperince">
      <h1 className="text-center text-lightpink mb-5 mt-5">Work Experience</h1>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="card mb-3 shadow-sm">
            <div className="row align-items-center g-0">
              <div className="col-md-4 col-4 ">
                <img
                  src={process.env.PUBLIC_URL + "images/aartas.png"}
                  className="img-fluid rounded-start"
                  alt="aartas"
                />
              </div>
              <div className="col-md-8 col-8">
                <div className="card-body">
                  <h3 className="card-title p-0 m-0 fw-normal">
                    aartas CliniShare
                  </h3>
                  <p className="card-text p-0 m-0 fw-normal text-secondary ">
                    Med-Tech Company
                  </p>
                  <p className="card-text p-0 m-0">Delhi, India</p>
                  <p className="card-text p-0 m-0">React JS Developer</p>
                  <p className="card-text p-0 m-0">
                    <small className="text-body-secondary">
                      Oct 2022 - Present
                    </small>
                  </p>
                  <button className="btn p-0 m-0 text-primary ">
                    know more....
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-3 shadow-sm">
            <div className="row align-items-center g-0">
              <div className="col-md-4 col-4 ">
                <img
                  src={process.env.PUBLIC_URL + "images/addon.png"}
                  className="img-fluid rounded-start"
                  alt="addon shareware"
                />
              </div>
              <div className="col-md-8 col-8">
                <div className="card-body">
                  <h3 className="card-title p-0 m-0 fw-normal">
                    Addon Shareware
                  </h3>
                  <p className="card-text p-0 m-0 fw-normal text-secondary ">
                    IT-Services Company
                  </p>
                  <p className="card-text p-0 m-0">Noida, India</p>
                  <p className="card-text p-0 m-0">Front End Developer</p>
                  <p className="card-text p-0 m-0">
                    <small className="text-body-secondary">
                      Apr 2022 - Sep 2022
                    </small>
                  </p>
                  <button className="btn p-0 m-0 text-primary ">
                    know more....
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-3 shadow-sm">
            <div className="row align-items-center g-0">
              <div className="col-md-4 col-4 ">
                <img
                  src={process.env.PUBLIC_URL + "images/mobiforce.png"}
                  className="img-fluid rounded-start"
                  alt="mobiforce"
                />
              </div>
              <div className="col-md-8 col-8">
                <div className="card-body">
                  <h3 className="card-title p-0 m-0 fw-normal">My Mobiforce</h3>
                  <p className="card-text p-0 m-0 fw-normal text-secondary ">
                    Crowd-Sourcing Company
                  </p>
                  <p className="card-text p-0 m-0">Noida, India</p>
                  <p className="card-text p-0 m-0">Internship</p>
                  <p className="card-text p-0 m-0">
                    <small className="text-body-secondary">
                      Oct 2021 - Dec 2021
                    </small>
                  </p>
                  <button className="btn p-0 m-0 text-primary ">
                    know more....
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function About(props) {
  return <div className={`text-${props.mode}`}>About here</div>;
}
function Contact(props) {
  return <div className={`text-${props.mode}`}>Contact here</div>;
}
function Work(props) {
  const projectelements = Projectdetails.map((content) => {
    return (
      <Project
        id={content.id}
        title={content.title}
        description={content.description}
        tech={content.Tech}
        image={content.image}
        time={content.time}
        subtitle={content.subtitle}
        props={props}
      />
    );
  });
  console.log(props);
  return (
    <div className="projectssection bg-dark">
      <h1 className={`text-center text-light mb-2 pt-5`}>Projects</h1>
      <div className={`row p-0 m-0 justify-content-evenly`}>
        {projectelements}
      </div>
    </div>
  );
}

export default Navbar;
export { Introduction };
export { Work };
export { About };
export { Contact };

