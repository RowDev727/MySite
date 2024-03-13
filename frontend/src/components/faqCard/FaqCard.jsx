import styles from './FaqCard.module.css'

const FaqCard = ({question}) => {
  return (
    <div className={`${styles.faqCardComponent}`}>
        <div className={`${styles.faqCardContainer} container`}>
            <div className={`${styles.faqCard}`}>
                <h1>+</h1>
                <p>{question}</p>
            </div>
        </div>
    </div>
  )
}

export default FaqCard