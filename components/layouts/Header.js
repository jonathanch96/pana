import { Flowbite, Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'

const FlowbiteNavbarRootTheme = {
  base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-50px',
  rounded: {
    on: 'rounded',
    off: '',
  },
  bordered: {
    on: 'border',
    off: '',
  },
  inner: {
    base: 'mx-auto flex flex-wrap items-center justify-between h-20',
    fluid: {
      on: '',
      off: 'container',
    },
  },
}

const FlowbiteNavbarCollapseTheme = {
  base: 'w-full md:block md:w-2/6',
  list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium md:justify-between',
  hidden: {
    on: 'hidden',
    off: '',
  },
}

const Header = () => {
  const router = useRouter()
  const isActive = (href) => {
    return router.pathname.startsWith(href)
  }

  return (
    <Navbar theme={FlowbiteNavbarRootTheme} fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="https://res.cloudinary.com/decwwfkpi/image/upload/v1693705256/Pana_Logo_Pack-04_3_oimvyt.png"
          className="mr-3 h-11 sm:h-9"
          alt="Pana Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse theme={FlowbiteNavbarCollapseTheme}>
        <Navbar.Link
          className={
            isActive('/perfume') &&
            `font-snell text-black font-black text-xl leading-tight`
          }
          href="/perfume"
        >
          Perfume
        </Navbar.Link>
        <Navbar.Link
          className={
            isActive('/about') &&
            `font-snell text-black font-black text-xl leading-tight`
          }
          href="/about"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          className={
            isActive('/find-us') &&
            `font-snell text-black font-black text-xl leading-tight`
          }
          href="/find-us"
        >
          Find Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
