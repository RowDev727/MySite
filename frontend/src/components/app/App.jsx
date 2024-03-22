// Custom Style Imports
import styles from './App.module.css'

// Custom Page Imports
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Services from '../../pages/services/Services'
import Contact from '../../pages/contact/Contact'
import Admin from '../../pages/admin/Admin'
import NotFound from '../../pages/notFound/NotFound'

// Custom Component Imports
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

// Dependencies
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
  <div className={styles.appContainer}>
    
    <Navbar title ={'RowdieDevs'} />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    <Footer/>
  </div>
  )
}

export default App
