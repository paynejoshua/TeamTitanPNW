import React from "react";
import { Link } from "react-router-dom";
import Team from "../components/MeetTheTeam/index"
import Card from "react-bootstrap/Card"

function MeetTheTeam() {

    const teams = [Team.ballistas, Team.hellhounds, Team.spartans]

    return (
        <>
            <header>
                <div className="nav">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem">About Us</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/events" className="navItem">Events</Link>
                    <Link to="/media" className="navItem">Media</Link>
                </div>
            </header>

            <h1 className="pageTitle">Meet The Team</h1>

            <section className="card-layout">
                {teams.map(item => {
                    return (
                        <Card style={{ width: '18rem' }} className="flip-card">
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
                                        <Card.Img variant="top" src={item.profilePic} style={{width: "100%", height: "144px"}} />
                                        <Card.Title>Leader: {item.leader}</Card.Title>
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



        </>
    )
}

export default MeetTheTeam