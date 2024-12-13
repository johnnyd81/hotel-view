import React from "react";
import "./destItem.css";

//destination item component to display various travel destinations
const DestItem = ({ item }) => {
  return (
    <div className="dest-item" key={item.id}>
      <img src={item.destPic} alt="destination-pic" className="dest-pic" />
      <p className="dest-title">{item.destTitle}</p>
    </div>
  );
};

export default DestItem;
