import React from "react";
import { Link } from 'react-router-dom'
import { AiFillCamera } from "react-icons/ai"
import { AiFillVideoCamera } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { LuBedDouble } from "react-icons/lu"
import { FaShower } from "react-icons/fa"
import { BsTextarea } from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {FcCallback} from "react-icons/fc"
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Data = [
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/blog-post-1-488x326.jpg',
        title: 'As The Real Estate Market Heats Up, Here s How First-time Buyers',
        date: 'June 16, 2022',
        type: 'Luxury'

    },
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/obi-pixel6propix-MMHcFUKkBD4-unsplash-488x326.jpg',
        title: 'Real Estate Market Heats Up, Here’s How First-time Buyers ',
        date: 'June 16, 2022',
        type: 'Luxury'

    },
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/blog-image-3-1-488x326.jpg',
        title: 'Here’s How First-time Buyers Can Keep Their Cool As The Real Estate ',
        date: 'June 16, 2022',
        type: 'Market Trends'

    },
    {
        id: 1,
        img1: 'https://ultra.realhomes.io/wp-content/uploads/2022/06/architecture-home-merrick-way-1024x683.jpg',
        title1: 'Home in Merrick Way',
        address1: 'Merrick Way, Miami, FL 33134, USA',
        familyType1: 'Single Family',
        price1: '$ 540,000'
    },
    {
        id: 2,
        img2: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg',
        title2: 'Villa in Coral Gables',
        address2: 'Deering Bay Drive, Coral Gables, FL 33158, USA',
        familyType2: 'Villa',
        price2: '$ 825,000'
    },
    {
        id: 3,
        img3: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-488x326.jpg',
        title3: 'Villa on Hollywood Boulevard',
        address3: 'Hatteras Lane,Hollywood, FL 33019, USA',
        familyType3: 'Villa',
        price3: '$ 740,000'
    },
    {
        id: 4,
        img4: 'https://ultra.realhomes.io/wp-content/uploads/2022/06/architecture-home-merrick-way-1024x683.jpg',
        img5: 'https://ultra-realhomes.b-cdn.net/wp-content/plugins/realhomes-elementor-addon//assets/images/map-featured.png',
        img6: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg',
        img7: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-488x326.jpg',
        img8: 'https://ultra.realhomes.io/wp-content/uploads/2022/06/architecture-home-merrick-way-1024x683.jpg',
        title4: 'Home in Merrick Way',
        address4: 'Deering Bay Drive, Coral Gables, FL 33158,USA',
        price4: '$ 540,000',
        para4: 'Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters.…'
    },
    {
        id: 5,
        img9: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/hannah-nicollet-JQ2D4I-2eyw-unsplash.jpg',
        title5: 'Customers Loves Us',
        address5: 'Jhon Doe',
        name: 'Themeforest User'
    },
    {
        id: 6,
        img10: 'https://www.clipartmax.com/png/small/76-767512_house-residence-blue-house-house-house-hou-cartoon-house-png.png',
        title6: 'Finding a perfect property have never been this easy earlier',
        para6: 'You can find perfectly suited properties for your all needs with ease.',
        email6: 'vamsikrishna@gmail.com',
        phone6: '+91 960 3366 456',

    }
]


