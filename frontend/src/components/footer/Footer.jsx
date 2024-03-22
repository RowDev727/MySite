import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.footer} container`}>
        <div className={`${styles.footerHeader}`}>
          <h1 className={`${styles.footerTitle}`}>RowdieDevs</h1>
          <p className={`${styles.footerText}`}>Dedicated to providing our customers with exceptional software and exceptional service!</p>
        </div>
        <div className={`${styles.footerBody}`}>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Solutions</h3>
            <ul>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Commerce</a></li>
            </ul>
            </div>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Support</h3>
                <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Guides</a></li>
                </ul>
            </div>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Company</h3>
                <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Jobs</a></li>
                </ul>
            </div>
            <div className={`${styles.footerCard}`}>
            <h3 className={`${styles.footerCardTitle}`}>Legal</h3>
                <ul>
                <li><a href="#">Claim</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer