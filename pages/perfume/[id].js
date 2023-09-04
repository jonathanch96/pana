import Layout from '@/components/layouts/Layout'
import DetailContainer from '@/components/product_detail/DetailContainer'
import ImageContainer from '@/components/product_detail/ImageContainer'
import ProductContainer from '@/components/products/ProductContainer'
import Content from '@/components/shared/Content'

const PerfumeDetailPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 mr-50px ml-50px gap-5">
        <ImageContainer />
        <DetailContainer />
      </div>
      <Content className="text-sm font-uncut font-semibold ml-50px">
        Suggested Scents
      </Content>
      <ProductContainer />
    </Layout>
  )
}
export default PerfumeDetailPage
