import React from "react";
import "../assets/Style/Contact.css";

import ContactForm from "./ContactForm";
import Cotactustop from "./Cotactustop";
import ContactButton from "./ContactButton";
import IndiaMap from "./IndiaMap";

export default function Contactus() {
  return (
    <div className="Contact-container">
      <Cotactustop />
      <div className="contact-bottom">
        <div className="map-container">
          <div className="map">
            <IndiaMap />
          </div>
          <div className="phone-container">
            <ContactButton />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
