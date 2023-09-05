import Social from './Social'
import data from '../../data/social.json'
const SocialContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5 ml-50px mr-50px">
      {data.map((d, index) => {
        return <Social key={'social' + index} url={d.url} name={d.name} />
      })}
    </div>
  )
}

export default SocialContainer
