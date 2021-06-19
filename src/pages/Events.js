import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/index"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";
import Tabletop from "tabletop"

function Events() {
    const [events, setEvents] = useState([])
    const [currentDay, setCurrentDay] = useState()

    useEffect(() => {
        // The following will be used in future DB version of site
        // var today = new Date(),

        //     date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

        // setCurrentDay(date)

        // API.getAllEvents()
        //     .then(res => {

        //         setEvents(res.data.data)

        //     })

        // The following will be used for now:

        Tabletop.init({
            key: "1OhumI6qpZMKMAMWOqxqN0tTCtQjDfVXyriUcwo3o67w",
            simpleSheet: true
          })
            .then((data) => {
                setEvents(data)
                console.log(data)
              })
            .catch((err) => console.warn(err));
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
                                    <Col sm={12} lg={12} className="eventItem">{item.Date}</Col>

                                    <Col sm={12} lg={12} className="eventItem">{item.Name}</Col>

                                    {/* <Col sm={12} lg={12} className="eventItem">Start Time: {item.startTime}</Col>

                                    <Col sm={12} lg={12} className="eventItem">End Time: {item.endTime}</Col> */}

                                    {/* <Col sm={12} lg={12} className="eventItem">{item.field}</Col> */}

                                    <Col sm={12} lg={12} className="eventItem">{item.location}</Col>
                                    
                                    {
                                        item.Photo !== "" &&
                                            <Col sm={12} lg={12} className="eventItem"><img alt="event" src={item.Photo} style={{width: "10rem"}}></img></Col>
                                    }
                                    {
                                        item.EventLink !== "" &&
                                    
                                            <Col sm={12} lg={12} className="eventItem"><Button href={item.EventLink} target="_blank">Click Here for Event Page</Button></Col>
                                    }


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