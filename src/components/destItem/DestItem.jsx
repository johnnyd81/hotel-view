import React from "react";
import "./destItem.css";

//destination item component to display various travel destinations
// the item prop contains all the information the DestItem component needs i.e. the picture, id, title etc.
const DestItem = ({ item }) => {
  return (
    <div className="dest-item" key={item.id}>
      <img src={item.destPic} alt="destination-pic" className="dest-pic" />
      <p className="dest-title">{item.destTitle}</p>
    </div>
  );
};

export default DestItem;
