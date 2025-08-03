import React from "react";
import videoframe from "../assets/img/video-frame.jpg";
import "../assets/Style/Video.css";

export default function Video() {
  return (
    <div className="video-container">
      <div className="video-background">
        <p className="video-heading">|VIDEO VIEW</p>
        <div className="video-content">
          <h2>Get Closer View & Different Feeling</h2>
        </div>
        <img src={videoframe} alt="" className="video-frame" />
      </div>
    </div>
  );
}
