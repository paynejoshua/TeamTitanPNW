import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

function CardBack(props){

    return (
        <>
             <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Title>{props.squad}</Card.Title>
                    <Card.Text>{props.rank}</Card.Text>
                    <Button variant="warning" onClick={props.flip}>See Less</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardBack