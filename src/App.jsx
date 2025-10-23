import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="app m-0 p-0">
      <Header />
      <Home/>
      <Skills/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App