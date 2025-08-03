import React from "react";
import image1 from "../assets/img/info-icon-01.png";
import image2 from "../assets/img/info-icon-02.png";
import image3 from "../assets/img/info-icon-03.png";
import image4 from "../assets/img/info-icon-04.png";

export default function Isfeatureddetail() {
  const detail = [
    {
      image: image1,
      title: "250 m2",
      content: "Total Flat Space",
    },
    {
      image: image2,
      title: "Contract",
      content: "Contract Ready",
    },
    {
      image: image3,
      title: "Payment",
      content: "Payment Process",
    },
    {
      image: image4,
      title: "Safety",
      content: "24/7 Under Control",
    },
  ];

  return (
    <div className="detail-container">
      {detail.map((dti, idx) => (
        <div className="detail-main" key={idx}>
            <div className="detail-data">
              <img className="detail-image" src={dti.image} alt="" />
              <div className="detail-depth">
                <span className="detail-title">{dti.title}</span>
                <span className="detail-content">{dti.content}</span>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}
