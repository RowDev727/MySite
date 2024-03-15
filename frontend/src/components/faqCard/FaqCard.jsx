import styles from './FaqCard.module.css'

const FaqCard = ({question, toggleAnswer}) => {
  return (
    <div className={`${styles.faqCardComponent}`}>
        <div className={`${styles.faqCardContainer} container`}>
            <div className={`${styles.faqCard}`} onClick={toggleAnswer}>
                <h1>+</h1>
                <p>{question}</p>
            </div>
        </div>
    </div>
  )
}

export default FaqCard