import React from 'react'
import github from '../../images/GitHub-Logo.png'
import linked from '../../images/linkedin.png'
function Footer() {
    return (
        <div className="text-danger text-center bg-light" >

            <a href="https://www.github.com/starbjornx"><img src={github} style={{ width: "5%", cursor: "pointer" }} alt=""></img></a>
            <a href="https://www.linkedin.com/in/kyle-henriksen-40ba4b228/"><img src={linked} style={{ width: "3%", cursor: "pointer" }} alt=""></img></a>
            Call me right away!
        </div >
    )
}

export default Footer