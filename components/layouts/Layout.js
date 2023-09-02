import FooterContainer from './FooterContainer'
import HomeHeaderContainer from './HomeHeaderContainer'

const Layout = (props) => {
  return (
    <div>
      {props.source == 'home' && <HomeHeaderContainer />}
      {props.source != 'home' && <Headers />}
      {props.children}
      <FooterContainer />
    </div>
  )
}

export default Layout
