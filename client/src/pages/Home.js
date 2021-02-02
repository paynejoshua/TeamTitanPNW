import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


function Home() {


    return (
        <>
            <div className="fullScreenBG smallScreenBG">

                <Row className="d-flex h-100 justify-content-center justify-content-md-start">
                    <Col xs={12} className='d-flex justify-content-center justify-content-md-start'>
                        <Jumbotron className="transparent">
                            <div className="title">Team Titan PNW</div>
                        </Jumbotron>
                    </Col>
                    <div>

                        <Col xs={12} className='d-flex justify-content-center justify-content-md-start'>
                            <Link to="/aboutUs" id="about-us" className="menuItem">About Us</Link>
                        </Col>
                        <Col xs={12} className='d-flex justify-content-center justify-content-md-start'>
                            <Link to="/meetTheTeam" id="meet-the-team" className="menuItem">Meet the Team</Link>
                        </Col>
                        <Col xs={12} className='d-flex justify-content-center justify-content-md-start'>
                            <Link to="/events" id="calendarLink" className="menuItem">Events</Link>
                        </Col>
                        <Col xs={12} className='d-flex justify-content-center justify-content-md-start'>
                            <Link to="/contactUs" id="contact-us" className="menuItem">Contact Us</Link>
                        </Col>
                        <Col xs={12} className='d-flex justify-content-center justify-content-md-start'>
                            <Link to="/media" id="media" className="menuItem">Media</Link>
                        </Col>
                    </div>

                </Row>
            </div>

            
        </>



    )
}

export default Home