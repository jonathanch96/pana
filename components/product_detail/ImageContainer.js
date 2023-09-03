import ImageItem from './ImageItem'

const ImageContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="flex flex-col col-span-2 gap-5">
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="h-1/6 w-auto"
        />
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="h-1/6 w-auto"
        />
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="h-1/6 w-auto"
        />
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="h-1/6 w-auto"
        />
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="h-1/6 w-auto"
        />
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="h-1/6 w-auto"
        />
      </div>
      <div className="col-span-10">
        <ImageItem
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693755179/products/dummy_detail_1_mtm6ky.png"
          alt="Image"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default ImageContainer
