import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { ServicesStack } from "./sections/services-stack/ServicesStack"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { ContactSection } from "./sections/ContactSection"
import { Footer } from "./sections/Footer"
import { LenisProvider } from "./context/LenisProvider"

function App() {
  return (
    <LenisProvider>
      <div className="min-h-svh bg-surface text-text selection:bg-accent selection:text-background mx-auto">
        <Header />
        <main>
          <Hero />
          <About />
          <ServicesStack />
          <Experience />

          <div className="relative overflow-hidden">
            <Projects />
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </LenisProvider>
  )
}

export default App
