import data from '../../data/home.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
// import required modules
import { EffectFade, Autoplay } from 'swiper/modules'

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        effect={'fade'}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {data.slider.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="swipe-image w-full"
              alt="Swiper Image"
              src={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-30 custom-floating-container custom-text-120px text-white">
        <div className="flex justify-center items-center">
          <img
            className=" w-[90%]"
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694275992/vector/home_main_cnmbve.svg"
            alt="Home Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
