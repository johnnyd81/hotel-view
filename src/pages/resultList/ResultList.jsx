import Header from "../../components/header/Header";
import "./resultList.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns"; //allows me to format the dates
import { useState } from "react";
import ResultItem from "../../components/resultItem/ResultItem";
import useFetchData from "../../hooks/useFetchData";
import LoadingModal from "../../components/loadingmodal/LoadingModal";
import ResultListModal from "../../components/resultlistmodal/ResultListModal";

const ResultList = () => {
  const location = useLocation(); //uses the properties available from the current location
  const [destination, setDestination] = useState(location.state.destination); // stores the initial destination
  const date = location.state.date;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [showModal, setShowModal] = useState("");

  //fetches data from the database that matches the queries i.e. destination, min, max
  const { data, isLoading } = useFetchData(
    `http://localhost:4000/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 2000
    }`
  );

  return (
    <div>
      <Header type="result_list" />
      <ResultListModal
        destination={destination}
        setDestination={setDestination}
        setMin={setMin}
        setMax={setMax}
        show={showModal}
      />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
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
          <div className="listSearchResult">
            {isLoading ? (
              <LoadingModal />
            ) : (
              data.map((item) => <ResultItem key={item._id} item={item} />)
            )}
            {destination === "" && (
              <div className="loadMsg">
                <h1>Please enter a destination?</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultList;
