import styles from './FaqCard.module.css'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'

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
              <div className={`${styles.faqTop}`}>
                {isClicked === x ? <MdOutlineClose/> : <FaPlus/>}
                <p>{question}</p>
              </div>  
              <div className={`${styles.faqBottom} ${isClicked === x ? `${styles.showAnswer}` : `${styles.hiddenAnswer}`}`}>{answer}</div>
            </div>
        </div>
    </div>
  )
}


export default FaqCard