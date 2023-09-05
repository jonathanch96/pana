import { useEffect, useState } from 'react'
import Header from './Header'

const HomeHeaderContainer = () => {
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      // Set a scroll threshold at which you want the component to become fixed
      const scrollThreshold = 110 // Adjust this value to your desired height

      // Check the current scroll position
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {isFixed && (
        <>
          <div className="w-full h-106px"></div>
          <div className="fixed w-full top-0 left-0 z-40">
            <Header />
          </div>
        </>
      )}
      {!isFixed && (
        <div>
          <Header />
        </div>
      )}
    </>
  )
}

export default HomeHeaderContainer
