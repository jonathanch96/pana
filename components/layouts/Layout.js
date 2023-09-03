import '../../styles/global.css'
import Content from '../shared/Content'
import Footer from './Footer'
import Header from './Header'
import HomeHeaderContainer from './HomeHeaderContainer'

const Layout = (props) => {
  return (
    <div>
      {props.source == 'home' && <HomeHeaderContainer />}
      {props.source != 'home' && <Header />}
      {props.children}
      <Content>
        <Footer />
      </Content>
    </div>
  )
}

export default Layout
