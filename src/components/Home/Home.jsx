// import { useState } from 'react'
import { Link } from "react-router-dom";
import './Home.css'


function Home() {

    return (
        <div className="page-container">
            <div className="home-container">
                <div className="header-container">
                    <div className="navbar-container">
                        <ul className="unordered-list">
                            <li className="list-element-navbar"><Link to="/About"><img src="src/assets/home-symbol.png" alt="Home" className="symbol-navbar" /></Link></li>
                            <li className="list-element-navbar"><Link to="/About"><img src="src/assets/code-termial-symbol.png" alt="Home" className="symbol-navbar" /></Link></li>
                            <li className="list-element-navbar"><Link to="/About"><img src="src/assets/user.png" alt="Home" className="symbol-navbar" /></Link></li>
                            <li className="list-element-navbar"><Link to="/About"><img src="src/assets/email-symbol.png" alt="Home" className="symbol-navbar" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="main-container">
                    <div className="main-content-container">
                        <p id="home-text" className="serif-font">I'm Nassim, <br /> <span style={{ color: 'white'}} className="serif-font">Software Developer.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
