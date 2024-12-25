import React from "react";
import "./tripPlanner.css";
import PlannerItem from "../plannerItem/PlannerItem";

const TripPlanner = () => {
  // array that contains all the destinations a user can choose from
  const plannerDetails = [
    {
      id: 0,
      name: "Ballito",
      distance: 479,
      pic: "/images/ballito.jpeg",
    },
    {
      id: 1,
      name: "Umdloti",
      distance: 485,
      pic: "/images/umdloti.jpeg",
    },
    {
      id: 2,
      name: "Richard's Bay",
      distance: 490,
      pic: "/images/richardsbay.jpeg",
    },
    {
      id: 3,
      name: "St Lucia",
      distance: 492,
      pic: "/images/stlucia.jpeg",
    },
    { name: "Durban", distance: 495, pic: "/images/durbannight.jpeg" },
    {
      id: 4,
      name: "Amanzimtoti",
      distance: 506,
      pic: "/images/amanzimtoti.jpeg",
    },
    {
      id: 5,
      name: "Port Shepstone",
      distance: 552,
      pic: "/images/portshepstone.jpeg",
    },
    {
      id: 6,
      name: "Margate",
      distance: 561,
      pic: "/images/margate.jpeg",
    },
    {
      id: 7,
      name: "Southbroom",
      distance: 564,
      pic: "/images/southbroom.jpeg",
    },
    {
      id: 8,
      name: "Port Edward",
      distance: 575,
      pic: "/images/portedward.jpeg",
    },
    {
      id: 9,
      name: "Coffee Bay",
      distance: 647,
      pic: "/images/coffeebay.jpeg",
    },
  ];
  return (
    <div className="planner-main">
      <div className="planner-heading">
        <h2>Quick and easy trip planner</h2>
        <p>Pick a vibe and explore the top destinations in South Africa</p>
      </div>
      <div className="planner-container">
        <div className="planner-slider">
          {plannerDetails.map((item, index) => (
            <PlannerItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
