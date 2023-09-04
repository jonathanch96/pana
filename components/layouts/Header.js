import { Flowbite, Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'

const CustomHeaderTheme = {
  base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
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
  brand: {
    base: 'flex items-center',
  },
  collapse: {
    base: 'w-full md:block md:w-auto',
    list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
    hidden: {
      on: 'hidden',
      off: '',
    },
  },
  link: {
    base: 'block py-2 pr-4 pl-3 md:p-0',
    active: {
      on: 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700',
      off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
    },
    disabled: {
      on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
      off: '',
    },
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
    icon: 'h-6 w-6 shrink-0',
  },
}

const Header = () => {
  const router = useRouter()
  const isActive = (href) => {
    return router.pathname.startsWith(href)
  }

  return (
    <Navbar theme={CustomHeaderTheme} fluid={true} rounded={true}>
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
