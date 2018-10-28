import React from "react";
import {Link} from "gatsby";
import "../styles/index.css";

export default () => (
  <div className="MainContent">
        <Link to="/contact/">Contact</Link>
    <div className="BoxBanner">
      <img className="logo" src={require("../../public/img/logo.png")} alt=""/>
      <h1>atsby Tutorial</h1>
    </div>
    <p>Aquí una imagen random bien shidirijilla :)</p>
    <img src="https://source.unsplash.com/random/720x480" alt=""/>
  </div>
);
