import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import SuccessMessage from "./success-message";

export default function ContactForm() {
  const [show, setShow] = useState(false);
  const formSubmitHandeler = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <div className="col-lg-6 col-md-7">
        <div className="p-5 rounded box-shadow">
          {!show && (
            <Form
              name="contact"
              method="POST"
              // action="/thankyou/#contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={formSubmitHandeler}
            >
              <div className="col-lg-12">
                <h3 className="mb-4">Get in touch</h3>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <p className="d-none">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Control
                  as="textarea"
                  name="textarea"
                  placeholder="Message"
                  required
                  rows={4}
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          )}
          {show && <SuccessMessage />}
        </div>
      </div>
    </>
  );
}
