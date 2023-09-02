import Link from 'next/link'

const Social = (props) => {
  return (
    <div className='font-uncut text-center border-black border'>
      <Link href={props.url} target="_blank" className='text-black text-xl font-normal pb-4 pt-4'>
        {props.name}
      </Link>
    </div>
  )
}

export default Social
