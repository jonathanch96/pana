import { useEffect, useState } from 'react'

const FooterTagline = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setFlag((prevFlag) => !prevFlag)
    }, 600)

    return () => clearInterval(interval)
  }, [])
  const [flag, setFlag] = useState(true)
  return (
    <>
      <div className="text-[24px] xl:text-[30px] 2xl:text-[36px] leading-[60px] font-black text-center w-full pt-5 pb-5 mt-5 mb-5 xsm:mt-[80px] xsm:mb-[80px] xl:mt-[146px] xl:mb-[146px] lg:whitespace-nowrap">
        CREATING CULTURAL{' '}
        <div
          className={`xsm:inline-block xsm:w-[210px] xl:w-[264px] 2xl:w-[300px] text-center ${
            flag ? 'footer-tagline-text' : 'uppercase'
          }`}
        >
          Harmonization
        </div>{' '}
        THROUGH THE{' '}
        <div
          className={`xsm:inline-block xsm:w-[330px] xl:w-[440px] 2xl:w-[482px] ${
            !flag ? 'footer-tagline-text' : 'uppercase'
          }`}
        >
          Language <br className="xsm:hidden" />
          of Body Scent
        </div>
      </div>
    </>
  )
}

export default FooterTagline
