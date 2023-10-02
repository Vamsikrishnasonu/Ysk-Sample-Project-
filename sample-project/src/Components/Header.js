import React from "react";
import '../App.css'
import {FcCallback} from "react-icons/fc"
import {IoMdContact} from "react-icons/io"
import {Link} from "react-router-dom"
const Header = () =>{

return(

    
    <div className="head-1">
    <ul className="head-2">

        <li><Link className="head-3" to='/'>HOME</Link></li>
        <li><Link className="head-3" to='/'>Real Estate</Link></li>
        <li><Link className="head-3" to='/'>Property Single</Link></li>
        <li><Link className="head-3" to='/'>Blog</Link></li>
        
        <li><Link className="head-3" to='/'>Contact</Link></li>
        <li><Link className="head-3" to='/'><FcCallback className="icons-5"/> +91-960-33-66-456</Link></li>
        <li><Link className="head-3" to='/'><IoMdContact className="icons-6"/></Link></li>
    </ul>
   <div>
  <Link to='/'><img className="img-1" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/ultra-header-logo.png" alt=""/></Link>
   </div>
    </div>
)

}

export default Header