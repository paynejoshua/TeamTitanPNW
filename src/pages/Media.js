import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"
// import Image from "react-random-image"



function Media() {

    // const [photos, setPhoto] = useState()



    // useEffect(() => {
    //     // Once database is up and running and photos have been put into database. Have them rendered here

    // })


    return (
        <>
            <header>
                <div className="navItem">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                    <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                    <Link to="/events" className="navItem">Events</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/media" className="navItem onPage">Media</Link>
                </div>
            </header>
            <h1 className="pageTitle">Media Page</h1>
            <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src={photos} style={{width: "18rem"}} /> */}

            </Card>
        </>
    )
}

export default Media