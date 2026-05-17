import { About } from "./sections/About"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Experience } from "./sections/Experience"
import { TechStack } from "./sections/TechStack"
import { Footer } from "./sections/Footer"
import { Projects } from "./sections/Projects"

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent
     selection:text-background mx-auto">
      <Header />

      <main className="py-12 px-6 md:py-18 md:px-12">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App
