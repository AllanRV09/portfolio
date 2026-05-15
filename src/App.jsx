import { About } from "./sections/About"
import { Header } from "./sections/Header"
import { Experience } from "./sections/Experience"
import { TechStack } from "./sections/TechStack"
import { Footer } from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent
     selection:text-background mx-auto py-12 px-6">
      <Header />

      <main className="mt-25">
        <About />
        <Experience />
        <TechStack />
        <Footer />
      </main>
    </div>
  )
}

export default App
