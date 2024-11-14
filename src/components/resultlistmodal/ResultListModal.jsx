import React from "react";
import "./resultListModal.css";

const ResultListModal = ({
  destination,
  setDestination,
  setMin,
  setMax,
  show,
}) => {
  return (
    <div className={`resultListModal ${show}`}>
      <h1 className="listTitle">Search by price range</h1>
      <div className="listItem">
        <label>Destination</label>
        <select
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        >
          <option value="johannesburg">Johannesburg</option>
          <option value="cape town">Cape Town</option>
          <option value="durban">Durban</option>
          <option value="pretoria">Pretoria</option>
          <option value="bloemfontein">Bloemfontein</option>
        </select>
      </div>
      <div className="listItem">
        <label>Price range</label>
        <div className="listChoices">
          <div className="listChoiceItem">
            <span className="listChoiceText">
              Min price <small>per night</small>
            </span>
            <input
              type="number"
              onChange={(e) => setMin(e.target.value)}
              className="listChoiceInput"
              min={0}
            />
          </div>
          <div className="listChoiceItem">
            <span className="listChoiceText">
              Max price <small>per night</small>
            </span>
            <input
              type="number"
              onChange={(e) => setMax(e.target.value)}
              className="listChoiceInput"
              min={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultListModal;
