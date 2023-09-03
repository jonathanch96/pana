const Tagline = () => {
  return (
    <div className="relative">
      <img src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693719146/background_s2u1gp.png" />
      <div className="z-index-30 w-full text-120px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div>
          <span className="font-snell text-120px">a&nbsp;Different</span>
          &nbsp;
          <img
            className="inline-block"
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693723596/home_gif_1_o6tbzj.gif"
            alt="Home Gif 1"
          />
          &nbsp;
          <span className="text-60px">Language</span>
        </div>
        <div className="-mt-50px">a DIFFERENT</div>
        <div className="-mt-50px">
          <span className="text-60px">SCENTS</span>
          &nbsp;
          <img
            className="inline-block"
            src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693723955/home_gif_2_wxuvpx.gif"
            alt="Home Gif 2"
          />
          &nbsp;
          <span className="font-snell text-120px">&nbsp;of Life</span>
        </div>
      </div>
    </div>
  )
}

export default Tagline
