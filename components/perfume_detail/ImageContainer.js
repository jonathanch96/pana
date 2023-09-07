import { useState } from 'react'
import ImageItem from './ImageItem'
import ImageMain from './ImageMain'
import PopupPortal from '../shared/PopupPortal'
import PopupModal from './PopupModal'

const ImageContainer = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const [pointer, setPointer] = useState(0)
  const data = props.perfume.images
  return (
    <>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-5">
        <div className="grid grid-cols-6 gap-2 lg:flex lg:flex-col lg:col-span-2 lg:gap-5">
          {data.map((d, index) => (
            <ImageItem
              setPointer={() => setPointer(index)}
              key={'image' + index}
              src={d}
              alt="Image"
              className={` w-full ${pointer == index && 'border border-black'}`}
            />
          ))}
        </div>
        <div className="w-full lg:col-span-10">
          <ImageMain
            setOpenModal={setOpenModal}
            src={data[pointer]}
            slideTo={pointer}
            alt="Image"
            className="w-full aspect-[580/700]"
          />
        </div>
      </div>
      <PopupPortal>
        <PopupModal
          images={data}
          openModal={openModal}
          setOpenModal={setOpenModal}
          slideTo={pointer}
        />
      </PopupPortal>
    </>
  )
}

export default ImageContainer
