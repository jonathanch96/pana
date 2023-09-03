import RenderHTMLFromJSON from '../shared/RenderHTMLFromJSON'

const ProductTagline = (props) => {
  return (
    <div className="relative ">
      <img
        className="h-200px w-full object-cover"
        src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693758446/products/Product%201/fb081cc66137fd39ff67d45c0f0efedc_ctnskm.jpg"
      />
      <div className="z-index-30 w-full text-120px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-uncut">
        <RenderHTMLFromJSON htmlContent="<div class=''>LOOK DEEP <span class='font-snell text-5xl'>&nbsp;Into Nature</span></div><div class='ml-54px -mt-2.5'>AND THEN YOU</div><div class='-mt-2.5 text-5xl font-snell mr-146px'>Will Understand</div><div class='-mt-2.5 ml-83px'>EVERYTHING <span class='font-snell text-5xl'>&nbsp;Better</span></div>" />
      </div>
    </div>
  )
}

export default ProductTagline
