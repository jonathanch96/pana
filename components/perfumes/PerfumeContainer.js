import PerfumeCard from '../shared/PerfumeCard'
import data from '../../data/perfumes.json'

const PerfumeContainer = () => {
  return (
    <div className=" grid grid-cols-4 gap-x-5 mr-50px ml-50px">
      {data.map((perfume, index) => (
        <PerfumeCard key={'PerfumeContainer' + index} perfume={perfume} />
      ))}
    </div>
  )
}
export default PerfumeContainer
