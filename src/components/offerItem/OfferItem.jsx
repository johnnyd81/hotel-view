import React from "react";
import "./offerItem.css";

const OfferItem = ({ item }) => {
  return (
    <div className="slider-item" key={item.id}>
      <div className="info">
        <h3 className="slider-title">{item.title}</h3>
        <p className="slider-subheading">{item.subHeading}</p>
        <button type="button" className="slider-btn">
          {item.btnTitle}
        </button>
      </div>
      <div className="slider-img-box">
        <img src={item.itemImg} alt="holiday-pic" className="slider-img" />
      </div>
    </div>
  );
};

export default OfferItem;
