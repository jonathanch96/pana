import '../../styles/global.css'
import Content from '../shared/Content'
import DefaultHeaderContainer from './DefaultHeaderContainer'
import Footer from './Footer'
import HomeHeaderContainer from './HomeHeaderContainer'

const Layout = (props) => {
  return (
    <div>
      {props.source == 'home' && <HomeHeaderContainer />}
      {props.source != 'home' && <DefaultHeaderContainer />}
      {props.children}
      {!props.hide_footer && (
        <Content>
          <Footer />
        </Content>
      )}

      <div id="modal-root"></div>
    </div>
  )
}

export default Layout
