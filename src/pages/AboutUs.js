import React from "react";
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"


function AboutUs() {

    return (
        <div className="fullScreenBG smallScreenBG">

           
                <header>

                    <div className="navItem">
                        <Link to="/home" className="navItem">Home</Link>
                        <Link to="/aboutUs" className="navItem onPage" id="about-us">About Us</Link>
                        <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                        <Link to="/events" className="navItem">Events</Link>
                        <Link to="/contactUs" className="navItem">Contact Us</Link>
                        <Link to="/media" className="navItem">Media</Link>
                    </div>
                </header>

                <Container>
                <h1 className="aboutUsHeader">About Us</h1>
                <p className="aboutUs aboutUsSmall">
                    Welcome to Team Titan. We are an airsoft team operating primarily out of the Pacific North West. Although we do have a team in Virginia(?).
                    We love this sport and believe everyone who plays should have fun and feel like they are part of a community. That is our mission.
                    To create a fun community of fellow airsoft players who love the sport and are willing to bring more people into it.
   
                <br />
                <br />
             
                    What does H TAN H ENI TAE mean and how do you pronounce it?
                <br />
                <br />
                    Let's start with the pronounciation. It is pronounced EE TAHN EE EHPEE TAHS. This is Greek for: "With your shield or on it." A common,
                    famous, phrase amongst the Spartans. Usually said by mothers to their sons before they left for battle. It essentially means: "Fight until
                    the very end."
 
                <br />
                <br />

                    Why did you choose this phrase?
                <br />
                <br />

                    Our team is based on Greek mythology. All of our callsigns are based in Greek mythology as well as our squads. Our team motto derives from
                    Greek history.


                </p>


            </Container>
        </div>

    )
}

export default AboutUs