import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
// import { Twemoji } from '../Twemoji'

export function TypedHeading() {
  const el = useRef(null)
  // let typed = React.useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi, I'm Jasmine!"],
      startDelay: 10,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 1500,
      // loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className="font-sans text-3xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      <span ref={el} />
    </div>
  )
}
