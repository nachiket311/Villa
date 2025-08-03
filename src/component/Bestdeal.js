import React, { useState } from "react";
import "../assets/Style/Bestdeal.css";
import dealappartment from "../assets/img/deal-01.jpg";
import dealvilla from "../assets/img/deal-02.jpg";
import dealpenthouse from "../assets/img/deal-03.jpg";

export default function Bestdeal() {
  const Buttondata = ["Appartment", "Villa House", "PentHouse"];
  const innerleft = [
    {
      text: "Total Flat Space",
      Appartment: "185 m2",
      VillaHouse: "250 m2",
      Penthouse: "350 m2",
    },
    {
      text: "Floor Number",
      Appartment: "26th",
      VillaHouse: "25th",
      Penthouse: "34th",
    },
    {
      text: "Number of Rooms",
      Appartment: "4",
      VillaHouse: "5",
      Penthouse: "6",
    },
    {
      text: "Parking Available",
      Appartment: "Yes",
      VillaHouse: "Yes",
      Penthouse: "Yes",
    },
    {
      text: "Payment Process",
      Appartment: "Bank",
      VillaHouse: "Bank",
      Penthouse: "Bank",
    },
  ];
  const middlebottom = [dealappartment, dealvilla, dealpenthouse];

  const rightbottom = [
    {
      heading: "Extra Info About Property",
      firstpara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      secondpara:
        "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    },
    {
      heading: "Detail Info About Villa",
      firstpara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      secondpara:
        "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
    },
    {
      heading: "Extra Info About Penthouse",
      firstpara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      secondpara:
        "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
    },
  ];

  const [activeid, setActiveid] = useState(0);

  const handlevalue = (idx) => {
    setActiveid(idx);
  };

  return (
    <div className="Best-deal-container">
      <div className="top-container-bestdeal">
        <div className="top-heading-bestdeal">
          <div className="title-bestdeal">| BEST DEAL</div>
          <div className="content-bestdeal">Find Your Best Deal Right Now!</div>
        </div>
        <div className="button-container">
          <div className="button-main">
            {Buttondata.map((content, idx) => (
              <div
                className={activeid === idx ? "button activebutton" : "button"}
                key={idx}
                onClick={() => handlevalue(idx)}
              >
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="left-bottom-container">
          {innerleft.map((item, index) => (
            <div className="inner-left-bottom" key={index}>
              <p className="left-text">{item.text}</p>
              <h2 className="h2">
                {activeid === 0
                  ? item.Appartment
                  : activeid === 1
                  ? item.VillaHouse
                  : item.Penthouse}
              </h2>
            </div>
          ))}
        </div>
        <div className="middle-bottom-container">
          {middlebottom.map((itm, i) => (
            <img
              className={activeid === i ? "imagedeal" : "imagedealnone"}
              src={activeid === i ? itm : null}
              alt=""
              key={i}
            />
          ))}
        </div>
        <div className="right-bottom-container">
          <div className="info-bottom">
            {rightbottom.map((info, indx) => (
              <div className="info-bottom-text" key={indx}>
                <h3 className={activeid === indx ? "h3" : "dnone"}>
                  {activeid === indx ? info.heading : ""}
                </h3>
                <p className={activeid === indx ? "p1" : "dnone"}>
                  {activeid === indx ? info.firstpara : ""}
                </p>
                <p className={activeid === indx ? "p2" : "dnone"}>
                  {activeid === indx ? info.secondpara : ""}
                </p>
              </div>
            ))}
            <div className="schedualdeal">
              <span className="center">
                <i className="fa-solid fa-plane"></i>
              </span>
              <div className="tourdeal"> Schedual a Tour </div>
            </div>
          </div>
          <div className="test"></div>
        </div>
      </div>
    </div>
  );
}
