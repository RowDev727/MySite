import styles from './ComingSoon.module.css'
import { NavLink } from 'react-router-dom'
import Newsletter from '../../components/newsletter/Newsletter'

const ComingSoon = () => {
  return (
    <>
        <div className={`${styles.comingSoonPageComponent}`}>
            <div className={`${styles.comingSoonTitle}`}>
                <h1>Coming Soon!</h1>
            </div>
            <NavLink className={`${styles.comingSoonBtn}`} to={'/home'}>Go Home</NavLink>
        </div>
        <Newsletter theme={'light'}/>
    </>
  )
}

export default ComingSoon