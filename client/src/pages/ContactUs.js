import {React, useState} from "react";
import { Link } from "react-router-dom";
import {Row, Col, Form, FormControl, InputGroup, Button} from "react-bootstrap"
import API from "../api/index"

function ContactUs() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [question, setQuestion] = useState()
    const [validated, setValidated] = useState(false)

    function sendMessage() {
        
        if(!name || !email || !subject || !question){
            alert("Please input all fields")
        }

        const payload = {
            name: name,
            email: email,
            subject: subject,
            message: question
        }
        API.createMessage(payload)
    }

    return (
        <>
            <header>
                <div className="nav">
                <Link to="/home" className="navItem">Home</Link>
                <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                <Link to="/events" className="navItem">Events</Link>
                <Link to="/contactUs" className="navItem onPage">Contact Us</Link>
                <Link to="/media" className="navItem">Media</Link>
                </div>
            </header>
            
            <h1 className="pageTitle">Contact Us</h1>

                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col>
                    <Form noValidate validated={validated}>
                <Form.Group as={Row} controlId="formHorizontalTitle">
                

          
                        <Form.Control style={{width: "100%"}} placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}/>
               
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalTitle">
                

                  
                        <Form.Control style={{width: "100%"}} type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                  
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalTitle">
                

                  
                        <Form.Control style={{width: "100%"}} placeholder="Subject" name="subject" onChange={(e) => setSubject(e.target.value)}/>
                  
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBody">

                   
                        <InputGroup>
                            <FormControl as="textarea" style={{width: "45rem"}} rows={25} placeholder="Question" name="question" onChange={(e) => setQuestion(e.target.value)} />
                        </InputGroup>
             
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={sendMessage}>Send Question</Button>
                    </Col>
                </Form.Group>



            </Form>
                    </Col>
                </Row>
            
        </>
    )
}

export default ContactUs