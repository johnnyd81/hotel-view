import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import ResultList from "./pages/resultList/ResultList";
import Hotel from "./pages/hotel/Hotel";
import Admin from "./pages/admin/Admin";
import AdminModal from "./components/adminmodal/AdminModal";
import BookingConfirm from "./components/bookingconfirm/BookingConfirm";

function App() {
  const { user, adminUser } = useAuthContext(); //the useAuthContext hook allows me to use the user value
  //if the user is authenticated then they are allowed to use the app, if not then they have to sign up

  //by using Navigate I can avoid an unauthenticated user from using the app
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={user ? <Main /> : <Navigate to="/login" />}
          />
          <Route
            path="/list"
            element={user ? <ResultList /> : <Navigate to="/login" />}
          />
          <Route
            path="/list/:id"
            element={user ? <Hotel /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin"
            element={adminUser ? <Admin /> : <Navigate to="/login" />}
          />
          <Route
            path="/adminmodal"
            element={!user ? <AdminModal /> : <Navigate to="/admin" />}
          />
          <Route
            path="/bookingconfirm"
            element={user ? <BookingConfirm /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
