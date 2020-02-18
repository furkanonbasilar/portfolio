import React, { useRef, useEffect } from "react";
import "./Intro.scss";
import { TimelineLite, Power3 } from "gsap";
import { greenSockHelper } from "helpers/greenSockHelper";

const Intro = () => {
  const tl = new TimelineLite({ delay: 3 });
  const introTop = useRef(null);
  const introBottom = useRef(null);

  useEffect(() => {
    const firstTopMask = introTop.current.children[0].children[0];
    const secondTopMask = introTop.current.children[1].children[0];
    const thirdTopMask = introTop.current.children[2].children[0];
    const firstBottomMask = introBottom.current.children[0].children[0];
    const secondBottomMask = introBottom.current.children[1].children[0];
    const thirdBottomMask = introBottom.current.children[2].children[0];

    tl.staggerTo(
      [firstTopMask, secondTopMask, thirdTopMask],
      1,
      { y: "101%", ease: Power3.easeIn },
      0.3,
      "TopStart"
    );
    tl.staggerTo(
      [firstBottomMask, secondBottomMask, thirdBottomMask],
      1,
      { x: "101%", ease: Power3.easeIn },
      0.2
    );
  }, []);
  return (
    <div className="intro">
      <div className="intro-top" ref={introTop}>
        <div className="intro-shape">
          <div className="intro-mask"></div>
        </div>
        <div className="intro-shape">
          <div className="intro-mask"></div>
        </div>
        <div className="intro-shape">
          <div className="intro-mask"></div>
        </div>
      </div>
      <div className="intro-bottom" ref={introBottom}>
        <div className="intro-shape">
          <div className="intro-mask"></div>
        </div>
        <div className="intro-shape">
          <div className="intro-mask"></div>
        </div>
        <div className="intro-shape">
          <div className="intro-mask"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
