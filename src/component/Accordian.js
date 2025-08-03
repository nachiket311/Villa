import { useState } from "react";
import React from "react";

export default function Accordian({ width, marginTop }) {
  const accordiandata = [
    {
      title: "Best useful Links?",
      content:
        "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
    },
    {
      title: "How does this work?",
      content:
        "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Why is Villa agency is the best?",
      content:
        "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [selected, setSelected] = useState(0);

  const Toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="accordian" style={{ width, marginTop }}>
      {accordiandata.map((item, i) => (
        <div className="accordian-item" key={i}>
          <div
            className={
              selected === i ? "accordian-title active" : "accordian-title"
            }
            onClick={() => Toggle(i)}
          >
            <h3>{item.title}</h3>
          </div>
          <div
            className={
              selected === i ? "accordian-content show" : "accordian-content"
            }
          >
            <h4>{item.content}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