const Home = () => {
    return (
        <>
            <div>
                <img className="img" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-4xRP0Ajk9ys-unsplash.jpg" alt="img" />
                <img className="img-5" src="https://wallpapercave.com/wp/wp2589207.jpg" alt="img" />
                <img className="img-6" src="https://i.imgflip.com/2sll7f.png" alt="img" />
                <img className="img-7" src="https://i.imgflip.com/2sll7f.png" alt="img" />
                <h1 className="center-2">Find Your Sweet Home</h1>
                <h1 className="center">Discover Latest Properties</h1>
                <h1 className="center-3">Need Help To Choose Your Property</h1>
                <h1 className="center-4">Office Space At NorthWest 107th </h1>
                <h3 className="center-5">Bulid 2017</h3>
                <h3 className="center-6">For Sale</h3>
                <h2 className="center-7">$ 8,50,000</h2>
                <h3 className="center-8"><LuBedDouble className="icons-2" />Bedroom</h3>
                <h3 className="center-9"><FaShower className="icons-3" />Bathroom</h3>
                <h3 className="center-10"><BsTextarea className="icons-4" />Area</h3>
                <h1 className="center-11">____________________________________________________</h1>
                <h1 className="center-12"><AiOutlineSearch className="icons-1" />Keywords</h1>
                <h1 className="center-13">All Main Location</h1>
                <h1 className="center-14">All Types</h1>
                <h1 className="center-15">All Beds</h1>
                <p className="center-1">Newest Properties Around You</p>
                <button className="btn-6">Let Us Call You</button>
                <button className="btn-7">Featured</button>
                <button className="btn-17">All</button>
                <button className="btn-18">For Rent</button>
                <button className="btn-19">For Sale</button>
                <button className="btn-20">Search</button>
                <button className="btn-21"><AiOutlineSearch className="icons-7" />Advance Search</button>

            </div>
            <div>
                {Data.map((each) => {
                    return (

                        <div >

                            <div className="display">
                                <button className="btn-1">For Sale</button>
                                <button className="btn-2">Featured</button>
                                <button className="btn-3">Hot</button>
                                <button className="btn-4"><AiFillCamera />8</button>
                                <button className="btn-5"><AiFillVideoCamera />1</button>
                                <img className="img-2" src={each.img1} />
                                <ul className="list">
                                    <li className="list-1"><LuBedDouble /> 3</li>
                                    <li className="list-1"><FaShower /> 3</li>
                                    <li className="list-1"><BsTextarea />4300 sq ft</li>
                                </ul>
                                <div className="display-1">
                                    <p className="bold">{each.title1}</p>
                                    <p>{each.address1}</p>
                                    <p>{each.familyType1}</p>
                                    <p >{each.price1}</p>

                                </div>
                            </div>
                            <div className="display">
                                <button className="btn-8">For Sale</button>
                                <button className="btn-9">Featured</button>

                                <button className="btn-10"><AiFillCamera />8</button>
                                <button className="btn-11"><AiFillVideoCamera />1</button>
                                <img className="img-3" src={each.img2} />
                                <ul className="list-2">
                                    <li className="list-1"><LuBedDouble /> 3</li>
                                    <li className="list-1"><FaShower /> 3</li>
                                    <li className="list-1"><BsTextarea />4300 sq ft</li>
                                </ul>
                                <div className="display-2">
                                    <p className="bold">{each.title2}</p>
                                    <p>{each.address2}</p>
                                    <p>{each.familyType2}</p>
                                    <p >{each.price2}</p>

                                </div>
                            </div>
                            <div className="display">
                                <button className="btn-12">For Sale</button>
                                <button className="btn-13">Featured</button>
                                <button className="btn-14">Hot</button>
                                <button className="btn-15"><AiFillCamera />8</button>
                                <button className="btn-16"><AiFillVideoCamera />1</button>
                                <img className="img-4" src={each.img3} />
                                <ul className="list-3">
                                    <li className="list-1"><LuBedDouble /> 3</li>
                                    <li className="list-1"><FaShower /> 3</li>
                                    <li className="list-1"><BsTextarea />4300 sq ft</li>
                                </ul>
                                <div className="display-3">
                                    <p className="bold">{each.title3}</p>
                                    <p>{each.address3}</p>
                                    <p>{each.familyType3}</p>
                                    <p >{each.price3}</p>

                                </div>
                            </div>

                        </div>

                    )
                })}

            </div>
            <div className="color-1">
                {Data.map((each) => {
                    return (

                        <div>
                            <img className="img-8" src={each.img4} />
                            <img className="img-9" src={each.img5} />
                            <img className="img-10" src={each.img6} />
                            <img className="img-11" src={each.img7} />
                            <img className="img-12" src={each.img8} />
                            <p className="para-1">{each.title4}</p>
                            <p className="para-2">{each.address4}</p>
                            <p className="para-3">{each.price4}</p>
                            <p className="para-4">{each.para4}</p>
                            <div>
                                <button className="btn-22">For Sale</button>
                                <button className="btn-23">Featured</button>
                                <button className="btn-24">Hot</button>
                            </div>
                        </div>

                    )
                })}
            </div>
            <div className="color-2">
                {Data.map((each) => {
                    return (
                        <div>
                            <img className="img-13" src={each.img9} />
                            <p className="para-6">I have been a web designer for over 18 years now. The theme is fantastic,<br /> flexible and simply excellent to use. I cannot recommend enough!</p>
                            <p className="para-5">This is genuinely the best theme I have ever<br /> bought in terms of super easy & clear<br /> instructions to follow.    </p>
                            <p className="para-7">{each.title5}</p>
                            <p className="para-8">{each.address5}</p>
                            <p className="para-9">{each.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="color-3">
                {Data.map((each) => {
                    return (
                        <div>

                            <h1 className="para-10">Finding a perfect property have never <br />been this easy earlier</h1>
                            <p className="para-11">{each.para6}</p>
                            <p className="para-12">Phone Number:<br />{each.phone6}</p>
                            <p className="para-13">Email:<br />{each.email6}</p>
                            <button className="btn-25">Check Properties</button>
                        </div>
                    )
                })}
            </div>
            <div className="card">
                <div className="d-flex">
                    <div className="card-2 col-xl-3">
                        <img className='flex-1' src="https://ultra.realhomes.io/wp-content/uploads/2022/06/architecture-home-merrick-way-1024x683.jpg" alt="" />
                        <div className="card-3">
                            <p>rrgreb</p>
                        </div>
                    </div>

                    <img className='flex-2' src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-488x326.jpg" alt="" />
                    <img className='flex-3' src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg" alt="" />
                    <img className='flex-4' src="https://ultra.realhomes.io/wp-content/uploads/2022/06/architecture-home-merrick-way-1024x683.jpg" alt="" />
                </div>
            </div>
            <div>
                <br />
                <br />
                <div className="bold-2">
                <h1>Latest News & Update</h1>
                <p>Latest News Real Estate</p>
                </div>
                <ul className="d-flex row">
                    {Data.map((each) => {
                        return (

                            <li className="list-4 col-xl-4">
                                <img src={each.img} />
                                <div className="bold-1">
                                <p>{each.date}</p>
                                <p>{each.title}</p>
                                
                                <p className="bold-3">{each.type}</p>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </div>
            <div >
                <h1 className="bold-4">Partners of RealHomes </h1>
                <p className="bold-5">We are pleased to work with our partners</p>
                <div className="card-4">
                <img className="card-5"src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png" alt=""/>
                <img className="card-6"src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Ironwood-Apartments.png" alt=""/>
                <img className="card-7"src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Rosewood-Homes.png" alt=""/>
                <img className="card-8"src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/The-Capital.png" alt=""/>
                <img className="card-9"src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Adobe-Homes.png" alt=""/>
                </div>
            </div>
            <div className="card-10">
            <img className="card-11" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/ultra-header-logo.png" alt=""/>
            <p className="foot">Experience the epitome of flexibility and empower your<br/> real estate ventures with our feature-rich theme.</p>
            <p className="foot-1">Effortlessly adapt to various property types and market<br/> demands with our comprehensive solution.</p>
            <input className="text-1" type="text"/>
            <button className="text-2">Search</button>
            <ul className="foot-2">
                <li>Home</li><br/>
                <li>Properties Listing</li><br/>
                <li>Blog</li><br/>
                <li>Contact</li><br/>
            </ul>
            <ul className="foot-3">
                <li className="foot-4"><BsFacebook/></li>
                <li className="foot-4"><AiOutlineTwitter/></li>
                <li className="foot-4"><AiOutlineInstagram/></li>
                <li className="foot-4"><AiOutlineYoutube/></li>
                
            </ul>
           
            <ul className="foot-5">
                <li className="foot-6">Need Help?</li>
                <li className="foot-6"><button className="foot-7"><FcCallback className="foot-8"/>+ 91 960-336-6456</button></li>
                <li className="foot-6"><button className="foot-7"><BsWhatsapp className="foot-8"/>+ 91 800-888-9876</button></li>
                <li className="foot-6"><button className="foot-7"><AiOutlineMail className="foot-8"/>Deeva@gmail.com</button></li>
            </ul>
          
            </div>
        </>
    )
}

export default Home