import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'

const PopupPortal = (props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // Set mounted to true only on the client-side

    if (mounted && typeof document !== 'undefined') {
      // Create a container for the portal on the client-side
      const el = document.createElement('div')

      // Append the container to the DOM
      document.getElementById('modal-root').appendChild(el)
    }
  }, [mounted])

  // Render nothing on the server-side or before the component is mounted on the client-side
  if (!mounted || typeof document === 'undefined') return null

  // Render the portal
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('modal-root') // The ID of the container element outside the parent component
  )
}

export default PopupPortal
