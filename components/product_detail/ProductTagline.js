import RenderHTMLFromJSON from '../shared/RenderHTMLFromJSON'

const ProductTagline = (props) => {
  return (
    <div className="relative ">
      <img className="h-200px w-full object-cover" src={props.tagline.banner} />
      <div className="z-index-30 w-full text-120px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-uncut">
        <RenderHTMLFromJSON htmlContent={props.tagline.description} />
      </div>
    </div>
  )
}

export default ProductTagline
