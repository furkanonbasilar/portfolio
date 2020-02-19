import React, { useEffect, useRef, Fragment } from "react";
import "./Projects.scss";
import { Image } from "react-bootstrap";
import { TimelineLite, Power3 } from "gsap/dist/gsap";
import Intro from "components/Intro/Intro";
import { ReactComponent as CasesNext } from "assets/arrow-right.svg";
import { ReactComponent as LeftArrow } from "assets/arrow-left.svg";

const Projects = ({ history }) => {
  const projectRef = useRef(null);

  const tl = new TimelineLite({ delay: 0.7 });

  useEffect(() => {
    const firstProjectHeadline = projectRef.current.children[0].children[0];
    const secondProjectHeadline = firstProjectHeadline.nextSibling;

    tl.staggerFrom(
      [firstProjectHeadline.children, secondProjectHeadline.children],
      1,
      { y: 57, delay: 1, ease: Power3.easeOut },
      0.8
    );

    tl.from(projectRef.current.children[1], 0.7, {
      opacity: 0,
      y: 20,
      delay: 1
    });
  }, []);

  return (
    <Fragment>
      <Intro />
      <div className="project_details" ref={projectRef}>
        {console.log("render")}
        <h1 className="project_title">
          <div className="project_content">
            <div>I create projects for fun,</div>
          </div>
          <div className="project_content">
            <div>And improve myself.</div>
          </div>
        </h1>
        <p>
          I found some prepared projects from global resources and I achieved to
          create something unique. First i started to develop e-commerce
          web-sites. In my first web-site, I started from a template and totally
          improvised the rest. After that I joined to OSF Academy. There I
          developed my second e-commerce web-site. I learnt how to use react
          more deeply. And developed responsive layout for different size of
          screens with scss.
        </p>
      </div>
      <div className="image_categories">
        <div className="case-navigation">
          <div className="cases-arrow disabled-arrow">
            <LeftArrow />
          </div>
          <div className="cases-arrow disabled-arrow">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          <div className="case">
            <div className="case-details">
              <h2>First e-Commerce</h2>
            </div>
            <div className="case-image">
              <Image src={require("../../assets/ecommerce2.png")} />
            </div>
          </div>
          <a href="https://my-ecommerce-website.herokuapp.com/" target="_blank">
            <div className="case">
              <div className="case-details">
                <h2>Academy</h2>
              </div>
              <div className="case-image">
                <Image src={require("../../assets/ecommerce.png")} />
              </div>
            </div>
          </a>
          <div className="case">
            <div className="case-details">
              <h2>Dotabuff</h2>
            </div>
            <div className="case-image">
              <Image src={require("../../assets/dotabuff.png")} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
