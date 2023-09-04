import Header from './Header'

const DefaultHeaderContainer = () => {
  return (
    <>
      <div className='w-full h-106px'></div>
      <div className="fixed w-full top-0 left-0 z-40">
        <Header />
      </div>
    </>
  )
}

export default DefaultHeaderContainer
