import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
        <div className={`${styles.navbarContainer} ${'container'}`}>
        <h1>AllStacks</h1>
        <ul className={styles.navbarLinks}>
            {
                navLinks.map(({name, path}, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
            <div className={`${styles.btnContainer}`}><NavLink className={styles.contactBtn} to={'/contact'}>Contact Us</NavLink></div>
        </ul>
        <FaBars className={styles.bars}/>
        </div>
    </nav>
    
  )
}

export default Navbar
