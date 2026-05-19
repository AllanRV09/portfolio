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

      <main className="px-4 sm:px-6 lg:px-8 relative max-w-2xl mx-auto flex flex-col justify-center items-center space-y-20 lg:space-y-24">
        
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
