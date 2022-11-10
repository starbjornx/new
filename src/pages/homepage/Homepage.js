import React from 'react'
import './Homepage.css'

import booksearch from '../../images/project3.png'

import lasso from '../../images/lasso.png'
import portfolio from '../../images/portfolio.png'
import theforce from '../../images/theforce.png'
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
/>
function Homepage() {
    return (
        <div className="container bg-secondary">

            {/* First project */}
            <div className="row"><h1 className="projectTitle text-warning">Elden Market</h1>
                <a href="https://eldenmarket.herokuapp.com/" target="_blank" style={{ maxWidth: "42%" }}> <img src={booksearch} className="bookimage rounded w-100" alt="" ></img></a>
                <div className="col-sm-4 description1">
                    <div className="text-white"><h5>Project Details</h5>
                        <a href="https://eldenmarket.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}> <p style={{ color: "blue" }}>https://eldenmarket.herokuapp.com/</p></a>
                        <p>This was a fun website, team of 5 members contributed to the overall work. All people associated can be found on my github and reading the readme file. The team had great inputs handling all requirements for our project as a team we each were able to add our own unique aspect to the project.I handle a majority of the styling and design.</p>
                        <h5>Services</h5>
                        <ul>
                            <li>API</li>
                            <li>Front end Styling - CSS & Bootstrap</li>


                        </ul>
                    </div>
                </div>
            </div>


            {/* Second project */}
            <div className="row"><h1 className="projectTitle text-warning">AFC Richmond</h1>
                <a href="https://richmondafc.herokuapp.com/" target="_blank" style={{ maxWidth: "42%" }}>  <img src={lasso} className="bookimage rounded w-100" alt=""></img></a>
                <div className="col-sm-4 description1">
                    <div className="text-white"><h5>Project Details</h5>
                        <a href="https://richmondafc.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}> <p style={{ color: "blue" }}>https://richmondafc.herokuapp.com/</p></a>
                        <p>This was a fun project, I was in charge of the styling and I am really glad that it came out the way it did. This project is in my opinion one of my most favorite styling projects I accomplished.</p>
                        <h5>Services</h5>
                        <ul>
                            <li>Front end Styling - CSS & Bootstrap credit:  <a style={{ color: "blue" }} href="https://github.com/jakeeis24">Jake Eissler.</a></li>


                        </ul>
                    </div>
                </div>
            </div>


            {/* Third project */}
            <div className="row"><h1 className="projectTitle text-warning">Stumble upon the Force!</h1>
                <a href="https://par92.github.io/group-6/" target="_blank" style={{ maxWidth: "42%" }}>  <img src={theforce} className="bookimage rounded w-100" alt=""></img></a>
                <div className="col-sm-4 description1">
                    <div className="text-white"><h5>Project Details</h5>
                        <a href="https://par92.github.io/group-6/" target="_blank" style={{ textDecoration: "none" }}> <p style={{ color: "blue" }}>https://par92.github.io/group-6/</p></a>
                        <p>I am a big SCI-Fi fan and who doesn't love Star Wars? Well we actually had someone on our team who never watched Star Wars and knew nothing about it so we decided to create a Star Wars Fan page. I hope you enjoy learning all about Star Wars!</p>
                        <h5>Services</h5>
                        <ul>
                            <li>Front end Styling - CSS & Bootstrap</li>
                            <li>Helped with back-end API</li>

                        </ul>
                    </div>
                </div>
            </div>


            <div className="row"><h1 className="projectTitle text-warning">Previous Portfolio</h1>
                <a href="https://main.d1h0v19nwhz1r3.amplifyapp.com/" target="_blank" style={{ maxWidth: "42%" }}><img src={portfolio} className="bookimage rounded w-100" alt=""></img></a>
                <div className="col-sm-4 description1">
                    <div className="text-white"><h5>Previous Portfolio</h5>
                        <a href="https://main.d1h0v19nwhz1r3.amplifyapp.com/" style={{ textDecoration: 'none' }}><p style={{ color: "blue" }}>https://main.d1h0v19nwhz1r3.amplifyapp.com/</p></a>
                        <p>This is one of my first portfolios I created outside of the Denver University. It has a personal unique style done to it showing off my love for video games.</p>
                        <h5>Services</h5>
                        <ul>
                            <li>Front end Styling - CSS & Bootstrap</li>


                        </ul>
                    </div>
                </div>
            </div>
            {/* This is the closing of the container*/}
        </div>

    )
}

export default Homepage