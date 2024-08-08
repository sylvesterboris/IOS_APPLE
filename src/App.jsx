import Highlights from "./components/Highlights"
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Models from "./components/Model"
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      
      <Hero/>

      <Highlights />

      <Models/>

      <Features/>

      <HowItWorks/>

      <Footer/>

    
      
      
    </main>
  )
}

export default App
