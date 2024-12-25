import React from "react";
import "./offer.css";
import OfferItem from "../offerItem/OfferItem";

const OfferSlider = () => {
  //itemDetails are added dynamically to each Offeritem component as each item represents one object in the itemDetails array
  const itemDetails = [
    {
      title: "Take your best holiday yet",
      subHeading: "Browse properties offering the very best in monthly rates",
      btnTitle: "Find stay",
      itemImg: "images/family.jpeg",
      id: 0,
    },
    {
      title: "Search for flights",
      subHeading: "Compare flights and book with more flexibility",
      btnTitle: "Find flight",
      itemImg: "images/airplane.png",
      id: 1,
    },
    {
      title: "New year, new experiences",
      subHeading: "Save 20% or more by booking a stay before 1 April 2024",
      btnTitle: "Find early 2024 Deals",
      itemImg: "images/family-trip.jpeg",
      id: 2,
    },
  ];
  return (
    <div className="offer-main">
      <div className="offer-heading">
        <h2>Offers</h2>
        <p>Promotions, deals and special offers for you</p>
      </div>
      <div className="offer-container">
        <div className="offer-slider">
          {itemDetails.map((item) => (
            <OfferItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSlider;
