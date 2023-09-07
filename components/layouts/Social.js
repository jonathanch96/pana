import Link from 'next/link'

const Social = (props) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="uppercase font-uncut text-center border-black border pb-2 pt-2 sm:pb-4 sm:pt-4 text-black text-xl font-normal "
    >
      {props.name}
    </Link>
  )
}

export default Social
