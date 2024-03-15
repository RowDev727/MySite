import FaqCard from '../faqCard/FaqCard'
import styles from './FaqSection.module.css'
import { faqInfo } from '../../data/faqInfo'
import { useState } from 'react'

const FaqSection = () => {

  // const [faqs, setFaqs] = useState(faqInfo.map(({question, answer}) => {
  //   return {
  //     question: question,
  //     answer: answer,
  //     open: false
  //   }
  // }))

  // const toggleFAQ = index => {
  //   setFaqs(faqs.map((faq, i) => {
  //     if (i === index) {
  //       faq.open = !faq.open
  //     } else {
  //       faq.open = false
  //     }
  //     return faq
  //   }))
  // }

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