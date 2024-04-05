import styles from './Info.module.css'
import info_img from '../../assets/info_img.jpg'
import { NavLink } from 'react-router-dom'

const Info = () => {
    return (
        <div className={`${styles.infoContainer}`}>
            <div className={`${styles.infoSection} ${'container'}`}>
                <div className={`${styles.infoLeft}`}>
                    <img src={info_img}></img>
                </div>
                <div className={`${styles.infoRight}`}>
                    <p className={`${styles.title1}`}>What do we do?</p>
                    <p className={`${styles.title2}`}>We develop the web!</p>
                    <p>Our team of web developers and engineer work closely with customers to build 100% tailored web applications.  We understand that building a web presence can be a daunting task and we're here to make that dream a reality by offering a variety of services to best fit our customers needs.  Contact us to schedule a consultation!</p>
                    <NavLink to={'/contact'} className={`${styles.infoBtn}`} >Get Started</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Info