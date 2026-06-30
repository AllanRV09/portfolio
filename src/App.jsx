import { lazy, Suspense, useEffect } from "react"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Services } from "./sections/Services"
import { About } from "./sections/About"
import { Footer } from "./sections/Footer"
import { LenisProvider } from "./context/LenisProvider"

const Stack = lazy(() => import("./sections/Stack").then(m => ({ default: m.Stack })))
const Experience = lazy(() => import("./sections/Experience").then(m => ({ default: m.Experience })))
const Projects = lazy(() => import("./sections/Projects").then(m => ({ default: m.Projects })))
const ContactSection = lazy(() => import("./sections/ContactSection").then(m => ({ default: m.ContactSection })))

function App() {
  useEffect(() => {
    const prefetch = () => {
      import("./sections/Stack")
      import("./sections/Experience")
      import("./sections/Projects")
      import("./sections/ContactSection")
    }

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch)
      return () => window.cancelIdleCallback(id)
    }

    const id = setTimeout(prefetch, 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <LenisProvider>
        <div className="min-h-svh bg-surface text-text selection:bg-accent selection:text-background mx-auto">
          <Header />
          <main>
            <Hero />
            <Services />
            <About />

            <Suspense fallback={<div className="min-h-[60vh]" />}>
              <Stack />
            </Suspense>

            <Suspense fallback={<div className="min-h-[50vh]" />}>
              <Experience />
            </Suspense>

            <div className="relative overflow-hidden">
              <Suspense fallback={<div className="min-h-[90vh]" />}>
                <Projects />
              </Suspense>

              <Suspense fallback={<div className="min-h-[70vh]" />}>
                <ContactSection />
              </Suspense>

              <Footer />
            </div>
          </main>
        </div>
      </LenisProvider>
    </>
  )
}

export default App