
import React from "react";
import {AiFillCamera} from "react-icons/ai"
import {AiFillVideoCamera} from "react-icons/ai"

const Data = [
    {
        id:  1,
        img1: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-2-488x326.jpg',
        title1: 'Home in Merrick Way',
        address1: 'Merrick Way, Miami, FL 33134, USA',
        familyType1: 'Single Family',
        price1: '540000'
    },
    {
        id:  2,
        img2: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg',
        title2: 'Home in Merrick Way',
        address2: 'Merrick Way, Miami, FL 33134, USA',
        familyType2: 'Single Family',
        price2: '540000'
    },
    {
        id:  3,
        img3: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-488x326.jpg',
        title3: 'Home in Merrick Way',
        address3: 'Merrick Way, Miami, FL 33134, USA',
        familyType3: 'Single Family',
        price3: '540000'
    },
    {
        id:  4,
        img4: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way.jpg',
        title4: 'Home in Merrick Way',
        address4: 'Merrick Way, Miami, FL 33134, USA',
        familyType4: 'Single Family',
        price4: '540000'
    },
    {
        img5: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way.jpg',
        title5: 'Home in Merrick Way',
        address5: 'Merrick Way, Miami, FL 33134, USA',
        familyType5: 'Single Family',
        price5: '540000'
    },
]


const Home = () => {
    return (
        <>
            <div>
                <img className="img" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-4xRP0Ajk9ys-unsplash.jpg" alt="img" />
                <img className="img-5" src="https://wallpapercave.com/wp/wp2589207.jpg" alt="img" />
                <img className="img-6" src="https://i.imgflip.com/2sll7f.png" alt="img"/>
                <img className="img-7" src="https://i.imgflip.com/2sll7f.png" alt="img"/>
                <h1 className="center-2">Find Your Sweet Home</h1>
                <h1 className="center">Discover Latest Properties</h1>
                <h1 className="center-3">Need Help To Choose Your Property</h1>
                <h1 className="center-4">Office Space At NorthWest 107th </h1>
                <h3 className="center-5">Bulid 2017</h3>
                <h3 className="center-6">For Sale</h3>
                <h2 className="center-7">$ 8,50,000</h2>
                <h3 className="center-8">Bedroom</h3>
                <h3 className="center-9">Bathroom</h3>
                <h3 className="center-10">Area</h3>
                <p className="center-1">Newest Properties Around You</p>
                <button className="btn-6">Let Us Call You</button>
                <button className="btn-7">Featured</button>

            </div>
            <div>
                {Data.map((each) => {
                    return (

                        <div >

                            <div className="display">
                                <button className="btn-1">For Sale</button>
                                <button className="btn-2">Featured</button>
                                <button className="btn-3">Hot</button>
                                <button className="btn-4"><AiFillCamera/>8</button>
                                <button className="btn-5"><AiFillVideoCamera/>1</button>
                                <p >{each.price1}</p>
                                <img className="img-2" src={each.img1} />
                                <p></p>

                            </div>
                            <div className="display">
                            <button className="btn-8">For Sale</button>
                                <button className="btn-9">Featured</button>
                                
                                <button className="btn-10"><AiFillCamera/>8</button>
                                <button className="btn-11"><AiFillVideoCamera/>1</button>
                                <img className="img-3" src={each.img2} />
                                <p></p>
                            </div>
                            <div className="display">
                            <button className="btn-12">For Sale</button>
                                <button className="btn-13">Featured</button>
                                <button className="btn-14">Hot</button>
                                <button className="btn-15"><AiFillCamera/>8</button>
                                <button className="btn-16"><AiFillVideoCamera/>1</button>
                                <img className="img-4" src={each.img3} />
                                <p></p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home