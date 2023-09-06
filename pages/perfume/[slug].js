import Layout from '@/components/layouts/Layout'
import DetailContainer from '@/components/perfume_detail/DetailContainer'
import ImageContainer from '@/components/perfume_detail/ImageContainer'
import PerfumeContainer from '@/components/perfumes/PerfumeContainer'
import Content from '@/components/shared/Content'
import { useRouter } from 'next/router'
import perfumes from '../../data/perfumes.json'

const PerfumeDetailPage = ({ perfume }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <div className="grid grid-cols-2 mr-50px ml-50px gap-5">
        <ImageContainer perfume={perfume} />
        <DetailContainer perfume={perfume} />
      </div>
      <Content className="text-sm font-uncut font-semibold ml-4 lg:ml-50px">
        Suggested Scents
      </Content>
      <PerfumeContainer />
    </Layout>
  )
}
export default PerfumeDetailPage

export async function getStaticPaths() {
  const paths = perfumes.map((perfume) => {
    return {
      params: { slug: perfume.slug }, // Replace 'id' with the name of your dynamic parameter
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const perfume = perfumes.find((perfume) => perfume.slug === `${slug}`)

  if (!perfume) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      perfume,
    },
  }
}