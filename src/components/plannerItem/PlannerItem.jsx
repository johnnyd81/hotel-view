import React from "react";
import "./plannerItem.css";

const PlannerItem = ({ item }) => {
  return (
    <div className="planner-item" key={item.id}>
      <img src={item.pic} alt="planner-img" />
      <h4 className="planner-item-name">{item.name}</h4>
      <p className="planner-item-distance">{item.distance} km</p>
    </div>
  );
};

export default PlannerItem;
