import styles from './Hero.module.css'
import  { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'
import Contact from '../../pages/contact/Contact'

const Hero = () => {
  return (
    <div className={`${styles.heroContainer} ${styles.title} ${'container'}`}>
      <p className={`${styles.title1}`}>DEVELOP A WEB PRESENCE</p>
      <p className={`${styles.title2}`}>Grow your business.</p>
      <p className={`${styles.title3}`}>Fast, Dynamic, Scalable & Modern</p>
      <span><ReactTyped strings={['Static Sites', 'Web Apps', 'Mobile Apps']} typeSpeed={120} backSpeed={140} loop/></span>
      
      <p className={`${styles.title4}`}>Work closely with our experienced web developers to build tailored web applications for your organization.</p>
      <Link to={'/contact'} className={`${styles.getStartedBtn}`}>Get Started</Link>
      {/* <button className={`${styles.getStartedBtn}`}>Get Started</button> */}
    </div>
  )
}

export default Hero