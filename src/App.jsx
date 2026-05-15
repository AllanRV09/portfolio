import { About } from "./sections/About"
import { Header } from "./sections/Header"
function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent
     selection:text-background mx-auto py-12 px-6">
      <Header />

      <main className="mt-25">
        <About />
      </main>
    </div>
  )
}

export default App
