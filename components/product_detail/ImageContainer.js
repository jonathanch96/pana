import { useState } from 'react'
import ImageItem from './ImageItem'
import ImageMain from './ImageMain'
import PopupPortal from '../shared/PopupPortal'
import PopupModal from './PopupModal'

const ImageContainer = () => {
  const [openModal, setOpenModal] = useState(false)
  const [pointer, setPointer] = useState(0)
  const data = [
    'https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png',
    'https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png',
    'https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png',
    'https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png',
    'https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png',
    'https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png',
  ]
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
        <PopupModal images={data}  openModal={openModal} setOpenModal={setOpenModal} slideTo={pointer}/>
      </PopupPortal>
    </>
  )
}

export default ImageContainer
