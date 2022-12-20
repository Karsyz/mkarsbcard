import React from 'react'
import './App.css'
import Picture from './components/Picture'
import Title from './components/Title'
import Buttons from './components/Buttons'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="container">
      <Picture />
      <Title />
      <div className='inner'>
        <Buttons />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}