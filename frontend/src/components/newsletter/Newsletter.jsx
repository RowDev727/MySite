import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={`${styles.newsletterContainer}`}>
      <div className={`${styles.newsletter} container`}>
        <div className={`${styles.newsletterLeft}`}>
          <h1 className={`${styles.title}`}>Want tips & tricks to optimize your flow?</h1>
          <p className={`${styles.text}`}>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className={`${styles.newsletterRight}`}>
          <div className={`${styles.newsletterTop}`}>
            <input type='text'></input>
            <button>Notify Me</button>
          </div>
          <div className={`${styles.newsletterBottom}`}>
            <p>We care about the privacy of your data, read our</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        </div>
    </div>
  )
}



export default Newsletter