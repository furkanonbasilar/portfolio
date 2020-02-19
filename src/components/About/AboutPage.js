import React, { useEffect, useRef } from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./AboutPage.scss";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power3 } from "gsap/dist/gsap";

const AboutPage = () => {
  const container = useRef(null);
  const sectionRef = useRef(null);
  const image = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(".image-container:after");
  const hexagonRef = useRef(null);

  const tl = new TimelineLite({ delay: 0.5 });

  useEffect(() => {
    const sectionHeader = sectionRef.current.children[0];
    const underline = sectionHeader.nextSibling;
    const aboutDetails = underline.nextSibling;
    const firstHexagon = hexagonRef.current.children[0];
    const secondHexagon = hexagonRef.current.children[1];
    const thirdHexagon = hexagonRef.current.children[2];
    const fourthHexagon = hexagonRef.current.children[3];
    imageReveal.width = "100%";
    console.log(underline);
    tl.to(container.current, 0, { css: { visibility: "visible" } });
    tl.to(
      imageReveal,
      2.5,
      {
        width: "0%",
        ease: Power3.easeInOut
      },
      "Start"
    ).from(image.current, 1.4, {
      scale: 1.6,
      ease: Power3.easeInOut,
      delay: -2.6
    });
    tl.from(
      [sectionHeader, underline],
      1,
      { opacity: 0, stagger: 0.5, delay: 0.3 },
      "Start"
    );
    tl.from(aboutDetails, 0.7, { y: 100, opacity: 0, delay: 0.7 }, "Start");
    tl.from(
      [firstHexagon, secondHexagon, thirdHexagon, fourthHexagon],
      1,
      {
        opacity: 0,
        stagger: 0.3,
        delay: 1.1
      },
      "Start"
    );
  }, []);

  return (
    <div className="about-container" ref={container}>
      <div className="image-container">
        <Image
          ref={image}
          height="100%"
          src={require("../../assets/furkan3.jpeg")}
        />
      </div>
      <section ref={sectionRef}>
        <h1 className="about-header">About Me</h1>
        <div className="about-underline"></div>
        <p className="about-details">
          I graduated from Celal Bayar University in September 2019 as a
          Computer Engineer. Since from the beginning I am trying to learn
          latest technologies and trying to cross the borders. I started to
          working some of the technologies like C#, Java, React.js, Node.js
          etc.. I am a geek which is currently in love with the games and music
          guru. To understand my point, look at my projects closely. For the
          further information and for all questions feel free to contact me.
        </p>
        <Row ref={hexagonRef}>
          <Col className="col-6 icons_col">
            <div className="hexagon">
              <Image src={require("../../assets/hexagon.png")} />
              <svg viewBox="0 0 24 24">
                <path d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" />
              </svg>
            </div>
            <p className="icon-title">Fast</p>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </Col>
          <Col className="col-6 icons_col">
            <div className="hexagon">
              <Image src={require("../../assets/hexagon.png")} />
              <svg viewBox="0 0 24 24">
                <path d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z" />
              </svg>
            </div>
            <p className="icon-title">Responsive</p>
            <p>My layouts will work on any device, big or small.</p>
          </Col>
          <Col className="col-6 icons_col">
            <div className="hexagon">
              <Image src={require("../../assets/hexagon.png")} />
              <svg viewBox="0 0 24 24">
                <path d="M12,7H15C15.66,7.64 16,8.31 16,9V22H8V15C8,14.72 8.11,14.39 8.3,14L12,7M16,4L15,6H12V5L10,7H9L10,5V4H9V2H14.5A1.5,1.5 0 0,1 16,3.5V4Z" />
              </svg>
            </div>
            <p className="icon-title">Clean</p>
            <p>Writing clean code is important for me</p>
          </Col>
          <Col className="col-6 icons_col">
            <div className="hexagon">
              <Image src={require("../../assets/hexagon.png")} />
              <svg viewBox="0 0 24 24">
                <path d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z" />
              </svg>
            </div>
            <p className="icon-title">Dynamic</p>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutPage;
