import React from "react";
import phoneicon from "../assets/img/phone-icon.png";
import mailicon from "../assets/img/email-icon.png";

export default function ContactButton({ height, width }) {
  const data = [
    {
      image: phoneicon,
      Toptext: "010-020-0340",
      Bottomtext: "Phone Number",
    },
    {
      image: mailicon,
      Toptext: "Demo@mail.co",
      Bottomtext: "Business Email",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div className="common" key={index}>
          <div className="con-phone">
            <div className="phone-img">
              <img className="contact-icon" src={item.image} alt="" />
            </div>
            <div className="con-txt">
              <span className="con-phonenumber">{item.Toptext}</span>
              <span className="con-phone-txt">{item.Bottomtext}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
