import './App.css'
import Intro from './../src/components/Navbar/Intro/Intro'
import AboutUs from './../src/components/Navbar/AboutUs/AboutUs'
import Features from './../src/components/Navbar/Features/Features'
import Footer from './../src/components/Footer/Footer'
function App() {

  return (
    <>
      <div>
        <Intro />
        <AboutUs />
        <Features />
        <Footer />
      </div>
    </>
  )
}

export default App
