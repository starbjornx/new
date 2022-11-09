import React from 'react'
import booksearch from '../../images/project3.png'
import './work.css'
import lasso from '../../images/lasso.png'
import portfolio from '../../images/portfolio.png'
import theforce from '../../images/theforce.png'
function Work() {
    return (
        <div className="container">

            {/* First project */}
            <div className="row"><h1 className="projectTitle">Elden Market</h1>
                <a href="https://eldenmarket.herokuapp.com/" target="_blank" style={{ maxWidth: "42%" }}> <img src={booksearch} className="bookimage rounded w-100" alt="" ></img></a>
                <div className="col-sm-4 description1">
                    <div><h5>Project Details</h5>
                        <a href="https://eldenmarket.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}> <p style={{ color: "gray" }}>https://eldenmarket.herokuapp.com/</p></a>
                        <p>This was a fun website, team of 5 members contributed to the overall work. All people associated can be found on my github and reading the readme file. The team had great inputs handling all requirements for our project as a team we each were able to add our own unique look to the project. I was in charge of styling and layout.</p>
                        <h5>Services</h5>
                        <ul>
                            <li>API skills</li>
                            <li>Front-end Layout and Styling design</li>
                            <li>Login design</li>
                            <li>Runes page design and functionality</li>

                        </ul>
                    </div>
                </div>
            </div>


            {/* Second project */}
            <div className="row"><h1 className="projectTitle">AFC Richmond</h1>
                <a href="https://richmondafc.herokuapp.com/" target="_blank" style={{ maxWidth: "42%" }}>  <img src={lasso} className="bookimage rounded w-100" alt=""></img></a>
                <div className="col-sm-4 description1">
                    <div><h5>Project Details</h5>
                        <a href="https://richmondafc.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}> <p style={{ color: "gray" }}>https://richmondafc.herokuapp.com/</p></a>
                        <p>This was a fun project, I was in charge of the styling and I am really glad that it came out the way it did. This project is in my opinion one of my most favorite styling projects I accomplished.</p>
                        <h5>Services</h5>
                        <ul>
                            <li>Complete Stlying done by myself and <a href="https://github.com/jakeeis24">Jake Eissler.</a></li>


                        </ul>
                    </div>
                </div>
            </div>


            {/* Third project */}
            <div className="row"><h1 className="projectTitle">Stumble upon the Force!</h1>
                <a href="https://par92.github.io/group-6/" target="_blank" style={{ maxWidth: "42%" }}>  <img src={theforce} className="bookimage rounded w-100" alt=""></img></a>
                <div className="col-sm-4 description1">
                    <div><h5>Project Details</h5>
                        <a href="https://par92.github.io/group-6/" target="_blank" style={{ textDecoration: "none" }}> <p style={{ color: "gray" }}>https://par92.github.io/group-6/</p></a>
                        <p>I am a big SCI-Fi fan and who doesn't love Star Wars? Well we actually had someone on our team who never watched Star Wars and knew nothing about it so we decided to create a Star Wars Fan page. I hope you enjoy learning all about Star Wars!</p>
                        <h5>Services</h5>
                        <ul>
                            <li>In charge of Styling</li>
                            <li>Helped with back-end API</li>

                        </ul>
                    </div>
                </div>
            </div>


            <div className="row"><h1 className="projectTitle">Previous Portfolio</h1>
                <a href="https://main.d1h0v19nwhz1r3.amplifyapp.com/" target="_blank" style={{ maxWidth: "42%" }}><img src={portfolio} className="bookimage rounded w-100" alt=""></img></a>
                <div className="col-sm-4 description1">
                    <div><h5>Previous Portfolio</h5>
                        <a href="https://main.d1h0v19nwhz1r3.amplifyapp.com/" style={{ textDecoration: 'none' }}><p style={{ color: "gray" }}>https://main.d1h0v19nwhz1r3.amplifyapp.com/</p></a>
                        <p>This is one of my first portfolios I created outside of the Denver University. It has a personal unique style done to it showing off my love for video games.</p>
                        <h5>Services</h5>
                        <ul>
                            <li>Completed work fully functional</li>
                            <li>Styling</li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* This is the closing of the container*/}
        </div>

    )
}

export default Work