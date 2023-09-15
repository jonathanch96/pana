import Link from 'next/link'

const SeeAllPerfumeCard = () => {
  return (
    <Link href="/perfume">
      <div className="flex uppercase items-center justify-center w-full h-200px lg:h-400px text-customGray text-16px lg:text-32px">
        See All <br /> Product
      </div>
    </Link>
  )
}
export default SeeAllPerfumeCard
