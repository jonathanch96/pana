import { Modal } from 'flowbite-react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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

  useEffect(() => {
    console.log(props.slideTo)
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(props.slideTo)
      setCurrentPage(swiperRef.current.swiper.realIndex + 1)
    }
  }, [props.openModal])

  return (
    props.openModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-80"></div>

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
            {props.images.map((img, index) => (
              <SwiperSlide key={'slide' + index}>
                <img
                  className="mx-auto"
                  src={img}
                  alt={'Product Detail ' + index}
                />
              </SwiperSlide>
            ))}
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
        <Image
          width={20}
          height={20}
          alt="close"
          onClick={() => props.setOpenModal(false)}
          src={
            'https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029162/Icon/close_kroplr.svg'
          }
          className="absolute top-5 right-5"
        />
      </div>
    )
  )
}
export default PopupModal
