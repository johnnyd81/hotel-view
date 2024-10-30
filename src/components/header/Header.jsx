import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //imports the specific icons used in the module
  faBed,
  faPerson,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns"; //allows me to format the dates
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../hooks/useSearchContext"; //imports the contextual state

const Header = ({ type }) => {
  const { dispatch } = useSearchContext();
  const [choices, setChoices] = useState({
    adult: 1, //sets the initial state that a user can change to fulfill their requirements
    children: 0,
    room: 1,
  });

  //controls the visibility of the dropdown element to select adult, children and amount of rooms to be booked
  const [openChoices, setOpenChoices] = useState(false);

  //controls the visibility of the date calendar i.e. it's only visible when the state value is true
  const [openDate, setOpenDate] = useState(false);

  //date contains the date values selected by the user
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //contains the destination value the user will enter
  const [destination, setDestination] = useState("");

  //the function below alters the values according to what the user selects in the people component i.e. adult, children
  const handleChoices = (choiceName, action) => {
    setChoices((prev) => {
      return {
        ...prev,
        [choiceName]:
          action === "i" ? choices[choiceName] + 1 : choices[choiceName] - 1,
      };
    });
  };

  const navigate = useNavigate(); //allows me to navigate the app using the react-router-dom

  const handleSearch = () => {
    //by using createContext I can alter my state using the dispatch function
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, choices } });
    //state can be shared by using useNavigate i.e. the state can be used in the ResultList component
    navigate("/list", { state: { destination, date, choices } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "result_list"
            ? "headerContainer listPage"
            : "headerContainer"
        }
      >
        <h1 className="headerTitle">
          Affordable and exciting deals. Don't delay, book today!!
        </h1>
        {type !== "result_list" && (
          <>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="mSearchIcon" />
                <input
                  type="text"
                  placeholder="enter available city-name"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  value={destination}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="mSearchIcon" />
                <span
                  className="headerSearchTxt"
                  onClick={() => setOpenChoices(!openChoices)}
                >
                  {`${choices.adult} adult/s - ${choices.children} children - ${choices.room} room/s`}
                </span>
                {openChoices && (
                  <div className="choices">
                    <div className="choiceItem">
                      <span className="choiceText">Adult</span>
                      <div className="choiceCounter">
                        <button
                          className="choiceCounterBtn"
                          onClick={() => handleChoices("adult", "d")}
                          disabled={choices.adult <= 1}
                        >
                          -
                        </button>
                        <span className="choiceCounterValue">
                          {choices.adult}
                        </span>
                        <button
                          className="choiceCounterButton"
                          onClick={() => handleChoices("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="choiceItem">
                      <span className="choiceText">Children</span>
                      <div className="choiceCounter">
                        <button
                          className="choiceCounterBtn"
                          onClick={() => handleChoices("children", "d")}
                          disabled={choices.children <= 0}
                        >
                          -
                        </button>
                        <span className="choiceCounterValue">
                          {choices.children}
                        </span>
                        <button
                          className="choiceCounterButton"
                          onClick={() => handleChoices("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="choiceItem">
                      <span className="choiceText">Room</span>
                      <div className="choiceCounter">
                        <button
                          className="choiceCounterBtn"
                          onClick={() => handleChoices("room", "d")}
                          disabled={choices.room <= 1}
                        >
                          -
                        </button>
                        <span className="choiceCounterValue">
                          {choices.room}
                        </span>
                        <button
                          className="choiceCounterButton"
                          onClick={() => handleChoices("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="cSearchIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {type !== "result_list" && (
        <div className="btnContainer">
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
