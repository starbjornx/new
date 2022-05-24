import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div class=" navbar navbar-expand-sm text-white  me-2" style={{ height: "70px" }} >

            <div class="bg-secondary text-white fixed-top rounded-circle fs-3 ms-2" style={{ width: "60px" }}><a href="https://www.google.com"> <p class="text-white text-decoration-none" style={{ marginLeft: "10px", marginTop: "10px", textDecoration: "none" }}> KH</p>
            </a>
            </div>

            <div class="text-danger" style={{ marginLeft: "90px" }}>Kyle Henriksen </div><div class=" text-danger ms-5" >about contact</div>

        </div >
    )
}

export default Navbar