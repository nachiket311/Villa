import React from "react";

export default function Cotactustop({
  color,
  alignItems,
  textAlign,
  width,
  paddingTop,
}) {
  return (
    <div className="Contact-heading" style={{ alignItems, paddingTop }}>
      <div className="top-header">| CONTACT US</div>
      <div className="top-content" style={{ color, textAlign, width }}>
        Get In Touch With Our Agents
      </div>
    </div>
  );
}
