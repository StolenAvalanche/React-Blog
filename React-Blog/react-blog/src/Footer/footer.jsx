import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

export default function footer() {
    return (
        <div className="footer">
            <div className="topLeft">
                <ul className="navBarList">
                    <li className="navBarItem"><Link to="/"><h2>Home</h2></Link></li>
                    <li className="navBarItem"><Link to="/blogs"><h2>Blogs</h2></Link></li>
                    <li className="navBarItem"><Link to="/about"><h2>About</h2></Link></li>
                    <li className="navBarItem"><Link to="/contact"><h2>Contact</h2></Link></li>
                    <li className="navBarItem"><Link to="/login"><h2>Log In</h2></Link></li>
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