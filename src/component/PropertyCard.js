import React from "react";

export default function PropertyCard(Props) {
  return (
    <>
      {Props.Properties.map((card, index) => (
        <div className="Propertycard-container center" key={index}>
          <div className="section1">
            <img className="card-img" src={card.image} alt="" />
          </div>
          <div className=" section2">
            <div className="lower">
              <div className="type">
                <div className="button-type center">{card.type}</div>
                <div className="price">{card.price}</div>
              </div>
              <div className="address">{card.address}</div>
              <div className="info">
                <div className="info-top">
                  <div className="txt-color">
                    <span className="txt-span"> Bedroom:</span>
                    {card.info.bedroom}
                  </div>
                  <div className="txt-color">
                    <span className="txt-span">Bathrooms:</span>
                    {card.info.bathroom}
                  </div>
                </div>
                <div className="bottom-info">
                  <div className="txt-color">
                    <span className="txt-span">Area:</span>
                    {card.info.area}
                  </div>
                  <div className="txt-color">
                    <span className="txt-span">Floor:</span>
                    {card.info.floor}
                  </div>
                  <div className="txt-color">
                    <span className="txt-span">Parking:</span>
                    {card.info.parking}
                  </div>
                </div>
              </div>
            </div>
            <div className="button-card center">
              <div className="Button-Card center">Shedual a visit</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
