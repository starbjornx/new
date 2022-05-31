import React from 'react'
import booksearch from '../../images/booksearch2.png'
import './work.css'
function Work() {
    return (
        <div className="container">

            {/* First project */}
            <div className="row"><h1 className="projectTitle">Google Book Search API</h1>
                <img src={booksearch} className="bookimage rounded" alt="" ></img>
                <div className="col-sm-4 description1">
                    <p>This is where I will describe the information about the work I have completed to the images on the left side of the screen</p>
                </div>
            </div>


            {/* Second project */}
            <div className="row"><h1 className="projectTitle">Name of Project</h1>
                <img src={booksearch} className="bookimage rounded-5" alt="" ></img>
                <div className="col-sm-4 description1">
                    <p>This is where I will describe the information about the work I have completed to the images on the left side of the screen</p>
                </div>
            </div>


            {/* Third project */}
            <div className="row"><h1 className="projectTitle">Name of Project</h1>
                <img src={booksearch} className="bookimage rounded-circle" alt=""></img>
                <div className="col-sm-4 description1">
                    <p>This is where I will describe the information about the work I have completed to the images on the left side of the screen</p>
                </div>
            </div>


            {/* This is the closing of the container*/}
        </div>

    )
}

export default Work