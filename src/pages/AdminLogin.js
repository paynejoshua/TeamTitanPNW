import { React, useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import API from "../api/index"
import PasswordHash from "../helperFunctions/PasswordHash/index"

function AdminPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function signIn(e) {
        e.preventDefault()

        
            // Store hash in your password DB.
            const payload = {
                email: email,
                password: password
            }
            console.log(password)
            API.adminValidation(payload)
                .then(res => {
                   
                })
 




}


return (
    <>
        <h1 className="pageTitle">Admin Login</h1>
        <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col>
                <Form>
                    <Form.Group controlId="formHorizontalTitle">



                        <Form.Control style={{ width: "100%" }} placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />

                    </Form.Group>
                    <Form.Group controlId="formHorizontalTitle">



                        <Form.Control style={{ width: "100%" }} placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />

                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" onClick={signIn}>Sign In</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </>
)
}

export default AdminPage