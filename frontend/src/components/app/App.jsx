// Custom Style Imports
import styles from './App.module.css'

// Custom Page Imports
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Services from '../../pages/services/Services'
import Contact from '../../pages/contact/Contact'
import Admin from '../../pages/admin/Admin'
import NotFound from '../../pages/notFound/NotFound'
import ComingSoon from '../../pages/comingSoon/ComingSoon'
import AdminLogin from '../../pages/adminLogin/AdminLogin'

// Custom Component Imports
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

// Custom Component Utilities
import RequireAuth from '../../utils/requireAuth/RequireAuth'

// Dependencies
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
  <div className={styles.appContainer}>
    
    <Navbar title={'RowdieDevs'} />
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/comingsoon' element={<ComingSoon/>}/>
      <Route path='*' element={<NotFound/>}/>
      {/* Protected Routes */}
      <Route element={<RequireAuth/>}>
        <Route path='/admin' element={<Admin/>} exact/>
      </Route>
    </Routes>
    
    <Footer/>
  </div>
  )
}

export default App
