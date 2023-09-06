import Banner from '@/components/home/Banner'
import PerfumeSlider from '@/components/home/PerfumeSlider'
import Tagline from '@/components/home/Tagline'
import HomeHeaderContainer from '@/components/layouts/HomeHeaderContainer'
import Layout from '@/components/layouts/Layout'
import Content from '@/components/shared/Content'
const HomePage = () => {
  return (
    <Layout source="home">
      <Banner />
      <Content className="text-sm font-uncut font-semibold ml-4 lg:ml-50px">
        Suggested Scents
      </Content>
      <PerfumeSlider />
      <Tagline />
    </Layout>
  )
}

export default HomePage
