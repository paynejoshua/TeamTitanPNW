import React from "react";
import {Link} from "react-router-dom"

function AboutUs() {

    return (
        <>
        <header>
                <Link to="/home" className="navItem">Home</Link>
                <Link to="/contactUs" className="navItem">Contact Us</Link>
                <Link to="/events" className="navItem">Events</Link>
                <Link to="/media" className="navItem">Media</Link>
                <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
        </header>
            <div className="container">
                <h1 className="aboutUsHeader">About Us</h1>
                <p className="aboutUs">
                    Welcome to Team Titan. We are an airsoft team operating primarily out of the Northwest. Although we do have a team in Virginia(?).
                    We love this sport and believe everyone who plays should have fun and feel like they are part of a community. That is our mission.
                    To create a fun community of fellow airsoft players who love the sport and are willing to bring more people into it.
    </p>
                <br />
                <p className="aboutUs">
                    What does H TAN H ENI TAE mean and how do you pronounce it?
    <br />
        Let's start with the pronounciation. It is pronounced EE TAHN EE EHPEE TAHS. This is Greek for: "With your shield or on it." A common,
        famous, phrase amongst the Spartans. Usually said by mothers to their sons before they left for battle. It essentially means: "Fight until
        the very end."
    </p>
                <br />
                <p className="aboutUs">

                    Why did you choose this phrase?
    <br />
        Our team is based on Greek mythology. All of our callsigns are based in Greek mythology as well as our squads. Our team motto derives from
        Greek history.


    </p>

            </div>
        </>

    )
}

export default AboutUs