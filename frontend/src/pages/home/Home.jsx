// Custom Style Imports
import styles from './Home.module.css'

// Custom Component Imports
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'
import Newsletter from '../../components/newsletter/Newsletter'
import Test from '../../components/testing/Test'

const Home = () => {
  return (
    <>
      <div className={`${styles.homeContainer}`}>
        <div className={`${styles.heroSection}`}><Hero /></div>
        <div className={`${styles.infoSection}`}><Info /></div>
        <div className={`${styles.newsletterSection}`}><Newsletter /></div>
        <div className={`${styles.testingSection}`}><Test /></div>

      </div>
    </>
  )
}

export default Home