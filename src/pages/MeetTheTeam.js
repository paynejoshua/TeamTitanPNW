import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"
import api from "../api/index"
import PhotoUpload from "../components/PhotoUpload/index"

function MeetTheTeam() {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        api.getAllProfiles()
            .then(res => {
                setProfile(res.data.data)
            })
    }, [])

    const saveImage = (id, image) => {
        // console.log(profile)
        // console.log("image" ,image)
        // setProfile(profile.map((item) => {
        //     if (item._id == id ) {
        //         console.log("item.profilePic 1", image)
        //         item.profilePic = image
        //         console.log("item.profilePic 2", item.profilePic)
        //     }
        //     return item
        // }))

        window.location.reload()

    }


    return (
        <div className="fullScreenBG smallScreenBG">
            <header>
                <div className="navItem">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                    <Link to="/meetTheTeam" className="navItem onPage">Meet The Team</Link>
                    <Link to="/events" className="navItem">Events</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/media" className="navItem">Media</Link>
                </div>
            </header>

            <h1 className="pageTitle">Meet The Team</h1>

            <section className="card-layout">
                {profile.map(item => {
                    return (
                        <Card key={item.name} style={{ width: '18rem' }} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">

                                    <div className="container">



                                        <Card.Img variant="top" src={item.picture} style={{ width: "100%" }}></Card.Img>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                        </Card.Body>
                                    </div>

                                </div>

                                <div className="flip-card-back">
                                    <div className="container">
                                        <Card.Img variant="top" src={item.profilePic} style={{ width: "100%", height: "144px" }} />
                                        <PhotoUpload
                                            id={item._id}
                                            onSaveImage={saveImage} />
                                        <Card.Title>Leader: {item.name}</Card.Title>
                                        <Card.Title>Call Sign: {item.callSign}</Card.Title>
                                        <Card.Title>Faction: {item.faction}</Card.Title>
                                        <Card.Body>{item.description}</Card.Body>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    )
                })}
            </section>



        </div>
    )
}

export default MeetTheTeam