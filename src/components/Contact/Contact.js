import React, { useEffect, useRef } from "react";
import "./Contact.scss";
import { Form, Button } from "react-bootstrap";
import { TimelineLite, Power3, Bounce } from "gsap";

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const tl = new TimelineLite({ delay: 0.7 });

  useEffect(() => {
    const firstHeader = contactRef.current.children[0];
    const underLine = contactRef.current.children[1];
    const secondHeader = contactRef.current.children[2];
    const form = formRef.current;

    tl.from([firstHeader, underLine, secondHeader], 0.5, {
      translateX: "100%",
      opacity: 0,
      stagger: 0.2
    });
    tl.from(form, 1.5, { scale: 0, ease: Bounce.easeOut }, "Start");
    tl.from(
      socialRef.current,
      1,
      {
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.5
      },
      "Start"
    );
  }, []);

  return (
    <>
      <div className="contact-form" ref={contactRef}>
        <h1>CONTACT</h1>
        <div className="under-line"></div>
        <h3>Have a question or want to work together?</h3>
        <Form ref={formRef}>
          <Form.Group>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" rows="5" placeholder="Your message" />
          </Form.Group>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </Form>
        <div className="social-links" ref={socialRef}>
          <a
            className="github"
            target="_blank"
            href="https://www.github.com/furkanonbasilar"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="instagram"
            target="_blank"
            href="https://www.instagram.com/furkanonbasilar"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            target="_blank"
            className="linked-in"
            href="https://www.linkedin.com/in/furkan-onba%C5%9Filar-798824165"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="stackoverflow"
            target="_blank"
            href="https://stackoverflow.com/users/12257753/furkan?tab=profile"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
