// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import PerfumeCard from '../shared/PerfumeCard'
import SeeAllPerfumeCard from '../shared/SeeAllPerfumeCard'
import { useCallback, useRef } from 'react'
import data from '../../data/perfumes.json'

const PerfumeSlider = (props) => {
  const sliderRef = useRef(null)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className="PerfumeSlider ml-50px mr-50px mb-50px">
      <Swiper
        ref={sliderRef}
        spaceBetween={20}
        breakpoints={{
          400: {
            width: 400,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {data.map((perfume, index) => (
          <SwiperSlide key={'PerfumeSlider' + index}>
            <PerfumeCard perfume={perfume} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <SeeAllPerfumeCard />
        </SwiperSlide>
      </Swiper>
      <div className="prev-arrow" onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
          <path
            d="M25.2404 17.1635L9.42305 17.1635M9.42305 17.1635L17.1634 24.9038M9.42305 17.1635L17.1634 9.42307"
            stroke="#D9D9D9"
          />
        </svg>
      </div>
      <div className="next-arrow" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
          <path
            d="M9.42303 17.1634H25.2403M25.2403 17.1634L17.5 9.42307M25.2403 17.1634L17.5 24.9038"
            stroke="#D9D9D9"
          />
        </svg>
      </div>
    </div>
  )
}

export default PerfumeSlider
