import React from "react";
import './Footer.css'
import { BsFacebook } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import { FcCallback } from "react-icons/fc"
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"


const Footer = () => {

    return (
        <div className="footer-1 container-fluid">
            <img className="footer-2" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/ultra-header-logo.png" alt="" />
            <p className="footer-3">Experience the epitome of flexibility and empower your<br /> real estate ventures with our feature-rich theme.</p>
            <p className="footer-4">Effortlessly adapt to various property types and market<br /> demands with our comprehensive solution.</p>
            <input className="footer-5" type="text" />
            <button className="footer-6">Search</button>
            <ul className="footer-7">
                <li>Home</li><br />
                <li>Properties Listing</li><br />
                <li>Blog</li><br />
                <li>Contact</li><br />
            </ul>
            <ul className="footer-8">
                <li className="footer-9"><BsFacebook /></li>
                <li className="footer-9"><AiOutlineTwitter /></li>
                <li className="footer-9"><AiOutlineInstagram /></li>
                <li className="footer-9"><AiOutlineYoutube /></li>

            </ul>

            <ul className="footer-10">
                <li className="footer-11">Need Help?</li>
                <li className="footer-11"><button className="footer-12"><FcCallback className="footer-13" />+ 91 960-336-6456</button></li>
                <li className="footer-11"><button className="footer-12"><BsWhatsapp className="footer-13" />+ 91 800-888-9876</button></li>
                <li className="footer-11"><button className="footer-12"><AiOutlineMail className="footer-13" />Deeva@gmail.com</button></li>
            </ul>

        </div>
    )

}

export default Footer