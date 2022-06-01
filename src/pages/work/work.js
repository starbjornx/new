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
                    <div><h5>Project Details</h5>
                        <p style={{ color: "gray" }}>https://projectwebsiteaddress.com</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        <h5>Services</h5>
                        <ul>
                            <li>first list</li>
                            <li>second list</li>
                            <li>third list</li>
                            <li>fourth list</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Second project */}
            <div className="row"><h1 className="projectTitle">Name of Project</h1>
                <img src={booksearch} className="bookimage rounded-5" alt="" ></img>
                <div className="col-sm-4 description1">
                    <div><h5>Project Details</h5>
                        <p style={{ color: "gray" }}>https://projectwebsiteaddress.com</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        <h5>Services</h5>
                        <ul>
                            <li>first list</li>
                            <li>second list</li>
                            <li>third list</li>
                            <li>fourth list</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Third project */}
            <div className="row"><h1 className="projectTitle">Name of Project</h1>
                <img src={booksearch} className="bookimage rounded-circle" alt=""></img>
                <div className="col-sm-4 description1">
                    <div><h5>Project Details</h5>
                        <p style={{ color: "gray" }}>https://projectwebsiteaddress.com</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        <h5>Services</h5>
                        <ul>
                            <li>first list</li>
                            <li>second list</li>
                            <li>third list</li>
                            <li>fourth list</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* This is the closing of the container*/}
        </div>

    )
}

export default Work