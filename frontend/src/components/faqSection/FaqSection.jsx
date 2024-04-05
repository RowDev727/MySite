import styles from './FaqSection.module.css'
import FaqCard from '../faqCard/FaqCard'
import { faqInfo } from '../../data/faqInfo'

const FaqSection = () => {
  
  return (
    <div className={`${styles.faqSectionComponent}`}>
        <div className={`${styles.faqSectionContainer}`}>
            <h1 className={`${styles.faqSectionTitle}`}>Frequently Asked Questions</h1>
            {/* Display FaqCard compnent for each frequently asked question in FaqInfo.js */}
            {
              faqInfo.map(({question, answer}, index) => (
                  <div key={index}><FaqCard x={index} question={question} answer={answer}/></div>
              ))
            }
        </div>
    </div>
  )
}

export default FaqSection