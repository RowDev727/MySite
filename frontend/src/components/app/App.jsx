// Custom Style Imports
import styles from './App.module.css'

// Custom Page Imports
import Home from '../../pages/home/Home'
import Projects from '../../pages/projects/Projects'
import Services from '../../pages/services/Services'
import Contact from '../../pages/contact/Contact'

// Custom Component Imports
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ScrollToTop from '../scrollToTop/ScrollToTop'

// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Newsletter from '../newsletter/Newsletter'


function App() {
  return (
  <div className={styles.appContainer}>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    
    <Footer/>
  </div>
  )
}

export default App
