import React from "react";
import { Link } from "react-router-dom";
import CalendarComponent from "../components/Calendar/index"

function Events() {

    return (
        <>
         <header>
                <Link to="/home" className="navItem">Home</Link>
                <Link to="/aboutUs" className="navItem">About Us</Link>
                <Link to="/contactUs" className="navItem">Contact Us</Link>
                <Link to="/media" className="navItem">Media</Link>
                <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
            </header>

        <h1 className="pageTitle">Events</h1>

        <CalendarComponent />
        </>
    )
}

export default Events