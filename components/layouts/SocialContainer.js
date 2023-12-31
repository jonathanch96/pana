import Social from './Social'
import data from '../../data/social.json'
const SocialContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-y-5 lg:gap-y-0 lg:grid-cols-4 gap-x-5 ml-4 mr-4 lg:ml-50px lg:mr-50px">
      {data.map((d, index) => {
        return <Social key={'social' + index} url={d.url} name={d.name} />
      })}
    </div>
  )
}

export default SocialContainer
