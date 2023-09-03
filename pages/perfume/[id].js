import Layout from '@/components/layouts/Layout'
import DetailContainer from '@/components/product_detail/DetailContainer'
import ImageContainer from '@/components/product_detail/ImageContainer'

const PerfumeDetailPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 mr-50px ml-50px gap-5">
        <ImageContainer />
        <DetailContainer />
      </div>
    </Layout>
  )
}
export default PerfumeDetailPage
