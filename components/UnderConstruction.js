import data from "../data/under-construction.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "./UnderConstruction.css";
const UnderConstruction = () => {
  return (
    <div className="UnderContruction">
      <div className="container-floating">
        <div className="floating-header">
          <div className="inner-container">
            <img
              className="logo"
              src="https://res.cloudinary.com/decwwfkpi/image/upload/v1691767499/logo_i0rdwh.svg"
            />
            <div className="tagline user-select-none">
              <span className="lucette-font">Further</span>&nbsp;
              <span>THAN LANGUAGE</span>
            </div>
          </div>
        </div>
        <div className="floating-content-wrapper user-select-none">
          <div className="floating-content">Were Making</div>
          <div className="floating-content-2">Something</div>
        </div>
        <div className="footer">
          <div className="inner-container user-select-none">
            <div className="left">WE'LL THERE SOON</div>
            <div className="right">
              BUT WE ARE READY TO GO! WE ARE PREPARING <br />
              SOMETHING AMAZING AND EXCITING FOR YOU.
            </div>
          </div>
        </div>
      </div>
      <Swiper
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((image) => (
          <SwiperSlide>
            <img className="swipe-image" src={image} key={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnderConstruction;
