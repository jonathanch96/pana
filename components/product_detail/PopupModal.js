import { Modal } from 'flowbite-react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

const PopupModal = (props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)

  const swiperRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
      setCurrentPage(swiperRef.current.swiper.realIndex + 1)
    }
  }, [])

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
      setCurrentPage(swiperRef.current.swiper.realIndex + 1)
    }
  }, [])

  return (
    props.openModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>

        <div className="PopupModal relative rounded-lg w-full md:w-2/6 ">
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            className="mySwiper"
            ref={swiperRef}
            onSwiper={(swiper) => {
              setCurrentPage(swiper.realIndex + 1)
              setTotalPage(swiper.slides.length)
            }}
          >
            <SwiperSlide>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693652520/products/Product%201/01562db9adb371ccaf603bd304eb166a_ofd7iz.png"
                alt="Product Detail 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693652520/products/Product%201/01562db9adb371ccaf603bd304eb166a_ofd7iz.png"
                alt="Product Detail 1"
              />
            </SwiperSlide>
          </Swiper>
          <div className="prev-arrow" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                d="M25.5 12.5L2 12.5M2 12.5L13.5 24M2 12.5L13.5 0.999999"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="next-arrow" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M0 12.5L23.5 12.5M23.5 12.5L12 1M23.5 12.5L12 24"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="pagination font-uncut text-white text-sm -right-10 ">
            {currentPage} / {totalPage}
          </div>
        </div>
      </div>
    )
  )
}
export default PopupModal
