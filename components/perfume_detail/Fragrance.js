const Fragrance = (props) => {
  return (
    <div className="flex flex-col gap-2.5 text-sm font-uncut ">
      <div className="font-semibold">{props.title}</div>
      <div className="font-normal lg:pr-10 lg:pl-10">{props.description}</div>
    </div>
  )
}
export default Fragrance
