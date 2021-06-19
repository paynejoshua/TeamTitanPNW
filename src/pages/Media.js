import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Tabletop from "tabletop"



function Media() {

    const [photos, setPhotos] = useState([])

    



    useEffect(() => {
        // Once database is up and running and photos have been put into database. Have them rendered here

        Tabletop.init({
            key: "1aUGF4Pv_iz5fxQnylvm7jy9gQ1khSj4uqi710rkX0bM",
            simpleSheet: true
          })
            .then((data) => {
                setPhotos(data)
                console.log(photos)
              })
            .catch((err) => console.warn(err));

    }, [])


    return (
        <div className="fullScreenBG smallScreenBG">
            <header>
                <div className="navItem">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                    <Link to="/meetTheTeam" className="navItem">Meet The Team</Link>
                    <Link to="/events" className="navItem">Events</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/media" className="navItem onPage">Media</Link>
                </div>
            </header>
            <h1 className="pageTitle">Media Page</h1>

            <Container className="mt-5">
                <Row className="d-flex justify-content-between">

            {photos.map(item => {
                return (
                
                <Col key={item.Name} xs={12} sm={12} md={6} lg={4} xl={4} xxl={3}>
                
                    <Card  style={{ width: "18rem" }}>
                            
                        <Card.Img alt={item.Name} src={item.Link} style={{ width: "100%"}}></Card.Img>
                   
                    </Card>
                </Col>
                )
            })}

                </Row>

            </Container>
        </div>
    )
}

export default Media