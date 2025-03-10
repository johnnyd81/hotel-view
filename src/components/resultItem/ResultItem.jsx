import "./resultItem.css";
import { Link } from "react-router-dom";

//the result item contains the information for each hotel i.e. pricing, description etc..
// the argument named item is the prop that contains all the information
const ResultItem = ({ item }) => {
  return (
    <div className="resultItem">
      <img
        src={"./images/" + item.photos[0]}
        alt="something to see"
        className="riImg"
      />
      <div className="riDescription">
        <h1 className="riTitle">{item.name}</h1>
        <span className="rCity">{item.city}</span>
        <span className="riSubtitle">{item.description}</span>
      </div>
      <div className="riDetails">
        <div className="riDetailTexts">
          <span className="riPrice">R{item.cheapestPrice}</span>
          <Link to={`/list/${item._id}`}>
            <button className="riCheckButton">Reserve now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
