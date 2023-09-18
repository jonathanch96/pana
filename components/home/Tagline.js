const Tagline = () => {
  return (
    <div className="relative">
      <img
        className="w-full"
        alt="Homepage Tagline"
        src="https://res.cloudinary.com/decwwfkpi/image/upload/f_auto/v1695041079/PANA_GRAPHIC_ASET_ASET_BACKGROUND_ivtftz.svg"
      />
      <div className="z-index-30 w-full custom-text-120px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278643/vector/home_a_different_snell_tm41hq.svg"
            alt="A Different"
            className="w-[35%]"
          />
          &nbsp;
          <div className="flex items-center">
            <img
              className="inline-block lg:w-auto lg:w-[332px] sm:w-200px w-100px"
              src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693723596/home_gif_1_o6tbzj.gif"
              alt="Home Gif 1"
            />
          </div>
          &nbsp;
          <img
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278642/vector/home_language_lkdio7.svg"
            alt="language"
            className="w-[15%]"
          />
        </div>
        <div className="flex justify-center">
          <img
            alt="a different"
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278642/vector/home_a_different_zovmdm.svg"
            className="w-[40%]"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278643/vector/home_scents_a95zie.svg"
            alt="scents"
            className="w-[10%]"
          />
          &nbsp;
          <div className="flex items-center">
            <img
              className="w-[80px] sm:w-[190px] lg:w-[300px] h-auto"
              src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693723955/home_gif_2_wxuvpx.gif"
              alt="Home Gif 2"
            />
          </div>
          &nbsp;
          <img
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1694278642/vector/home_of_life_revo3d.svg"
            alt="of life"
            className="w-[25%]"
          />
        </div>
      </div>
    </div>
  )
}

export default Tagline
