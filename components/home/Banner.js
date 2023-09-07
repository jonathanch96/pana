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
        <div>
          <span className="font-snell custom-text-140px">Creation</span>
          of the LANGUAGE
        </div>
        <div className="2xl:-mt-83px">OF SCENTS, AND FURTHER</div>
        <div className="2xl:-mt-83px">THAN THAT INVOLVES</div>
        <div className="2xl:-mt-83px">
          <span className="font-snell custom-text-140px">Feelings</span>& MIND
        </div>
      </div>
    </div>
  )
}

export default Banner
