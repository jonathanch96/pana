const Content = (props) => {
  return (
    <div className={`${props.className} mt-6 mb-6 lg:mt-50px lg:mb-50px`}>
      {props.children}
    </div>
  )
}
export default Content
