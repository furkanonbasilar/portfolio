import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { TimelineLite, Power3 } from "gsap";
import "./BurgerMenu.scss";

const BurgerMenu = ({ menuState }) => {
  const menuLayer = useRef(null);
  const header = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    const blackReveal = menuLayer.current.children[0];
    const redReveal = menuLayer.current.children[1];
    const line1 = header.current.children[0].children;
    const line2 = header.current.children[1].children;
    const line3 = header.current.children[2].children;
    const line4 = header.current.children[3].children;

    if (menuState.clicked === false) {
      // close menu
      tl.staggerTo(
        [blackReveal, redReveal],
        0.8,
        {
          height: "0%",
          ease: Power3.easeInOut
        },
        -0.07,
        "CloseReveal"
      );

      tl.to(menuLayer.current, 0, { display: "none" });
    } else if (menuState.clicked === true) {
      // open menu

      menuLayer.current.style.display = "block";
      tl.staggerTo(
        [blackReveal, redReveal],
        0.8,
        {
          height: "100%",
          ease: Power3.easeInOut
        },
        0.1,
        "StartReveal"
      );
      tl.staggerFrom(
        [line1, line2, line3, line4],
        0.8,
        {
          y: 150,
          ease: "power3.inOut",
          delay: 0.1
        },
        0.1,
        "StartReveal"
      );
    }
  }, [menuState]);
  return (
    <div className="hamburger-menu" ref={menuLayer}>
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-container">
          <Row>
            <Col className="col-6">
              <div className="menu-links">
                <nav>
                  <ul className="header" ref={header}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col className="col-6"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
