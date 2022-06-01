import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div class=" navbar navbar-expand-sm-2 text-white " >

            <div class="bg-secondary text-white fixed-top rounded-circle fs-3 ms-2" style={{ width: "60px" }}>
                <a href="https://www.google.com" style={{ textDecoration: "none" }}>
                    <p class="text-white" style={{ marginLeft: "10px", marginTop: "10px" }}>KH</p>
                </a>
            </div>

            <div class="fs-3 name" style={{ marginLeft: "90px" }}>Kyle Henriksen </div>

            {/* Navigation links */}
            <div>
                <a href="./about" className="fs-5 mx-2 " style={{ textDecoration: "none" }}>about</a>
                <div style={{ border: "1px solid gray" }
                } ></div>
                <a href="./contact" className="text-primary fs-5" style={{ textDecoration: "none" }}>contact</a>
            </div>

        </div >
    )
}

export default Navbar