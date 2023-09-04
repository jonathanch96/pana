import Link from 'next/link'
import FeatureContainer from './FeatureContainer'
import ProductTagline from './ProductTagline'

const DetailContainer = () => {
  return (
    <div className="flex flex-col justify-between font-uncut text-black text-center">
      <div className="text-5xl font-bold ">PANA PRODUCT 1</div>
      <div className="font-semibold text-sm">IDR 200.000</div>
      <ProductTagline />
      <FeatureContainer />
      <div className="font-normal">
        It's time to make everyone blown away. Your time to shine. Your time to
        glow. <br />
        is about self-love, which only you can control, not anyone else.
      </div>
      <Link href="#" target="_blank" className="w-full pt-5 pb-5 uppercase bg-customOrange text-white">Buy Now</Link>
    </div>
  )
}

export default DetailContainer
