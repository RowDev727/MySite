// Custom Style Imports
import styles from './Home.module.css'

// Custom Component Imports
import Hero from '../../components/hero/Hero'

const Home = () => {
  return (
    <div className={`${styles.homeContainer} ${styles.title} ${'page'}`}>
      <Hero />
    </div>
  )
}

export default Home