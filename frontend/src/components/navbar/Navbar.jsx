import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
        <div className={`${style.navbarContainer} ${'container'}`}>
        <h1>CHRIS.</h1>
        <ul className={style.navbarLinks}>
            {
                navLinks.map(({name, path}, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
            <li><NavLink className={style.contactBtn} to={'/contact'}>Contact</NavLink></li>
        </ul>
        <FaBars className={style.bars}/>
        </div>
    </nav>
    
  )
}

export default Navbar
