import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'

const Navbar = ({title}) => {
    const [navShowing, setNavShowing] = useState(false)
  
    return (
    <nav>
        <div className={`${styles.navbarContainer} ${'container'}`}>
            <NavLink className={`${styles.navbarTitle}`} to={'/home'}>RowdieDevs</NavLink>
            <ul className={`${styles.navbarLinks} ${navShowing ? `${styles.showNav}` : `${styles.hideNav}`}` }>
                {
                    navLinks.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? `${styles.activeNav}` : ''} onClick={() => setNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
                <div className={`${styles.btnContainer}`}>
                    <NavLink className={styles.contactBtn} to={'/contact'} onClick={() => setNavShowing(prev => !prev)}>Contact Us</NavLink>
                </div>
            </ul>
            <button className={styles.navToggleBtn} onClick={() => setNavShowing(prev => !prev)}>
                {
                    navShowing ? <MdOutlineClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
    
  )
}

export default Navbar
