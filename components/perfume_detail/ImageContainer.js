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
      <div className="grid grid-cols-12 gap-5">
        <div className="flex flex-col col-span-2 gap-5">
          {data.map((d, index) => (
            <ImageItem
              setPointer={() => setPointer(index)}
              key={'image' + index}
              src={d}
              alt="Image"
              className={`h-1/6 w-auto ${
                pointer == index && 'border border-black'
              }`}
            />
          ))}
        </div>
        <div className="col-span-10">
          <ImageMain
            setOpenModal={setOpenModal}
            src={data[pointer]}
            slideTo={pointer}
            alt="Image"
            className="w-full h-full"
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
