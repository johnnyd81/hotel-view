import "./hotel.css";
import useFetchData from "../../hooks/useFetchData";
import { useLocation } from "react-router-dom"; //allows me to use properties available in the current page
import Header from "../../components/header/Header";
import { useSearchContext } from "../../hooks/useSearchContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; //gets the id of a hotel
  const { data, isLoading } = useFetchData(
    `http://localhost:4000/api/hotels/find/${id}`
  ); //fetches data using the useFetchData hook
  const { date, choices } = useSearchContext();
  const { user } = useAuthContext();

  const milliseconds_per_day = 60 * 60 * 24 * 1000; //amount of milliseconds for a single day

  const dayAmount = (date1, date2) => {
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());
    const dayDifference = Math.ceil(timeDifference / milliseconds_per_day);
    return dayDifference;
  };

  const days = dayAmount(date[0].endDate, date[0].startDate); //calculates the amount of days between the dates specified

  const navigate = useNavigate();

  //addBooking creates a new booking in the database
  const addBooking = async () => {
    const bookingDetails = {
      hotel: data.name,
      hotelid: id,
      username: JSON.parse(localStorage.getItem("user")).username,
      totalDays: days,
      totalAmount: days * data.cheapestPrice * choices.room,
    };

    const response = await fetch("http://localhost:4000/api/bookings", {
      method: "POST",
      body: JSON.stringify(bookingDetails),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      console.log("Booking successful", json);
      alert("Booking successful");
      navigate("/bookingconfirm", { state: { json } });
    }
  };

  return (
    <div>
      <Header type="result_list" />
      {isLoading ? (
        <div className="loadMsg">
          <h1>Loading!!. Please wait...</h1>
        </div>
      ) : (
        <div className="hotelContainer">
          <div className="hotelImages">
            {data.photos &&
              data.photos.map((photo, index) => (
                <div className="imgContainer" key={index}>
                  <img src={photo} alt="" className="imgItem" />
                </div>
              ))}
          </div>
          <h1 className="hotelTitle">{data.name}</h1>
          <span className="hotelPriceHighlight">
            Book a stay over R{data.cheapestPrice} at this property and get a
            discount on future bookings.
          </span>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">{data.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Perfect for a {days} night stay!</h2>
              <span>Book now to avoid disappointment</span>
              <h2>
                <b>R{days * data.cheapestPrice * choices.room}</b> ({days}{" "}
                night/s)
              </h2>
              <button className="bookNow1" onClick={addBooking}>
                Book Now!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotel;
