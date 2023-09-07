import PerfumeCard from '../shared/PerfumeCard'
import data from '../../data/perfumes.json'

const PerfumeContainer = () => {
  return (
    <div className=" grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-5 ml-4 mr-4 lg:mr-50px lg:ml-50px">
      {data.map((perfume, index) => (
        <PerfumeCard key={'PerfumeContainer' + index} perfume={perfume} />
      ))}
    </div>
  )
}
export default PerfumeContainer
