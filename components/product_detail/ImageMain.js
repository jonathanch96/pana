const ImageMain = (props) => {
  return (
    <div className={`${props.className} relative`}>
      <img className={props.className} src={props.src} alt={props.alt} />
      <svg
        onClick={() => props.setOpenModal(true)}
        className="absolute right-30px top-5 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="44"
        viewBox="0 0 43 44"
        fill="none"
      >
        <circle
          cx="21.2132"
          cy="22"
          r="15"
          transform="rotate(-45 21.2132 22)"
          fill="white"
          fillOpacity="0.7"
        />
        <path
          d="M20.1526 14.5754H28.2843V22.7071"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M21.7437 29.2478L13.6119 29.2478L13.6119 21.1161"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
export default ImageMain
