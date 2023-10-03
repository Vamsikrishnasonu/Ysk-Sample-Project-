import React from "react";

const Data = [
    {
        id: 1,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way.jpg',
        title: 'Home in Merrick Way',
        location: 'Merrick Way, Miami, FL 33134, USA',
        familyType: 'Single Family',
        price: '$540,000'
    },
    {
        id: 2,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-2-488x326.jpg',
        title: 'Villa in Coral Gables',
        location: 'Deering Bay Drive, Coral Gables, FL 33158, USA',
        familyType: 'Villa',
        price: '$825,000'
    },
    {
        id: 3,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg',
        title: 'Villa on Hollywood Boulevard',
        location: 'Hatteras Lane, Hollywood, FL 33019, USA',
        familyType: 'Villa',
        price: '$740,000'
    },
    {
        id: 4,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-488x326.jpg',
        title: 'Traditional Food Restaurant',
        location: 'Sunset Drive, Miami, FL, USA',
        familyType: 'Shop',
        price: '$2,600 Monthly',
    },
    {
        id: 5,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design-488x326.jpg',
        title: 'Villa on Grand Avenue',
        location: 'CocoWalk, 3015 Grand Avenue, Miami, USA',
        familyType: 'Villa',
        price: '$4,750 Monthly'
    },
    {
        id: 6,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/meeting-working-room-office-building-488x326.jpg',
        title: 'Office Space at Northwest 107th',
        location: 'Northwest 107th Avenue, Doral, FL 33178, USA',
        familyType: 'Office',
        price: '$3,100 Monthly',
    },
]

const Realestate = () =>{

    return(
        <div className="container-fluid">
            <ul className="d-flex row p-0">
            {Data.map((each) =>{
                return(
                    <li className="col-xl-4">
                        <img className="real-img" src={each.img} alt=""/>
                        <div className="real-1">
                        <p>{each.title}</p>
                        <p>{each.location}</p>
                        <p>{each.familyType}</p>
                        <p>{each.price}</p>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Realestate