import React from "react";
// styles
import "./ContactSection.css"
// bootstrap components
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'

function ContactSection() {
    return (
        <div className="contact-container">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <h3>Contact Maeve</h3>
                        <Form action="https://formsubmit.co/maeveobyrne1961@gmail.com" method="POST">
                            <Form.Group>
                                {/* spam catcher to make captcha page redunadant */}
                                <Form.Control type="hidden" name="_spamcatch" className="d-none" />
                                {/* disable captcha page */}
                                <Form.Control type="hidden" name="_captcha" value="false" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="your first name" name="First Name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="your last name" name="Last Name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="your email address" name="Email Address" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="your message" name="Message" />
                            </Form.Group>
                            <Button type="submit" className="btn-harbour">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        {/* contact details to be added later? */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactSection