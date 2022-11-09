import React from 'react'
import './Navbar.css'



function Topbar() {
    return (
        <div className=" navbar navbar-expand-sm-2 text-white " >

            <div className="bg-secondary text-white fixed-top rounded-circle fs-3 ms-2" style={{ width: "60px" }}>
                <a href="/" style={{ textDecoration: "none" }}>
                    <p className="text-white" style={{ marginLeft: "10px", marginTop: "10px" }}>KH</p>
                </a>
            </div>

            <div className="fs-3 name" style={{ marginLeft: "90px" }}>Kyle Henriksen </div>

            {/* Navigation links future work*/}
            {/* <div>

                <a href="./about" className="text-primary fs-5 ms-2" style={{ textDecoration: "none" }}>About</a>
                <div style={{ border: "1px solid gray" }
                } ></div>
                <a href="./contact" className="text-primary fs-5 ms-2" style={{ textDecoration: "none" }}>Contact</a>
            </div> */}

        </div >
    )
}

export default Topbar