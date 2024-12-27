import { createContext, useReducer } from "react";

export const BookingContext = createContext(); //creates context

//specifies actions that can be used to alter the state value
//Actions handled in this function are getting bookings and deleting bookings
export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKINGS":
      return {
        bookings: action.payload,
      };
    case "DELETE_BOOKING":
      return {
        bookings: state.bookings.filter((b) => b._id !== action.payload._id),
      };
    default:
      return state;
  }
};

//the provider function takes the entire app as a child component
//the value prop is therefore available globally to the entire app
export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, {
    bookings: [],
  });

  return (
    <BookingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
