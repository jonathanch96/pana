const PerfumeTagline = (props) => {
  return (
    <div className="relative">
      <img
        className="lg:h-200px w-full object-cover"
        src={props.tagline.banner}
      />
      <div className="custom-floating-container custom-text-120px text-white">
        <div className="flex justify-center items-center">
          <img
            className="w-[90%] xl:w-[75%] 2xl:w-[60%] 3xl:w-[50%] 3.5xl:w-[35%] 4xl:w-[15%]"
            src={props.tagline.description}
            alt="Perfume Tagline Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default PerfumeTagline
