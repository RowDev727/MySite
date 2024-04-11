import styles from './About.module.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { devPhases } from '../../data/devPhases.jsx'

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageComponent}`}>
        <div className={`${styles.aboutContainer} container`}>
          <h1 className={`${styles.aboutTitle}`}>About Us</h1>
          <div className={`${styles.aboutRow}`}>
            <div className={`${styles.aboutLeftCol}`}>
              <h2 className={`${styles.aboutLeftTitle}`}>Our Vision</h2>
              <p className={`${styles.aboutLeftText}`}>RowdieDev's mission is to provide exceptional service to our customers by simplifying the process of developing your dream apps.</p>
              <p className={`${styles.aboutLeftText}`}>Our team of developers have a wide variety of skills and the technical knowledge required to quickly and efficiently,
design, build and deploy the app you've been dreaming of.</p>
            </div>
            <div className={`${styles.aboutRightCol}`}>
              {/* Display card for each object in devPhases.js */}
              {
                devPhases.map(({Icon, title, description}, index) => {
                  return (
                  <div key={index} className={`${styles.aboutRightCard}`}>
                    <h2 className={`${styles.aboutRightTitle}`}>{Icon}{title}</h2>
                    <p className={`${styles.aboutRightText}`}>{description}
                    </p>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div><Newsletter theme={'light'}/></div>
    </>
  )
}

export default About