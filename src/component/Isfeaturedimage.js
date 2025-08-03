import React from "react";
import "../assets/Style/isFeatured.css";
import featured from "../assets/img/featured.jpg";
import featuredicon from "../assets/img/featured-icon.png";

export default function Isfeaturedimage() {
  return (
    <div className="isfimg">
      <img src={featured} alt="" className="featuredimage" />
      <div className="ficon-container">
        <img src={featuredicon} alt="" className="ficon" />
      </div>
    </div>
  );
}
