import AboutBanner from '@/components/about/AboutBanner'
import AboutBanner2 from '@/components/about/AboutBanner2'
import AboutTagline from '@/components/about/AboutTagline'
import Layout from '@/components/layouts/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <AboutBanner />
      <AboutTagline />
      <AboutBanner2 />
    </Layout>
  )
}

export default AboutPage
