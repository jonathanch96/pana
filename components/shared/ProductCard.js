import Link from 'next/link'

const ProductCard = (props) => {
  return (
    <Link href="/perfume/1">
      <div className="flex flex-col gap-30px font-uncut group hover:font-snell">
        <img
          className="h-auto object-cover max-h-400px w-full"
          src="https://res.cloudinary.com/decwwfkpi/image/upload/f_auto/v1693652520/products/Product%201/01562db9adb371ccaf603bd304eb166a_ofd7iz.png"
          alt="Product Image"
        />
        <div className="flex flex-col items-center ">
          <div className="text-sm uppercase font-semibold group-hover:font-snell group-hover:font-black group-hover:text-base group-hover:normal-case group-hover:leading-5">
            Pana Product 1
          </div>
          <div className="text-sm font-normal group-hover:font-uncut">
            IDR 200K
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
