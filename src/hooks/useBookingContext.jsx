import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

//by calling the hook all the context values are available to that module
export const useBookingContext = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw Error("context must be used inside BookingContextProvider");
  }

  return context;
};
