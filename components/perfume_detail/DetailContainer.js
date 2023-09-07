import Link from 'next/link'
import FragranceContainer from './FragranceContainer'
import PerfumeTagline from './PerfumeTagline'
import RenderHTMLFromJSON from '../shared/RenderHTMLFromJSON'

const DetailContainer = (props) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-0 lg:justify-between font-uncut text-black text-center">
      <div className="mt-5 lg:mt-0 text-2xl lg:text-5xl font-bold uppercase">{props.perfume.name}</div>
      <div className="font-semibold text-sm uppercase">
        {props.perfume.price}
      </div>
      <div className="font-normal text-sm">{props.perfume.description}</div>
      <PerfumeTagline tagline={props.perfume.tagline} />
      <FragranceContainer fragrance_detail={props.perfume.fragrance_detail} />
      <div className="font-normal">
        <RenderHTMLFromJSON htmlContent={props.perfume.quote} />
      </div>
      <Link
        href={props.perfume.buy_link}
        target="_blank"
        className="w-full pt-5 pb-5 uppercase bg-customOrange text-white"
      >
        Buy Now
      </Link>
    </div>
  )
}

export default DetailContainer
