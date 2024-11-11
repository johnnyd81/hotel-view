import Destination from "../../components/destination/Destination";
import OfferSlider from "../../components/offers/OfferSlider";
import TripPlanner from "../../components/tripPlanner/TripPlanner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

// main page component
const Main = () => {
  return (
    <div>
      <Header />
      <Destination />
      <OfferSlider />
      <TripPlanner />
      <Footer />
    </div>
  );
};

export default Main;
