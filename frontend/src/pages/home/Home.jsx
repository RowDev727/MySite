// Custom Style Imports
import styles from './Home.module.css'

// Custom Component Imports
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'
import Newsletter from '../../components/newsletter/Newsletter'
import FaqSection from '../../components/faqSection/FaqSection'

const Home = () => {
  return (
    <>
      <div className={`${styles.homePageComponent}`}>
        <div className={`${styles.homeContainer}`}>
          <div className={`${styles.heroSection}`}><Hero /></div>
          <div className={`${styles.infoSection}`}><Info /></div>
          <div className={`${styles.newsletterSection}`}><Newsletter theme={'dark'} /></div>
          <div className={`${styles.faqSection}`}><FaqSection /></div>
        </div>
      </div>
    </>
  )
}

export default Home