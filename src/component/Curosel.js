import React, { useState } from "react";
import "../assets/Style/Curoselstyle.css";
import img1 from "../assets/img/banner-01.jpg";
import img2 from "../assets/img/banner-02.jpg";
import img3 from "../assets/img/banner-03.jpg";

export default function Curosel() {
  const Curoselimg = [img1, img2, img3];
  const contain = [
    {
      image: img1,
      city: "Toronto , ",
      country: "Canada",
      text: "Hurry! Get The Best Villa For You",
    },
    {
      image: img2,
      city: "Melbourne , ",
      country: "Australia",
      text: "Be Quick! Get The Best Villa In Town",
    },
    {
      image: img3,
      city: "Miami , ",
      country: "South Florida",
      text: "Act Now! Get The Highest Level PentHouse",
    },
  ];

  const [id, setId] = useState(0);

  const gonext = () => {
    setId(id >= Curoselimg.length - 1 ? 0 : id + 1);
  };

  const goprev = () => {
    setId(id <= 0 ? Curoselimg.length - 1 : id - 1);
  };

  return (
    <div className="container-curosel">
      {/* <div className="curosel-main"> */}
      <div className="arrow-main">
        <div className="arrow">
          <i className="fa-solid fa-chevron-left i-color" onClick={goprev}></i>
          <i className="fa-solid fa-chevron-right i-color" onClick={gonext}></i>
        </div>
      </div>

      {contain.map((ctn, indx) => (
        <div className={id === indx ? "curosel-main" : "curosel-main d-none"} key={indx}>
          <img
            src={ctn.image}
            alt="Flats"
            key={indx}
            className={id === indx ? "cimage" : "Cimage Cimage-hidden"}
          />
          <div className={id === indx ? "header-main" : ""} key={-1 - indx}>
            <div className="title">
              <p className="city">{id === indx ? ctn.city : ""}</p>
              <p className="country">{id === indx ? ctn.country : ""}</p>
            </div>
            <div className="text">
              <h1>{id === indx ? ctn.text : ""}</h1>
            </div>
          </div>
          <div className="dots-main">
            {Curoselimg.map((cimg, idx) => (
              <div
                className={id === idx ? "dots" : "dots dots-hidden"}
                onClick={() => {
                  setId(idx);
                }}
                key={-4 - idx}
              ></div>
            ))}
          </div>
        </div>
      ))}

      {/* <div className="dots-main">
          {Curoselimg.map((cimg, idx) => (
            <div
              className={id === idx ? "dots" : "dots dots-hidden"}
              onClick={() => {
                setId(idx);
              }}
              key={-4 - idx}
            ></div>
          ))}
        </div> */}
    </div>
    // </div>
  );
}
