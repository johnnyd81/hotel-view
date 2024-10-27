import "./hotelGallery.css";

//the hotel gallery contains images of the three destinations available to a user
const HotelGallery = () => {
  return (
    <div className="hotel_gallery">
      <div className="gImg">
        <img
          src="https://th.bing.com/th/id/OIP.6-lQ6l-Jsr0ZvL5H0ZgsiAHaE8?pid=ImgDet&rs=1"
          alt=""
        />
        <p className="gTitle">Johannesburg</p>
      </div>
      <div className="gImg">
        <img
          src="https://th.bing.com/th/id/OIP.ht7GsUgXprHAWDqCSfRHPgHaJi?pid=ImgDet&rs=1"
          alt=""
        />
        <p className="gTitle">Durban</p>
      </div>
      <div className="gImg">
        <img
          src="https://www.olympicpalacehotel.com/_storageWeb_/n/5066024162536/b/692033667068/Swimming_Pool_Night_View.png"
          alt=""
        />
        <p className="gTitle">Cape Town</p>
      </div>
    </div>
  );
};

export default HotelGallery;
