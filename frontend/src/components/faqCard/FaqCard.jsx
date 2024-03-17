import styles from './FaqCard.module.css'
import { useState } from 'react'

const FaqCard = ({x, question, answer}) => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleAnswer = (x) => {
    if (isClicked === x) {
      console.log('close', x)
      return setIsClicked(false)
    } else {
      setIsClicked(x)
      console.log('open', x)
    }
  }


  return (
    <div className={`${styles.faqCardComponent}`}>
        <div className={`${styles.faqCardContainer} container`}>
            <div onClick={() => toggleAnswer(x)} className={`${styles.faqCard}`}>
                <h1>+</h1>
                <p>{question}</p>
                <p className={`${isClicked === x ? `${styles.showAnswer}` : `${styles.hiddenAnswer}`}`}>{answer}</p>
            </div>
        </div>
    </div>
  )
}

export default FaqCard