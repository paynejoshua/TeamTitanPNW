import React from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

function CardFront(props){

    return (
        <>
            <Card style={{width: "18rem"}}>
                <Card.Img src={props.photo} variant="top"></Card.Img>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.callSign}</Card.Text>
                    <Button variant="warning" onClick={props.flip}>See More</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default CardFront