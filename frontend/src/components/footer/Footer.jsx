import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.footerSection} container`}>
        <div className={`${styles.col}`}>
          <h1 className={`${styles.title}`}>AllStacks</h1>
          <p className={`${styles.text}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quam facilis voluptatem voluptate</p>
        </div>
        <div className={`${styles.col}`}>
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Commerce</a></li>
            <li><a href="#">Insight</a></li>
          </ul>
        </div>
        <div className={`${styles.col}`}>
          <h3>Support</h3>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">API Status</a></li>
            </ul>
        </div>
        <div className={`${styles.col}`}>
          <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Press</a></li>
            </ul>
        </div>
        <div className={`${styles.col}`}>
          <h3>Legal</h3>
            <ul>
              <li><a href="#">Claim</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer