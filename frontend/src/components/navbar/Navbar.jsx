import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
    const [navShowing, setNavShowing] = useState(false)
  
    return (
    <nav>
        <div className={`${styles.navbarContainer} ${'container'}`}>
            <h1>AllStacks</h1>
            <ul className={`${styles.navbarLinks} ${navShowing ? `${styles.showNav}` : `${styles.hideNav}`}` }>
                {
                    navLinks.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? `${styles.activeNav}` : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
                <div className={`${styles.btnContainer}`}>
                    <NavLink className={styles.contactBtn} to={'/contact'}>Contact Us</NavLink>
                </div>
            </ul>
            <button className={styles.navToggleBtn} onClick={() => setNavShowing(!navShowing)}>
                {
                    navShowing ? <MdOutlineClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
    
  )
}

export default Navbar
