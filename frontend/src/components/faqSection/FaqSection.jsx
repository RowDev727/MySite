import FaqCard from '../faqCard/FaqCard'
import styles from './FaqSection.module.css'
import { faqInfo } from '../../data/faqInfo'

const FaqSection = () => {
  return (
    <div className={`${styles.faqSectionComponent}`}>
        <div className={`${styles.faqSectionContainer}`}>
            <h1 className={`${styles.faqSectionTitle}`}>Frequently Asked Questions</h1>
            {/* Display FaqCard compnent for each frequently asked question in FaqInfo.js */}
            {
                faqInfo.map(({question, answer}, index) => {
                    return (<FaqCard key={index} question={question}/>)
                })
            }
        </div>
    </div>
  )
}

export default FaqSection