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
            className=" w-[90%]"
            src={props.tagline.description}
            alt="Perfume Tagline Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default PerfumeTagline
