import Link from 'next/link'

const PerfumeCard = (props) => {
  return (
    <Link className='PerfumeCard' href={'/perfume/' + props.perfume.slug}>
      <div className="flex flex-col gap-30px font-uncut group hover:font-snell">
        <div className="h-auto object-cover w-full aspect-[320/400] overflow-hidden">
          <img
            className="w-full group-hover:scale-125 zoom-animation duration-300"
            src={props.perfume.main_image}
            alt={props.perfume.name + ' Image'}
          />
        </div>

        <div className="flex flex-col items-center ">
          <div className="text-sm uppercase font-semibold group-hover:font-snell group-hover:font-black group-hover:text-base group-hover:normal-case group-hover:leading-5">
            {props.perfume.name}
          </div>
          <div className="text-sm font-normal group-hover:font-uncut">
            {props.perfume.price}
          </div>
        </div>
      </div>
    </Link>
  )
}
export default PerfumeCard
