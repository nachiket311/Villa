import React from "react";
import "../assets/Style/isFeatured.css";
import Isfeaturedimage from "./Isfeaturedimage";
import Isfeaturedtext from "./Isfeaturedtext";
import Isfeatureddetail from "./Isfeatureddetail";

export default function Isfeatured() {
  return (
    <div className="isfeatured-container">
      <Isfeaturedimage />
      <Isfeaturedtext />
      <Isfeatureddetail />
    </div>
  );
}
