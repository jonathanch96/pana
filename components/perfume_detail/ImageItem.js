const ImageItem = (props) => {
  return (
    <img
      onClick={() => props.setPointer()}
      className={props.className + ' aspect-square'}
      src={props.src}
      alt={props.alt}
    />
  )
}
export default ImageItem
