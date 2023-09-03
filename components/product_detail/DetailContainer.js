import ProductTagline from './ProductTagline'

const DetailContainer = () => {
  return (
    <div className="flex flex-col gap-7 font-uncut text-black text-center">
      <div className="text-5xl font-bold ">PANA PRODUCT 1</div>
      <div className="font-semibold text-sm">IDR 200.000</div>
      <ProductTagline />
    </div>
  )
}

export default DetailContainer
