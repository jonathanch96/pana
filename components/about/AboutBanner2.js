import Image from 'next/image'
import data from '../../data/about.json'
const AboutBanner2 = () => {
  return (
    <div className="relative">
      <div className="w-full h-517px md:h-658px lg:h-1000px bg-black"></div>
      <div className="z-30 w-full custom-text-80px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className="flex gap-2.5 sm:gap-5 lg:gap-60px items-end justify-center">
          <Image
            className="aspect-square w-14 2xl:w-100px"
            src={data.image_1}
            width={100}
            height={100}
            alt="About Image 1"
          />
          <div className="">
            Life in <span className="font-snell font-medium">Indonesia</span>
          </div>
          <Image
            className="aspect-auto h-auto w-50px sm:w-100px 2xl:w-213px"
            src={data.image_2}
            width={213}
            height={80}
            alt="About Image 2"
          />
        </div>
        <div className="">
          is <span className="font-snell font-medium">Closely</span> related{' '}
          <span className="font-snell font-medium">&nbsp;to Nature</span>
        </div>
        <div className="mb-50px sm:mb-130px lg:mb-151px">
          making it{' '}
          <span className="font-snell font-medium">&nbsp;Inseparable,</span>
        </div>
        <div className="flex gap-2.5 sm:gap-5 lg:gap-60px items-center justify-center">
          <div className="h-100px w-50px sm:w-100px 2xl:w-213px"></div>
          <div>
            <div>
              When <span className="font-snell font-medium">We Talk</span> about
            </div>
            <div className="mb-30px">
              <span className="font-snell font-medium">Indonesia Culture</span>
            </div>
          </div>
          <Image
            className="aspect-auto h-auto w-50px sm:w-100px 2xl:w-213px"
            src={data.image_3}
            width={213}
            height={80}
            alt="About Image 3"
          />
        </div>
        <div className="flex gap-2.5 sm:gap-5 lg:gap-60px items-start justify-center">
          <Image
            src={data.image_4}
            className="aspect-square w-14 2xl:w-100px"
            width={100}
            height={100}
            alt="About Image 4"
          />
          <div className="w-250px lg:w-517px text-sm md:text-lg lg:text-2xl flex">
            Even the scents we know oftengive an impression, or come from and
            are made from what is in Nature.
          </div>
          <div className="w-50px sm:w-100px 2xl:w-213px h-100px"></div>
        </div>
      </div>
      <div className="z-20 w-full custom-text-80px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <Image
          className="mx-auto aspect-square w-151px sm:170px lg:w-250px"
          src={data.image_gif}
          width={250}
          height={250}
          alt="Image Gif"
        />
      </div>
    </div>
  )
}

export default AboutBanner2
