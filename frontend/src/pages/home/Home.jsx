import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={`${styles.homeContainer} ${'page'} ${'container'} ${styles.title}`}>
      <p className={`${styles.title1}`}>DEVELOP A WEB PRESENCE</p>
      <p className={`${styles.title2}`}>Grow your business.</p>
      <p className={`${styles.title3}`}>Fast, Dynamic, Scalable and Modern Web Applicatons</p>
      <p className={`${styles.title4}`}>Work closely with our experienced web developers to build tailored web applications for your organization.</p>
      <button className={`${styles.getStartedBtn}`}>Get Started</button>
    </div>
  )
}

export default Home