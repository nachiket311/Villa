import React from "react";
import "../assets/Style/Properties.css";

import Propertiestop from "./Propertiestop";
import PropertiesBottom from "./PropertiesBottom";

export default function Properties() {
  return (
    <div className="Properties-container center">
      <Propertiestop />
      <PropertiesBottom />
    </div>
  );
}
