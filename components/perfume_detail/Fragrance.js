const Fragrance = (props) => {
  return (
    <div className="flex flex-col gap-2.5 text-sm font-uncut ">
      <div className="font-semibold">{props.title}</div>
      <div className="font-normal xl:pr-10 xl:pl-10">{props.description}</div>
    </div>
  )
}
export default Fragrance
