import React from "react";
import { Link } from "react-router-dom";
import { Introsection, Introsection2 } from "./introsections";
import PropTypes from "prop-types";
import { Project } from "./projects";
import { Projectdetails } from "./json";
import '../css/Portfolio.css'
import '../css/bootstrap.css'

function Navbar(props) {
  return (
      <div className="position-fixed w-100" style={{zIndex:'4'}}>
    <nav className={`navbar navbar-expand-lg text-${props.mode} mb-0 pb-0`}>
        <div className="container-fluid border-bottom border-warning border-2 p-0">
          <a
            className={`navbar-brand ms-2 text-white align-self-center text-${props.mode}`}
            href="/"
          >
            {props.navhead}{" "}
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className={`nav-link`} to="/">
                {props.nav1}
              </Link>
              <Link className={`nav-link`} to="/Work">
                {props.nav2}
              </Link>
              <Link className={`nav-link`} to="/About">
                {props.nav3}
              </Link>
              <Link className={`nav-link`} to="/Contact">
                {props.nav4}
              </Link>
            </div>
          </div>
          {/* <div class="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={props.toggleMode}
            />
            <label className="form-check-label" for="flexSwitchCheckChecked">
              {props.btnmode}
            </label>
          </div> */}
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
    </>
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
    <>
      <h1 className={`text-center mb-2 pt-5`}>Projects</h1>
      <div class={`row p-0 m-0 justify-content-evenly`}>{projectelements}</div>
    </>
  );
}

export default Navbar;
export { Introduction };
export { Work };
export { About };
export { Contact };

Navbar.defaultProps = {
  navhead: "WELCOME to my PROFILE",
  nav1: "Introduction",
  nav2: "Work/Projects",
  nav3: "About_Me",
  nav4: "Contact",
};

Navbar.propTypes = {
  navhead: PropTypes.string,
  nav1: PropTypes.string,
  nav2: PropTypes.string,
  nav3: PropTypes.string,
  nav4: PropTypes.string,
};
