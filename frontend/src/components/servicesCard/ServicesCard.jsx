import styles from './ServicesCard.module.css'
import info_img from '../../assets/info_img.jpg'
import { HiCodeBracket } from "react-icons/hi2"

const ServicesCard = ({icon, title, points}) => {
  return (
    <div className={`${styles.servicesCardComponent}`}>
        <div className={`${styles.servicesCardContainer}`}>
            <div className={`${styles.servicesCard}`}>
                <div className={`${styles.servicesCardBanner}`}></div>
                <img className={`${styles.servicesCardIcon}`} src={info_img}></img>
                <h1 className={`${styles.servicesCardTitle}`}>{title}</h1>
                <p className={`${styles.servicesCardPoints}`}>{points}</p>
                <button className={`${styles.servicesCardBtn}`}>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard