import { About } from "./sections/About"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Experience } from "./sections/Experience"
import { TechStack } from "./sections/TechStack"
import { Footer } from "./sections/Footer"
import { Projects } from "./sections/Projects"
import { PageIntro } from "./sections/PageIntro"
import Lenis from 'lenis'
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId; // Guardamos el ID aquí

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf) // Guardamos el ID en cada frame
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId) // <--- ¡Limpieza total!
    }
  }, [])

  return (
    <>
      <PageIntro />
      <div className="min-h-screen bg-background text-text selection:bg-accent selection:text-background mx-auto">
        <Header />

        <main>
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
