import { useEffect, useRef } from 'react'
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

const Typeform  = () => {
  const container = useRef()

  useEffect(() => {
    createWidget("WSFdTvRP", { container: container.current })
  }, [])

  return (
    <>
      <div className='tf-container' ref={container} />
      <style jsx>{`
        .tf-container {
          height: 20em;
        }
      `}</style>
    </>
  )
}

export default Typeform
