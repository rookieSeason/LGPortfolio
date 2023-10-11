import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='overscroll-x-none'>
      <Nav/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
      
    </>
  )
}

export default App
