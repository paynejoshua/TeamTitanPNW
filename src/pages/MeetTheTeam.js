import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// The following will be added in a future DB version of the website
// import api from "../api/index"
import PhotoUpload from "../components/PhotoUpload/index";
import Tabletop from "tabletop";
import ReactCardFlip from "react-card-flip";
import CardFront from "../components/CardFront";
import CardBack from "../components/CardBack"


function MeetTheTeam() {

    const [profile, setProfile] = useState([])
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        // The following will be added in a future DB version of the website
        // api.getAllProfiles()
        //     .then(res => {
        //         setProfile(res.data.data)
        //     })

        Tabletop.init({
            key: "1RGTkLQ4oS1nNgOvpAjw0IgIFcHrm7weQ8IQKbJxjNxE",
            simpleSheet: true
          })
            .then((data) => {
                setProfile(data)
                console.log(data)
              })
            .catch((err) => console.warn(err));
    }, [])

    // const saveImage = (id, image) => {
    //     console.log(profile)
    //     console.log("image" ,image)
    //     setProfile(profile.map((item) => {
    //         if (item._id == id ) {
    //             console.log("item.profilePic 1", image)
    //             item.profilePic = image
    //             console.log("item.profilePic 2", item.profilePic)
    //         }
    //         return item
    //     }))

    //     window.location.reload()

    // }


    return (
        <div className="fullScreenBG smallScreenBG">
            <header>
                <div className="navItem">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/aboutUs" className="navItem" id="about-us">About Us</Link>
                    <Link to="/meetTheTeam" className="navItem onPage">Meet The Team</Link>
                    <Link to="/events" className="navItem">Events</Link>
                    <Link to="/contactUs" className="navItem">Contact Us</Link>
                    <Link to="/media" className="navItem">Media</Link>
                </div>
            </header>

            <h1 className="pageTitle">Meet The Team</h1>

            <Container className="mt-5">
                <Row>
                {profile.map(item => {
                    return (
                        <Col key={item.name}>

                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            
                            
                            
                            <CardFront key="front"
                                photo={item.Photo}
                                name={item.Name}
                                callSign={item.Callsign}
                                flip={() => setIsFlipped(true)}
                                >
                            </CardFront>

                            <CardBack key="back"
                                squad={item.Squad}
                                rank={item.Rank}
                                flip={() => setIsFlipped(false)}
                                >
                            </CardBack>

                        
                        
                        </ReactCardFlip>    

                        </Col>

                           
                        
                    )
                })}
                </Row>

            </Container>



        </div>
    )
}

export default MeetTheTeam