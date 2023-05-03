import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./Portfolio.css";
import { Introsection, Introsection2 } from './introsections'
import PropTypes from "prop-types";
import { Project } from "./projects"
import { Projectdetails } from "./json"


function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg text-${props.mode}`}>
        <div className="container-fluid border-bottom border-warning border-4">
          <a className={`navbar-brand fs-1 align-self-center text-${props.mode}`} href="/">{props.navhead} </a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className={`nav-link text-${props.mode}`} to="/">{props.nav1}</Link>
              <Link className={`nav-link text-${props.mode}`} to="/Work">{props.nav2}</Link>
              <Link className={`nav-link text-${props.mode}`} to="/About">{props.nav3}</Link>
              <Link className={`nav-link text-${props.mode}`} to="/Contact">{props.nav4}</Link>
            </div>
          </div>
          <div class="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} />
            <label className="form-check-label" for="flexSwitchCheckChecked" >{props.btnmode}</label>
          </div>
        </div>
      </nav>
      <br /><br />

    </div>
  );
}

function Introduction(props) {
return(
  <>
  <Introsection/>
  <Introsection2/>
  </>
)
}

function About(props) {
  return (
    <div className={`text-${props.mode}`}>About here</div>
  )
}
function Contact(props) {
  return (
    <div className={`text-${props.mode}`}>
      Contact here
    </div>
  )
}
function Work(props) {
  const projectelements = Projectdetails.map((content) => {
    return <Project
      id={content.id}
      title={content.title}
      description={content.description}
      tech={content.Tech}
      image={content.image}
      time={content.time}
      subtitle={content.subtitle}
      props={props}
    />
  })
  console.log(props);
  return (
    <>
      <h1 className={`text-center text-${props.mode} mb-5`}>Projects</h1>
      <div class={`row justify-content-around`}>
        {projectelements}
      </div>
    </>

  )
}



export default Navbar;
export {Introduction}
export { Work };
export { About };
export { Contact };

Navbar.defaultProps = {
  navhead: "Pranav Sharma",
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

