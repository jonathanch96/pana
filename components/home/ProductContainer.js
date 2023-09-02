// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ProductCard from '../shared/ProductCard'
import SeeAllProductCard from '../shared/SeeAllProductCard'
import { useCallback, useRef } from 'react'

const ProductContainer = (props) => {
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
    <div className="ProductContainer ml-50px mr-50px">
      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <SeeAllProductCard />
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

export default ProductContainer
