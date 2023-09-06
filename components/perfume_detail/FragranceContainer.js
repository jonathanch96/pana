import Fragrance from './Fragrance'

const FragranceContainer = (props) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Fragrance title="Top" description={props.fragrance_detail.top} />
      <Fragrance title="Middle" description={props.fragrance_detail.middle} />
      <Fragrance title="Base" description={props.fragrance_detail.base} />
    </div>
  )
}

export default FragranceContainer
