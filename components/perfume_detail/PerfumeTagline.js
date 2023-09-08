import RenderHTMLFromJSON from '../shared/RenderHTMLFromJSON'

const PerfumeTagline = (props) => {
  return (
    <div className="relative ">
      <img className="lg:h-200px w-full object-cover" src={props.tagline.banner} />
      <div className="z-index-30 custom-floating-container custom-text-120px md:text-lg lg:text-4xl text-white font-uncut">
        <RenderHTMLFromJSON htmlContent={props.tagline.description} />
      </div>
    </div>
  )
}

export default PerfumeTagline
