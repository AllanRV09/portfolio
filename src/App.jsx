import { About } from "./sections/About"
import { Stack } from "./sections/Stack"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Experience } from "./sections/Experience"
import { Footer } from "./sections/Footer"
import { Projects } from "./sections/Projects"
import { PageIntro } from "./sections/PageIntro"
import Lenis from 'lenis'
import { useEffect } from "react"
import { Services } from "./sections/Services"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId;

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <PageIntro />
      <div className="min-h-screen bg-background text-text selection:bg-accent selection:text-background mx-auto">
        <Header />

        <main>
          <Hero />
          <Services />
          <About />
          <Stack />
          <Experience />
          <div className="relative overflow-hidden">
            <Projects />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
