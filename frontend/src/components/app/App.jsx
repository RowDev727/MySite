// Custom Style Imports
import styles from './App.module.css'

// Custom Page Imports
import Home from '../../pages/home/Home'

// Custom Component Imports
import Navbar from '../navbar/Navbar'

// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
  <div className={styles.appContainer}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/projects' element={<Home/>}></Route>
        <Route path='/services' element={<Home/>}></Route>
        <Route path='/contact' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
