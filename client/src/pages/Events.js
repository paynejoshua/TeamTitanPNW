import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/index"
import CalendarComponent from "../components/Calendar/index"
import {Row, Col} from "react-bootstrap"

function Events() {
    const [events, setEvents] = useState([])
    const [currentDay, setCurrentDay] = useState()

    useEffect(() => {
        var today = new Date(),

            date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

        setCurrentDay(date)

        API.getAllEvents()
            .then(res => {

                setEvents(res.data.data)

            })
    }, [])

    return (
        <>

            <header>
                <div className="nav navHeader">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                    <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                    <Link to="/events" className="navItem onPage">Events</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/media" className="navItem">Media</Link>
                </div>
            </header>
            <h1 className="pageTitle">Events</h1>
            <div className="bg-image">

                <h2 className="eventDisplay">
                    <p className="eventTitleHeader">Upcoming Events</p>
                    {events.map(item => {
                        return (
                            <div key={item.title} onClick={() => window.open(item.eventLink)}>

                                <ul className="eventContainer">
                                    <li className="eventItem">{item.date}</li>
                                    <li className="eventItem">{item.title}</li>
                                    <li className="eventItem">Start Time: {item.startTime}</li>
                                    <li className="eventItem">End Time: {item.endTime}</li>
                                    <li className="eventItem">{item.field}</li>
                                    <li className="eventItem">{item.location}</li>
                                    <li className="eventItem"><button className="hyperLink" href={item.eventLink}>Click Here for Event Page</button></li>
                                </ul>
                            </div>
                        )
                    })}

                </h2>
            </div>
        </>
    )
}

export default Events