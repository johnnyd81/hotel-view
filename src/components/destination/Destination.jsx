import React from "react"; //import the react library
import "./destination.css";//import the css file
import DestItem from "../destItem/DestItem";

const Destination = () => {
  // array that contains the destination detail objects
  const destDetails1 = [
    { id: 0, destPic: "images/cape.jpeg", destTitle: "Cape town" },
    { id: 1, destPic: "images/durban.jpeg", destTitle: "Durban" },
  ];

  // array that contains the more destination details
  const destDetails2 = [
    { id: 2, destPic: "images/joburg.jpeg", destTitle: "Johannesburg" },
    { id: 3, destPic: "images/pretoria.jpeg", destTitle: "Pretoria" },
    { id: 4, destPic: "images/bloemfontein.jpeg", destTitle: "Bloemfontein" },
  ];
  return (
    <div className="dest-main">
      <div className="dest-heading">
        <h2>Trending destinations</h2>
        <p>Most popular choices for travellers from South Africa</p>
      </div>
      <div className="dest-container">
        <div className="dest-container-1">
          {destDetails1.map((item) => (
            <DestItem key={item.id} item={item} />
          ))}
        </div>
        <div className="dest-container-2">
          {destDetails2.map((item) => (
            <DestItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
