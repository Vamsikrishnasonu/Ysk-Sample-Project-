import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { FcCallback } from "react-icons/fc"
import { IoMdContact } from "react-icons/io"
import { Link } from "react-router-dom"
const Header = () => {

    return (


        <div className="head-1">
            <ul className="head-2">

                <li><Link className="head-3" to='/home'>HOME</Link></li>
                <li><Link className="head-3" to='/realestate'><div class="dropdown">
                    <button class="dropbtn">Real Estate</button>
                    <div class="dropdown-content">
                        <a href="/gridelayout">Properties Grid Lyout</a>
                        <a href="#">Properties Grid Full Width</a>
                        <a href="#">Properties List Layout</a>
                        <a href="#">Properties List Full Width</a>
                        <a href="#">Properties Half Map</a>
                        <a href="#">Properties Gallery</a>
                        <a href="#">Agents</a>
                        <a href="#">Agencies</a>
                        <a href="#">FAQS</a>
                    </div>
                </div></Link></li>

                <li><Link className="head-3" to='/'>
                    <div class="dropdown">
                        <button class="dropbtn">Property Single</button>
                        <div class="dropdown-content">
                            <a href="#">Sidebar Layout</a>
                            <a href="#">Full Width Layout</a>

                        </div>
                    </div></Link></li>
                <li><Link className="head-3" to='/'>Blog</Link></li>

                <li><Link className="head-3" to='/'>Contact</Link></li>
                <li><Link className="head-3" to='/'><FcCallback className="icons-5" /> +91-960-33-66-456</Link></li>
                <li><Link className="head-3" to='/'><IoMdContact className="icons-6" /></Link></li>
            </ul>
            <div>
                <Link to='/home'><img className="img-1" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/ultra-header-logo.png" alt="" /></Link>
            </div>
        </div>
    )

}

export default Header