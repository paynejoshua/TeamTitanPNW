import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/index"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

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
        <div className="fullScreenBG smallScreenBG">

            <header>
                <div className="navItem navHeader">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                    <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                    <Link to="/events" className="navItem onPage">Events</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/media" className="navItem">Media</Link>
                </div>
            </header>

            <br />

            <Row>
                <Col sm={12} lg={12} className="pageTitle">Events</Col>
            </Row>

            <br />

                <Row>

                    <Col>
                    <p className="eventTitleHeader d-flex justify-content-center">Upcoming Events</p>
                    {events.map(item => {
                        return (
                            <div key={item.title} onClick={() => window.open(item.eventLink)}>
                                
                                <Row >
                                    <Col sm={12} lg={12} className="eventItem">{item.date}</Col>

                                    <Col sm={12} lg={12} className="eventItem">{item.title}</Col>

                                    <Col sm={12} lg={12} className="eventItem">Start Time: {item.startTime}</Col>

                                    <Col sm={12} lg={12} className="eventItem">End Time: {item.endTime}</Col>

                                    <Col sm={12} lg={12} className="eventItem">{item.field}</Col>

                                    <Col sm={12} lg={12} className="eventItem">{item.location}</Col>

                                    <Col sm={12} lg={12} className="eventItem"><Button href={item.eventLink}>Click Here for Event Page</Button></Col>


                                </Row>
                            </div>
                        )
                    })}
                    </Col>
                </Row>

            </div>
    )
}

export default Events