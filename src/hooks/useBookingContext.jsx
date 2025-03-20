import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

//by calling the hook all the context values are available to that module
export const useBookingContext = () => {
  // the useContext hook allows the BookingContext to accessed when it is called in a file
  const context = useContext(BookingContext);

  if (!context) {
    throw Error("context must be used inside BookingContextProvider");
  }

  return context;
};
