import React, { useState } from "react";
import '../css/bootstrap.css'
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

  return (
    <>
      <div className={`section container-fluid text-${props.mode}`}>
        <div className="row justify-content-around ">
          <div className="col-lg-8 col-md-6 col-sm-4 col-12 order-1 col-xl-7 introduction text-start pt-lg-5 ">
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
        
           
              <a href="/images/PRANAV_SHARMA_RESUME.pdf" className="btn btn-lightpink shadow fs-5 mt-5 px-5" download> Resume </a>
        
          </div>
          <div className="profileppic col-lg-4 col-md-6 col-sm-4 col-auto order-sm-1 order-0 col-xl-3 position-relative justify-content-center ">
            <div className="circle1">
              {/* <img
              className="profile img-fluid"
              src={process.env.PUBLIC_URL + "images/profile.jpg"}
            /> */}
            </div>
            <div className="circle2 position-absolute shadow"></div>
            <div className="circle3 position-absolute end-5 shadow"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <a className="btn btn-lightpink shadow rounded-pill " href="https://www.linkedin.com/in/pranav-sharma-618914187/" target="_blank" > <img className="btn-img" src={process.env.PUBLIC_URL + "images/linkedin.png"} /> Linkedin </a>
          </div>
          <div className="col-auto">
            <a className="btn btn-lightpink shadow rounded-pill " href="https://github.com/Cyberpunkpranav" target="_blank" > <img className="btn-img" src={process.env.PUBLIC_URL + "images/github.png"} /> Git Hub </a>
          </div>
          <div className="col-auto">
            <a className="btn btn-lightpink shadow rounded-pill " href="mailto: pranavsharma733902@gmail.com" target="_blank" > <img className="btn-img" src={process.env.PUBLIC_URL + "images/email.png"} /> Email </a>
          </div>
        </div>
      </div >

     
      <div div className="container-fluid skills mt-5" >
        <div className="row p-0 m-0 justify-content-evenly">
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/html.jpg"} className=" img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">HTML5</h5>
                  <p className="card-text">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
                  <a className="text-danger" target="_blank" href='https://www.google.com/search?q=html&oq=html&aqs=chrome..69i57j35i39i650j69i60j69i61j69i60j69i65l3.1312j0j7&sourceid=chrome&ie=UTF-8'>know more..</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/css.jpg"} className="d-block border w-100 img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">CSS3</h5>
                  <p className="card-text">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.</p>
                  <a className="text-danger" target="_blank" href="https://www.google.com/search?q=css&sxsrf=APwXEdcNZJUi68gaJVd0H2H7UJZct4GZmQ%3A1683634857132&ei=qTpaZLq5B9bu4-EP7Ny4mAc&ved=0ahUKEwj6sdzMnOj-AhVW9zgGHWwuDnMQ4dUDCA8&uact=5&oq=css&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIHCCMQigUQJzIHCCMQigUQJzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzIKCAAQigUQsQMQQzIKCAAQgAQQFBCHAjIHCAAQigUQQzIHCAAQigUQQzILCAAQgAQQsQMQgwE6BwgjELADECc6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6EgguEIoFENQCEMgDELADEEMYAjoHCCMQ6gIQJzoPCAAQigUQ6gIQtAIQQxgDOg8ILhCKBRDqAhC0AhBDGAM6EwguEIoFELEDEIMBEMcBENEDEEM6DQguEIoFEMcBENEDEEM6CwgAEIoFELEDEIMBOgUIABCABDoHCAAQgAQQCjoECAAQHkoECEEYAFDFBlirEmDzE2gEcAF4AIABjQGIAZMEkgEDMC40mAEAoAEBsAEUyAERwAEB2gEGCAEQARgJ2gEGCAIQARgI2gEGCAMQARgB&sclient=gws-wiz-serp">know more..</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/bootstrap.jpg"} className="d-block border img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap</h5>
                  <p className="card-text">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</p>
                  <a className="text-danger" href="https://www.google.com/search?q=bootstrap&sxsrf=APwXEdc5un3w9IoO_VUttP2431R9Z2FsMw%3A1683635048557&ei=aDtaZPrMIb-U4-EP2tubsA4&ved=0ahUKEwj6oIConej-AhU_yjgGHdrtBuYQ4dUDCA8&uact=5&oq=bootstrap&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIHCCMQigUQJzIHCCMQigUQJzIHCAAQigUQQzIHCAAQigUQQzIQCAAQgAQQFBCHAhCxAxCDATIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzILCAAQgAQQsQMQgwE6BwgjELADECc6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6DwguEIoFEMgDELADEEMYAjoVCC4QigUQxwEQ0QMQyAMQsAMQQxgCOgcIIxDqAhAnOg8IABCKBRDqAhC0AhBDGAM6EQguEIAEELEDEIMBEMcBENEDOgsIABCKBRCxAxCDAToRCC4QigUQsQMQgwEQxwEQ0QM6BQgAEIAEOg4IABCABBCxAxCDARDJAzoOCAAQgAQQsQMQgwEQkgM6CAgAEIoFEJIDOggIABCABBCxAzoHCCMQsQIQJzoNCAAQgAQQsQMQgwEQCkoECEEYAFC1BViKHGD_HmgFcAF4AIAB0AGIAcsLkgEGMC4xMC4xmAEAoAEBsAEUyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI2gEGCAMQARgB&sclient=gws-wiz-serp" target="_blank">know more..</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/javascript.jpg"} className="d-block border w-100 img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
                  <a className="text-danger" href="https://www.google.com/search?q=javascript&sxsrf=APwXEdcdYJa2Gb1t6b6EgMithvbbC1NdrA%3A1683635134964&ei=vjtaZMnCOrTu4-EPv9qqqAk&ved=0ahUKEwjJmZrRnej-AhU09zgGHT-tCpUQ4dUDCA8&uact=5&oq=javascript&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCC4QigUQJzIHCCMQigUQJzIHCCMQigUQJzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMg0IABCKBRCxAxCDARBDMgsIABCABBCxAxCDATITCC4QigUQlwUQ3AQQ3gQQ4AQYAjoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoHCCMQ6gIQJzoPCAAQigUQ6gIQtAIQQxgBOgQIIxAnOgcIABCKBRBDOg0IABCKBRCxAxCDARAKOhEILhCABBCxAxCDARDHARDRAzoLCC4QgAQQsQMQgwE6CAguEIAEELEDOggIABCABBCxA0oECEEYAFCWBliaGmDtG2gDcAF4AIABkwGIAaUKkgEEMC4xMJgBAKABAbABFMgBCsABAdoBBggBEAEYAdoBBggCEAEYFA&sclient=gws-wiz-serp" target="_blank">know more..</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/jquery.jpg"} className="border img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">JQuery</h5>
                  <p className="card-text">jQuery is a JavaScript framework designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.</p>
                  <a className="text-danger" href="https://www.google.com/search?q=jquery&sxsrf=APwXEdf93Lf52OlkH9KXHtlRNJ5rE5J7jg%3A1683635248349&ei=MDxaZMzkFOKE4-EP7qWL-As&ved=0ahUKEwjMvKKHnuj-AhViwjgGHe7SAr8Q4dUDCA8&uact=5&oq=jquery&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIHCCMQigUQJzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzILCAAQgAQQsQMQgwEyCggAEIAEEBQQhwIyCAgAEIAEELEDOgcILhCwAxAnOgcIIxCwAxAnOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhCKBRDIAxCwAxBDGAI6EgguEIoFENQCEMgDELADEEMYAjoHCCMQ6gIQJzoPCAAQigUQ6gIQtAIQQxgDOg8ILhCKBRDqAhC0AhBDGAM6BAgjECdKBAhBGABQ3AhY7BZg3xloBHABeACAAYUBiAH-BZIBAzAuNpgBAKABAbABFMgBE8ABAdoBBggBEAEYCdoBBggCEAEYCNoBBggDEAEYAQ&sclient=gws-wiz-serp" target="_blank">know more..</a>

                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/react.jpg"} className="border img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">React Js</h5>
                  <p className="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on components.React can be used to develop single-page applications.</p>
                  <a className="text-danger" href="https://www.google.com/search?q=React+js&sxsrf=APwXEdd22BDPeYEAIENOMKMSX_xxvRohKg%3A1683635318824&ei=djxaZM7-Mc6I4-EPxsKc-A4&ved=0ahUKEwjOkfConuj-AhVOxDgGHUYhB-8Q4dUDCA8&uact=5&oq=React+js&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIHCCMQigUQJzIHCCMQigUQJzINCAAQigUQsQMQgwEQQzIFCAAQgAQyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIHCAAQigUQQzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBOgcIIxCwAxAnOgoIABBHENYEELADOgoIABCKBRCwAxBDOgcIIxDqAhAnOg8IABCKBRDqAhC0AhBDGAE6CAgAEIAEELEDOgsIABCKBRCxAxCDAToNCC4QigUQxwEQ0QMQQzoQCAAQgAQQFBCHAhCxAxCDAToNCAAQgAQQFBCHAhCxA0oECEEYAFCkCFjUEWDnEmgEcAF4AIABnAGIAfcHkgEDMC44mAEAoAEBsAEUyAEKwAEB2gEGCAEQARgB&sclient=gws-wiz-serp" target="_blank">know more..</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/figma.jpg"} className=" img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Figma</h5>
                  <p className="card-text">Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.</p>
                  <a className="text-danger" href="https://www.google.com/search?q=figma&oq=figma&aqs=chrome.1.69i60j69i59j0i131i433i512j0i433i512j0i512j69i60l2j5.2046j0j7&sourceid=chrome&ie=UTF-8" target="_blank">know more..</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-xl-auto col-lg-auto col-sm-auto col-10 shadow mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "images/adobeillustrator.jpg"} className=" border img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Adobe Illustrator</h5>
                  <p className="card-text">Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.</p>
                  <a className="text-danger" href="https://www.google.com/search?q=adobe+illustrator&sxsrf=APwXEdeEWwXH83aRkbari4B0rw5Q7JT5RA%3A1683635975970&ei=Bz9aZPniOsDp4-EP8eOs6A4&oq=adobe&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgoIABCKBRCxAxBDMgcIABCKBRBDMgoIABCKBRCxAxBDMg0IABCKBRCxAxCDARBDMhYILhCDARDHARDUAhCxAxDRAxCKBRBDMg0IABCKBRCxAxCDARBDMg0IABCKBRCxAxCDARBDMgcIABCKBRBDMgsILhCKBRCxAxDlBDIHCAAQigUQQzoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoNCAAQ5AIQ1gQQsAMYAToVCC4QigUQxwEQ0QMQyAMQsAMQQxgCOgsIABCABBCxAxCDAToICAAQgAQQsQM6BwgjEOoCECc6DwgAEIoFEOoCELQCEEMYAzoRCAAQigUQ6gIQtAIQChBDGAM6BwgjEIoFECc6BAgjECc6DQguEIoFEMcBENEDEEM6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToNCC4QigUQxwEQrwEQJzoHCAAQgAQQCjoNCC4QgAQQxwEQ0QMQCjoFCAAQgARKBAhBGABQsARYtx1ghydoA3ABeAOAAb4BiAHfCpIBBDAuMTCYAQCgAQGwARTIARHAAQHaAQYIARABGAnaAQYIAhABGAjaAQYIAxABGAE&sclient=gws-wiz-serp" target="_blank">know more..</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

function Introsection2(props) {
  return (
    <div className="container-fluid">
      <h1 className={`text-center text-lightpink mb-2 mt-5`}> {" "} Qualification{" "} </h1>
      <div className="row g-2 justify-content-evenly">
        {props.data.map((data) => (
          <div className="col-lg-5 col-md-6 col-xl-4 col-12 qualifications">
            <div className="card shadow border-0 text-bg-dark">
              <img src={process.env.PUBLIC_URL + `images/${data.image}`} className="card-img" alt="..." />
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
