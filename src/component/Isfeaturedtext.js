import React from "react";
import "../assets/Style/isFeatured.css";
import Accordian from "./Accordian";

export default function Isfeaturedtext() {
  return (
    <div className="isftxt-container">
      <div className="">
        <p className="top-heading">| FEATURED</p>
        <h1 className="heading">Best Appartment & Sea View</h1>
      </div>
      <Accordian />
    </div>
  );
}
