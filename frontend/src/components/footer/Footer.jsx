import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerHeader}`}>
          <NavLink className={`${styles.footerTitle}`} to={'/home'}>RowdieDevs</NavLink>
          <p className={`${styles.footerText}`}>Dedicated to providing our customers with exceptional software and exceptional service!</p>
        </div>
        <div className={`${styles.footerBody}`}>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Solutions</h3>
            <ul>
                <li><NavLink to={'/comingsoon'}>Analytics</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Marketing</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Commerce</NavLink></li>
            </ul>
            </div>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Support</h3>
                <ul>
                <li><NavLink to={'/comingsoon'}>Pricing</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Documentation</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Guides</NavLink></li>
                </ul>
            </div>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Company</h3>
                <ul>
                <li><NavLink to={'/comingsoon'}>About</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Blogs</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Jobs</NavLink></li>
                </ul>
            </div>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Legal</h3>
                <ul>
                <li><NavLink to={'/comingsoon'}>Claim</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Privacy</NavLink></li>
                <li><NavLink to={'/comingsoon'}>Terms</NavLink></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer