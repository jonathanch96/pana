import { Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const isActive = (href) => {
    return router.pathname.startsWith(href)
  }

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693705256/Pana_Logo_Pack-04_3_oimvyt.png"
          className="mr-3 h-11 sm:h-9"
          alt="Pana Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className={isActive('/perfume') && `font-snell text-black font-black`}
          href="/perfume"
        >
          Perfume
        </Navbar.Link>
        <Navbar.Link
          className={isActive('/about') && `font-snell text-black font-black`}
          href="/about"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          className={isActive('/find-us') && `font-snell text-black font-black`}
          href="/find-us"
        >
          Find Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
