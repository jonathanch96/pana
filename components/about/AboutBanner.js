const AboutBanner = () => {
  return (
    <div className="relative">
      <img
        className="w-full"
        src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693720552/about_banner_etuzvf.png"
      />
      <div className="w-full custom-text-120px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div>
          WHERE{' '}
          <span className="font-snell custom-text-140px">&nbsp;The Earth</span>
        </div>
        <div className="-mt-3 sm:-mt-5 xl:-mt-83px">
          is <span className="font-snell custom-text-140px">&nbsp;Stepped</span>{' '}
          On
          <span className="font-snell custom-text-140px">&nbsp;,</span>
        </div>
        <div className="-mt-3 sm:-mt-5 xl:-mt-83px">
          THERE{' '}
          <span className="font-snell custom-text-140px">&nbsp;The Sky</span>
        </div>
        <div className="-mt-3 sm:-mt-5 xl:-mt-83px">IS UPHELD</div>
      </div>
    </div>
  )
}

export default AboutBanner
