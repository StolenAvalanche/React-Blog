import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"

export default function navbar() {
    return (
        <div className="nav">
            <div className="topLeft">
                <ul className="navBarList">
                    <li className="navBarItem"><Link to="/"><h1>Home</h1></Link></li>
                    <li className="navBarItem"><Link to="/blogs"><h1>Blogs</h1></Link></li>
                    <li className="navBarItem"><Link to="/about"><h1>About</h1></Link></li>
                    <li className="navBarItem"><Link to="/contact"><h1>Contact</h1></Link></li>
                    <li className="navBarItem"><Link to="/login"><h1>Log In</h1></Link></li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="logo"
                    src="https://www.kindpng.com/picc/m/289-2898002_transparent-background-spider-man-logo-png-png-download.png"
                    alt="logo" />
            </div>
        </div>
    )
}
