import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from './images/img_react-gsap.png'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    title: 'Architecto aliquam',
    subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.',
  },
  {
    title: 'Ceritatis placeat',
    subtitle:
      'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?',
  },
  {
    title: 'Vitae voluptates',
    subtitle:
      'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.',
  },
]

function App() {
  const [background, setBackground] = useState('#5a7d95')

  const headerRef = useRef(null)
  const revealsRefs = useRef([])
  revealsRefs.current = []

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

    revealsRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: true,
          },
        }
      )
    })
  }, [])

  const addToRefs = (el) => {
    if (el && !revealsRefs.current.includes(el)) {
      revealsRefs.current.push(el)
    }
  }

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => toggleBackground()}>toggle background</button>
        <p>Scroll down to see sections being revealed by ScrollTrigger.</p>
      </header>
      <main className="App-main">
        {sections.map(({ title, subtitle }) => {
          return (
            <div key={title} className="App-section" ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default App
