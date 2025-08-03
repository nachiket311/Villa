import React, { useState, useEffect } from "react";
import "../assets/Style/Propertiespage.css";
import "../assets/Style/Properties.css";
import PropertyCard from "../component/PropertyCard";
import propertyimage1 from "../assets/img/property-01.jpg";
import propertyimage2 from "../assets/img/property-02.jpg";
import propertyimage3 from "../assets/img/property-03.jpg";
import propertyimage4 from "../assets/img/property-04.jpg";
import propertyimage5 from "../assets/img/property-05.jpg";
import propertyimage6 from "../assets/img/property-06.jpg";

export default function Propertiespage() {
  const [activebutton, setActivebutton] = useState(0);

  const Button = [
    "All",
    "Appartment",
    "Villa House",
    "Penthouse",
    "Modern Condo",
  ];

  const Properties = [
    {
      image: propertyimage1,
      type: "Luxury Villa",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      info: {
        bedroom: "8",
        bathroom: "8",
        area: "545m2",
        floor: "3",
        parking: "6 Spots",
      },
    },
    {
      image: propertyimage2,
      type: "Luxury Villa",
      price: "$1.180.000",
      address: "54 Mid Street Florida, OR 27001",
      info: {
        bedroom: "6",
        bathroom: "5",
        area: "450m2",
        floor: "3",
        parking: "8 Spots",
      },
    },
    {
      image: propertyimage3,
      type: "Luxury Villa",
      price: "$1.460.000",
      address: "26 Old Street Miami, OR 38540",
      info: {
        bedroom: "5",
        bathroom: "4",
        area: "225m2",
        floor: "3",
        parking: "10 Spots",
      },
    },
    {
      image: propertyimage4,
      type: "Apartment",
      price: "$584.500",
      address: "12 New Street Miami, OR 12650",
      info: {
        bedroom: "4",
        bathroom: "3",
        area: "125m2",
        floor: "25th",
        parking: "2 CARS",
      },
    },
    {
      image: propertyimage5,
      type: "Penthouse",
      price: "$925.600",
      address: "34 Beach Street Miami, OR 42680",
      info: {
        bedroom: "4",
        bathroom: "4",
        area: "180m2",
        floor: "38th",
        parking: "2 CARS",
      },
    },
    {
      image: propertyimage6,
      type: "Modern Condo",
      price: "$450.000",
      address: "22 New Street Portland, OR 16540",
      info: {
        bedroom: "3",
        bathroom: "2",
        area: "165m2",
        floor: "26th",
        parking: "3 CARS",
      },
    },
    {
      image: propertyimage3,
      type: "Luxury Villa",
      price: "$980.000",
      address: "14 Mid Street Miami, OR 36450",
      info: {
        bedroom: "8",
        bathroom: "8",
        area: "550m2",
        floor: "3",
        parking: "12 Spots",
      },
    },
    {
      image: propertyimage2,
      type: "Luxury Villa",
      price: "$1.520.000",
      address: "26 Old Street Miami, OR 12870",
      info: {
        bedroom: "12",
        bathroom: "15",
        area: "380m2",
        floor: "3",
        parking: "14 Spots",
      },
    },
    {
      image: propertyimage1,
      type: "Luxury Villa",
      price: "$3.145.000",
      address: "34 New Street Miami, OR 24650",
      info: {
        bedroom: "10",
        bathroom: "12",
        area: "860m2",
        floor: "3",
        parking: "10 Spots",
      },
    },
  ];

  const [filtereddata, setFiltereddata] = useState([]);

  const filteredata = (category) => {
    const filtered = Properties.filter((item) => item.type === category);
    setFiltereddata(filtered);
  };

  const getitems = () => {
    setFiltereddata(Properties);
  };

  const handleclick = (idx) => {
    setActivebutton(idx);
    setFiltereddata(() => {
      if (idx === 0) {
        return Properties;
      } else if (idx === 1) {
        filteredata("Apartment");
      } else if (idx === 2) {
        filteredata("Luxury Villa");
      } else if (idx === 3) {
        filteredata("Penthouse");
      } else if (idx === 4) {
        filteredata("Modern Condo");
      }
    });
  };

  useEffect(() => {
    getitems();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="propertiespage-container">
        <div className="page-location">Home/Properties</div>
        <div className="page-heading">Properties</div>
      </div>
      <div className="center">
        <div className="Propertiespage-button">
          {Button.map((name, idx) => (
            <div
              className={
                activebutton === idx
                  ? "Propertiespage-button-section Active"
                  : "Propertiespage-button-section"
              }
              onClick={() => handleclick(idx)}
              key={idx}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="center">
        <div className="Bottom-container center">
          <PropertyCard Properties={filtereddata} />
        </div>
      </div>
    </>
  );
}
