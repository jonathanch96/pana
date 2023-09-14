import Image from 'next/image'
import data from '../../data/about.json'
const AboutBanner2 = () => {
  return (
    <div className="relative">
      <div className="w-full h-[568px] sm:h-[700px] md:h-[1024px] 3xl:h-[1500px] 4xl:h-[2500px] bg-black">
        <div className="z-20 absolute w-full h-full">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="col-start-2 col-end-12 xl:col-start-3 xl:col-end-11 relative">
              <div className="left-0 top-0 absolute flex flex-col items-center justify-between h-full">
                <Image
                  className="hidden lg:block aspect-square w-100px lg:ml-[140px] lg:mt-[90px] xl:ml-[100px] xl:mt-[70px] 2xl:ml-[150px] 2xl:mt-[50px]"
                  src={data.image_1}
                  width={100}
                  height={100}
                  alt="About Image 1"
                />
                <Image
                  className="aspect-auto hidden lg:block h-auto w-213px lg:mb-[150px] xl:mb-[120px] 2xl:mb-[100px]"
                  src={data.image_3}
                  width={213}
                  height={80}
                  alt="About Image 3"
                />
              </div>
              <div className="right-0 top-0 absolute flex flex-col gap-5 items-center justify-between h-full">
                <Image
                  className="aspect-auto hidden lg:block h-auto w-213px lg:mt-[100px] xl:mt-[80px] 2xl:mt-[70px]"
                  src={data.image_2}
                  width={213}
                  height={80}
                  alt="About Image 2"
                />

                <Image
                  src={data.image_4}
                  className="aspect-square hidden lg:block w-100px lg:mb-[270px] xl:mb-[260px] 2xl:mb-[240px]"
                  width={100}
                  height={100}
                  alt="About Image 4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="z-30 custom-floating-container">
          <div className="flex items-start justify-center mb-6">
            <div className="w-[85%] xsm:w-[60%] lg:w-[50%] mb-0.5 mb-2.5">
              <img
                src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694312149/vector/about_desciption_1_ln14mh.svg"
                alt="About Image 1"
                className="w-full"
              />
            </div>
          </div>
          <Image
            className="mx-auto  aspect-square w-100px xsm:w-151px sm:w-170px lg:w-250px mb-6"
            src={data.image_gif}
            width={250}
            height={250}
            alt="Image Gif"
          />
          <div className="flex gap-2.5 sm:gap-5 lg:gap-60px items-center justify-center mb-[30px]">
            <div className="w-[80%] xsm:w-[55%] lg:w-[40%] mb-0.5 mb-2.5">
              <img
                src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278640/vector/about_description_2_i7tikb.svg"
                alt="About Image 2"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex gap-2.5 sm:gap-5 lg:gap-60px items-start justify-center">
            <div className="w-[60%] xsm:w-[45%] lg:w-[30%] mb-0.5 mb-2.5">
              <img
                src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694314144/vector/about_description_3_m8kavu.svg"
                alt="About Image 3"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner2
