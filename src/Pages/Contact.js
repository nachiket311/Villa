import React from "react";
import Cotactustop from "../component/Cotactustop";
import "../assets/Style/Contact.css";
import "../assets/Style/Contactpage.css";
import ContactButton from "../component/ContactButton";
import ContactForm from "../component/ContactForm";
import IndiaMap from "../component/IndiaMap";

export default function Contact() {
  return (
    <>
      <div className="contactuspage-container">
        <div className="page-location">Home/Contact us</div>
        <div className="page-heading">Contact us</div>
      </div>
      <div className="contact-page-main">
        <div className="contact-page">
          <div className="main">
            <Cotactustop
              color="black"
              alignItems="start"
              textAlign="left"
              width="60%"
              paddingTop="0"
            />
            <p>
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </p>
            <ContactButton height="17%" width="50%" />
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="map-contact">
        <div className="map-ap">
          <IndiaMap />
        </div>
      </div>
    </>
  );
}
