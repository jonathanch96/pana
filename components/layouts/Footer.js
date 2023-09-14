import FooterTagline from './FooterTagline'
import SocialContainer from './SocialContainer'

const Footer = () => {
  return (
    <>
      <SocialContainer />
      <FooterTagline />
      <div className="flex justify-between text-sm text-customGray font-normal font-uncut ml-4 mr-4 lg:mr-50px lg:ml-50px mb-83px">
        <div className="">Copyright @ 2023, PANA SCENT All Rights Reserved</div>
      </div>
    </>
  )
}

export default Footer
