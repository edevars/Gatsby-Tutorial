import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

function Contact() {
  return (
    <>
      <Header Text="Esta es la mejor página de contacto " />
      <p>Así que...Contactanos! </p>
      <Link to="/">Regresemos a casa </Link>
      <span role="img" aria-label="happy">😊</span>
    </>
  );
}
export default Contact;
