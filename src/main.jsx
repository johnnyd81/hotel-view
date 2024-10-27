// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BookingContextProvider } from "./context/BookingContext";
import { SearchContextProvider } from "./context/SearchContext";
import { UsercontextProvider } from "./context/Usercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
