import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"
// import Image from "react-random-image"



function Media() {

    const [photo, setPhoto] = useState()

    useEffect(() => {
        fetch("https://source.unsplash.com/1600x900/?beach")
        .then(res => {
            setPhoto(res)
        })
        
    }, []) 

    return (
        <>
            <header>
                <div className="nav">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem">About Us</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/events" className="navItem">Events</Link>
                    <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                </div>
            </header>
            <h1 className="pageTitle">Media Page</h1>
            <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={photo} style={{width: "18rem"}} />
          
            </Card>
        </>
    )
}

export default Media