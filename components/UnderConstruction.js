import data from '../data/under-construction.json'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import './UnderConstruction.css'
const UnderConstruction = () => {
  return (
    <div className="UnderContruction">
      <div className="container-floating">
        <div className="floating-header">
          <div className="inner-container">
            <img
              className="logo"
              src="https://res.cloudinary.com/decwwfkpi/image/upload/v1692154706/logo-highres_oyjqvp.png"
              width={154}
            />
            <div className="tagline user-select-none">
              <div className="lucette-font further-text italic">Further</div>
              <div className="line"></div>
              <div className="than-language-text">THAN LANGUAGE</div>
            </div>
          </div>
        </div>
        <div className="floating-content-wrapper user-select-none">
          <div className="floating-content flex gap-10" >
            <span className="italic">We're</span>
            <span>Making</span>
          </div>
          <div className="floating-content-2">Something</div>
        </div>
        <div className="footer">
          <div className="inner-container user-select-none">
            <div className="left">WE'LL BE THERE SOON</div>
            <div className="right">
              BUT WE ARE READY TO GO! WE ARE PREPARING <br />
              SOMETHING AMAZING AND EXCITING FOR YOU.
            </div>
          </div>
        </div>
      </div>
      <Swiper
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="swipe-image" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default UnderConstruction
