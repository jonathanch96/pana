import Link from 'next/link'
import data from '../../data/social.json'
const FindUsSocial = () => {
  return (
    <div className=" flex flex-col items-center pt-5 pb-5 lg:pt-50px lg:pb-50px gap-y-5 lg:gap-y-60px">
      {data.map((s) => (
        <div className="grid grid-cols-12 w-full ">
          <Link
            href={s.url}
            target="_blank"
            className=" col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 bg-black text-white gap-50px h-10 lg:h-60px flex items-center justify-center uppercase"
          >
            {s.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default FindUsSocial
