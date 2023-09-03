import ProductCard from '../shared/ProductCard'

const ProductContainer = () => {
  return (
    <div className=" grid grid-cols-4 gap-x-5 mr-50px ml-50px">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
export default ProductContainer
