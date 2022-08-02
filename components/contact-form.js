import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button, InputGroup } from "react-bootstrap";
import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const FORMSPARK_FORM_ID = "12lwBpSd";

export default function ContactForm() {
  const [validated, setValidated] = useState(false);
  const router = useRouter();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else{
      e.preventDefault();
      await submit({ name, email, subject, message});
      router.push("/thankyou")
    } 
    setValidated(true);
  };

  const { ref, inView, entry } = useInView({threshold: 0.3});
  const animation = useAnimation();

  useEffect(()=>{
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,  
        }
      });
    }
      if(!inView){
        animation.start({opacity: 0}) 
      }
  }, [inView]);

  return (
    <>
      <div ref={ref} >
        <motion.div className="p-5 rounded shadow-sm" animate={animation} >
        <Form
          name="contact"
          noValidate
          validated={validated}
          onSubmit={onSubmit} 
        >
          <div className="col-lg-12">
            <h3 className="mb-4">Get in touch</h3>
          </div>
          <input
            type="checkbox"
            name="_honeypot"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          {/* <input type="hidden" name="_redirect" value="https://nxne.vercel.app/thankyou"/> */}
          {/* <input type="hidden" name="_email.from" value={name} /> */}
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formName">
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your Name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formSubject">
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a subject.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTextarea">
            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                name="textarea"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <motion.div
            className="text-center"
            whileTap={{ scale: 0.9, opacity: 0.5 }}
          >
            <Button variant="primary" type="submit" disabled={submitting}>
              Submit
            </Button>
          </motion.div>
        </Form>
        </motion.div>
      </div>
    </>
  );
}
