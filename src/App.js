import React, { useRef, useEffect } from 'react'
import logo from './images/img_react-gsap.png'
import './App.css'

function App() {
  const headerRef = useRef(null)

  useEffect(() => {
    console.log(headerRef)
  }, [headerRef])

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
