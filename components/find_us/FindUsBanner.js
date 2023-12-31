import Link from 'next/link'

const FindUsBanner = () => {
  return (
    <div className="relative w-full ">
      <div class="relative w-full lg:aspect-[1440/470] ">
        <img
          className="w-full lg:aspect-[1440/470] object-cover"
          src="https://res.cloudinary.com/decwwfkpi/image/upload/f_auto/v1691759964/under%20construction/r66y2up3fkr0qdztexyg.jpg"
          alt="Find Us Banner"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="custom-floating-container custom-text-160px text-white ">
        <div className="lg:pt-10 ">
          <Link href={'/'}>
            <img
              alt="Logo"
              src="https://res.cloudinary.com/decwwfkpi/image/upload/v1691767499/logo_i0rdwh.svg"
              className="mx-auto w-50px xsm:w-100px lg:w-auto"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <img
            className=" w-[80%]"
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278193/vector/find_us_rx7fkw.svg"
            alt="Find Us Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default FindUsBanner
