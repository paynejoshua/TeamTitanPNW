import React from "react";
import { Link } from "react-router-dom";
import {Row, Col, Form, FormControl, InputGroup, Button} from "react-bootstrap"

function ContactUs() {

    return (
        <>
            <header>
                <Link to="/home" className="navItem">Home</Link>
                <Link to="/aboutUs" className="navItem">About Us</Link>
                <Link to="/events" className="navItem">Events</Link>
                <Link to="/media" className="navItem">Media</Link>
                <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
            </header>
            
            <h1 className="pageTitle">Contact Us</h1>

                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col>
                    <Form>
                <Form.Group  controlId="formHorizontalTitle">
                

          
                        <Form.Control style={{width: "100%"}} placeholder="Name" />
               
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalTitle">
                

                  
                        <Form.Control style={{width: "100%"}} placeholder="Email" />
                  
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBody">

                   
                        <InputGroup>
                            <FormControl as="textarea" style={{width: "45rem"}} rows={25} placeholder="Question" />
                        </InputGroup>
             
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Send Question</Button>
                    </Col>
                </Form.Group>



            </Form>
                    </Col>
                </Row>
            
        </>
    )
}

export default ContactUs