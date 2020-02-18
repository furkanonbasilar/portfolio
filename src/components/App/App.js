import React, { Fragment } from "react";
import "./App.scss";
import Header from "components/Header/Header";
// import Header from "../Header2/Header";
import MainPage from "components/MainPage/MainPage";
import Projects from "components/Projects/Projects";
import { Route, Switch } from "react-router-dom";
import AboutPage from "components/About/AboutPage";
import Contact from "components/Contact/Contact";

const App = () => {
  return (
    <Fragment>
      <div className="main-container">
        <Header />
        <div className="height_container">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
