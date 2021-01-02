import React from "react";
import {Link} from "react-router-dom"

function Home() {

    return (
        <>
        <section className="mainpage">
        <h1 className="title">Team Titan PNW</h1>
        <div className="menu">


            <Link to="/aboutUs" className="menuItem" id="about-us">About Us</Link>
            <br />
            <Link to="/meetTheTeam" className="menuItem" id="meet-the-team">Meet the Team</Link>
            <br />
            <Link to="/events" className="menuItem" id="calendarLink">Events</Link>
            <br />
            <Link to="/contactUs" className="menuItem" id="contact-us">Contact Us</Link>
            <br />
            <Link to="/media" className="menuItem" id="media">Media</Link>
        </div>
   
        </section>

        </>


      
    )
}

export default Home