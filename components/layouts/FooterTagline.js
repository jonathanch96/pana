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
      <div className="text-[36px]  leading-[60px] font-black text-center w-full pt-5 pb-5 mt-[146px] mb-[146px]">
        CREATING CULTURAL{' '}
        <div
          className={`inline-block w-[300px] text-center ${
            flag ? 'font-snell text-[40px]' : 'uppercase'
          }`}
        >
          Harmonization
        </div>{' '}
        THROUGH THE{' '}
        <div
          className={`inline-block w-[482px] ${
            !flag ? 'font-snell text-[40px]' : 'uppercase'
          }`}
        >
          Language of Body Scent
        </div>
      </div>
    </>
  )
}

export default FooterTagline
