import React from "react";
import "../assets/Style/Propertydetail.css";
import propertyimage from "../assets/img/single-property.jpg";
import image1 from "../assets/img/info-icon-01.png";
import image2 from "../assets/img/info-icon-02.png";
import image3 from "../assets/img/info-icon-03.png";
import image4 from "../assets/img/info-icon-04.png";
import Bestdeal from "../component/Bestdeal";
import Accordian from "../component/Accordian";

export default function Propertydetail() {
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
    <>
      <div className="propertiesdetail-container">
        <div className="page-location">Home/SINGLE PROPERTY</div>
        <div className="page-heading">SINGLE PROPERTY</div>
      </div>
      <div className="top-property-detail">
        <div className="top-property-detail-image">
          <img className="image-single" src={propertyimage} alt="" />
        </div>
        <div className="detail-container">
          {detail.map((dti, idx) => (
            <div className="detail-main" key={idx}>
              {
                <div className="detail-data">
                  <img className="detail-image" src={dti.image} alt="" />
                  <div className="detail-depth">
                    <span className="detail-title">{dti.title}</span>
                    <span className="detail-content">{dti.content}</span>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
      <div className="detail-text-main">
        <div className="detail-text">
          <div className="detail-text-top">
            <div className="button-detail">Appartment</div>
            <h2>24 New Street Miami, OR 24560</h2>
          </div>
          <div className="detail-para">
            <p>
              Get the best villa agency HTML CSS Bootstrap Template for your
              company website. TemplateMo provides you the best free CSS
              templates in the world. Please tell your friends about it. Thank
              you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr
              succulents single-origin coffee schlitz enamel pin you probably
              haven't heard of them ugh hella.
            </p>
            <p>
              When you look for free CSS templates, you can simply type
              TemplateMo in any search engine website. In addition, you can type
              TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
              Master cleanse +1 intelligentsia swag post-ironic, slow-carb
              chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie
              pop-up.
            </p>
          </div>
        </div>
        <Accordian width="70%" marginTop="0" />
      </div>

      <Bestdeal />
    </>
  );
}
