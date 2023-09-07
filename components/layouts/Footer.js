import SocialContainer from './SocialContainer'

const Footer = () => {
  return (
    <>
      <SocialContainer />
      <img
        className="w-full mt-146px mb-146px"
        src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693918335/footer/RUNNING-TEXT_1_iyzlxc.gif"
        alt="Footer Image"
      />
      <div className="flex justify-between text-sm text-customGray font-normal font-uncut ml-4 mr-4 lg:mr-50px lg:ml-50px mb-83px">
        <div className="">Copyright @ 2023, PANA SCENT All Rights Reserved</div>
        <div className="">Terms of Use | Privacy Policy</div>
      </div>
    </>
  )
}

export default Footer
