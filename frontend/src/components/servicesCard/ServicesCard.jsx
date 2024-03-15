import styles from './ServicesCard.module.css'

const ServicesCard = ({icon, title, points}) => {
  return (
    <div className={`${styles.servicesCardComponent}`}>
        <div className={`${styles.servicesCardContainer}`}>
        <div className={`${styles.servicesBody}`}>
              <div className={`${styles.servicesIcon}`}>{icon}</div>
              <h2>{title}</h2>
              <p>{points}</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard