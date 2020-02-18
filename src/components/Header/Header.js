import React, { useRef, useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import "./Header.scss";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  const buttonRef = useRef(null);
  const [state, setState] = useState({
    initial: true,
    clicked: null
  });
  const [disabled, setDisabled] = useState(false);

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 850);
  };

  useEffect(() => {
    history.listen(() => {
      disableMenu();
      setState({ clicked: false });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === true) {
      // @ts-ignore
      setState({
        initial: null,
        clicked: true
      });
      console.log(state.clicked);
    } else if (state.clicked === true) {
      // @ts-ignore
      setState({
        clicked: false
      });
    } else if (state.clicked === false) {
      // @ts-ignore
      setState({
        clicked: true
      });
    }
  };
  console.log(state.clicked);
  return (
    <Navbar expand="lg" className="navbar_height">
      <button
        onClick={handleMenu}
        disabled={disabled}
        className="self-burger-button"
      >
        {!state.clicked ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <svg className="cross" viewBox="0 0 512.001 512.001">
            <g>
              <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z" />
            </g>
          </svg>
        )}
      </button>

      <BurgerMenu menuState={state} />
    </Navbar>
  );
};

export default withRouter(Header);
