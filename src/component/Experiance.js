import React from "react";
import "../assets/Style/Experiance.css";
import Experiancecard from "./Experiancecard";

export default function Experiance() {
  const exp = [
    {
      Number: "34",
      Content: "Buildings Finished Now",
    },
    {
      Number: "12",
      Content: "Years Experience",
    },
    {
      Number: "24",
      Content: "Awwards Won 2023",
    },
  ];

  return (
    <div className="exp-container">
      {exp.map((itm, index) => (
        <Experiancecard key={index} Data={itm} />
      ))}
    </div>
  );
}
