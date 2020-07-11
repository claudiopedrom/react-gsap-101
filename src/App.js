import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import logo from './images/img_react-gsap.png'
import './App.css'

function App() {
  const [background, setBackground] = useState('#5a7d95')

  const headerRef = useRef(null)

  const toggleBackground = () => {
    const color = background !== '#5a7d95' ? '#5a7d95' : '#1b4943'
    setBackground(color)
  }

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: 'none',
    })
  }, [background])

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    })
  }, [headerRef])

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => toggleBackground()}>toggle background</button>
        <p>Scroll down to see sections being revealed by ScrollTrigger.</p>
      </header>
      <main className="App-main">
        <div className="App-section">
          <h2>Title</h2>
          <p>Subtitle</p>
        </div>
      </main>
    </div>
  )
}

export default App
