import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BookingContextProvider } from "./context/BookingContext";
import { SearchContextProvider } from "./context/SearchContext";
import { UsercontextProvider } from "./context/Usercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// the providers for AuthContext, UserContext etc. provide their values for App.jsx
//this makes their values globally available to every component in the application
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <UsercontextProvider>
          <BookingContextProvider>
            <App />
          </BookingContextProvider>
        </UsercontextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
