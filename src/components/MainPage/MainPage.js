import React, { useRef, useEffect, Fragment } from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./MainPage.scss";
import { TimelineLite, Power3 } from "gsap/dist/gsap";
import { Link } from "react-router-dom";

const MainPage = () => {
  const image = useRef(null);
  const content = useRef(null);

  const tl = new TimelineLite({ delay: 0.4 });

  useEffect(() => {
    const headlineFirst = content.current.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const contentP = content.current.children[1];
    const contentLink = content.current.children[2];
    const photo1 = image.current.children[0];
    const photo2 = image.current.children[1];

    // pictures
    tl.from(photo1, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        photo1.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(photo2, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        photo2.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    // paragraphs
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children],
      1,
      { y: 55, ease: Power3.easeOut, delay: 0.8 },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentLink, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <Row id="row_id" className="about__row">
      <Col ref={content} className="col-6 about_me">
        <h1>
          <div className="content-line">
            <div>WHO IS THIS</div>
          </div>
          <div className="content-line">
            <div>Furkan ONBAŞILAR</div>
          </div>
        </h1>
        <p className="details_me">
          Hello. My name is Furkan ONBAŞILAR. I have graduated from Celal Bayar
          University in 2019 of September. I like to coding, listening music and
          playing games.
        </p>
        <Link to="/about" className="more_about_me">
          More about me
          <button className="about_button">
            <i className="fas fa-long-arrow-alt-right fa-2x"></i>
          </button>
        </Link>
      </Col>

      <Col className="col-6 images__col" ref={image}>
        <div className="photo_1 image">
          <Image src={require("../../assets/furkan1.jpg")} />
        </div>
        <div className="photo_2 image">
          <Image src={require("../../assets/furkan2.jpeg")} />
        </div>
      </Col>
    </Row>
  );
};

export default MainPage;
