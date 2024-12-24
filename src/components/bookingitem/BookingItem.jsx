//by importing the booking context I can use the context values in this module i.e. bookings and dispatch
import { useBookingContext } from "../../hooks/useBookingContext";
import "./bookingitem.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const BookingItem = ({ booking }) => {
  //import the dispatch method to update the global bookingcontext
  const { dispatch } = useBookingContext();
  //the dispatch function is used to update the contextual state
  const { adminUser, server } = useAuthContext();

  // the cancelBooking function removes a booking from the database but the user has to authorized
  const cancelBooking = async (id) => {
    const response = await fetch(server + "/api/bookings/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${adminUser.token}`,
      },
    });
    const json = await response.json();
    
    if (!response.ok) {
      console.log(json.error);
    }

    // if the response is successful then the global booking state is updated
    if (response.ok) {
      dispatch({ type: "DELETE_BOOKING", payload: json });
    }
  };

  return (
    <div className="booking-item">
      <p>
        <b>Hotel-name:</b> {booking.hotel}
      </p>
      <p>
        <b>Client:</b> {booking.username}
      </p>
      <p>
        <b>Stay duration:</b> {booking.totalDays} day/s
      </p>
      <p>
        <b>Amount due:</b> R{booking.totalAmount}
      </p>
      <div className="btnContainer">
        <button
          className="cancelBtn"
          title="Delete booking from database"
          onClick={() => cancelBooking(booking._id)}
        >
          Cancel booking
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
