import './App.css'
import Landing from "./components/Landing"
import MultiCarousel from "./components/MultiCarousel"
import Cal from "./components/Cal"
import Contact from "./components/Contact"

function App() {

  return (
    <>

      <div className="container">
        <Landing />
        <MultiCarousel />
        <Cal />
        <Contact /> 
      </div>
    </>
  )
}

export default App
