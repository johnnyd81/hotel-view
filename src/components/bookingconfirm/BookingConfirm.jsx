import "./bookingconfirm.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBookingContext } from "../../hooks/useBookingContext";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookingConfirm = () => {
  //location variable contains properties like the url and available state properties
  const location = useLocation();
  const data = location.state.json;
  const bookingId = location.state.json._id;
  const { user, server } = useAuthContext();
  const { dispatch } = useBookingContext();
  const navigate = useNavigate();

  //delete a booking from the database
  const removeBooking = async (id) => {
    const response = await fetch(server + "/api/bookings/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    // alert message if the booking was deleted from the database successfully
    if (response.ok) {
      alert("Your booking has been cancelled");
      console.log("Booking has been deleted", json);
      dispatch({ type: "DELETE_BOOKING", payload: json });
      navigate("/");
    }
  };

  return (
    <div className="bConfirm">
      <div className="bConfirmContainer">
        <div className="bHeader">
          <h1>Confirmation page</h1>
        </div>
        <div className="bTitle">
          <p>Your booking details are shown below:-</p>
        </div>
        <div className="bDetails">
          <p>Client: {data.username}</p>
          <p>Hotel: {data.hotel}</p>
          <p>Stay duration: {data.totalDays} day/s</p>
          <p>Amount due: R{data.totalAmount}</p>
        </div>
        <div className="bMessage">
          <p>
            Congratulations on booking your hotel successfully. Our staff will
            contact you shortly to confirm further details. If for whatever
            reason you would like to cancel your booking, the cancel button
            below will immediately cancel your current booking. If not enjoy
            your stay!!
            <br />
            <br />
            Kind regards from the Hotel Booking team and all our generous
            sponsors.
          </p>
        </div>
        <div className="bBtnContainer">
          <Link to="/">
            <button className="homeBtn">Homepage</button>
          </Link>
          <button
            className="removeBtn"
            onClick={() => removeBooking(bookingId)}
          >
            Cancel booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
