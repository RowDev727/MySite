import { useState } from 'react'
import styles from './Newsletter.module.css'

const Newsletter = ({theme}) => {

  return (
    <div className={`${styles.newsletterContainer} ${theme === 'light' ? `${styles.newsletterContainerLight}` : `${styles.newsletterContainerDark}`}`}>
      <div className={`${styles.newsletter} container`}>
        <div className={`${styles.newsletterLeft}`}>
          <h1 className={`${styles.title}`}>Want us to keep in touch?</h1>
          <p className={`${theme === 'light' ? `${styles.textLight}` : `${styles.textDark}`}`}>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className={`${styles.newsletterRight}`}>
          <div className={`${styles.newsletterTop} ${theme === 'light' && `${styles.newsletterTopLight}`}`}>
            <input type='text' placeholder='E-Mail Address'></input>
            <button className={`${theme === 'light' && `${styles.btnDark}`}`}>Notify Me</button>
          </div>
          <div className={`${styles.newsletterBottom}`}>
            <p className={`${theme === 'light' && `${styles.textDark}`}`}>We care about the privacy of your data, read our</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        </div>
    </div>
  )
}



export default Newsletter