import styles from './NotFound.module.css'
import { NavLink } from 'react-router-dom'
import Newsletter from '../../components/newsletter/Newsletter'

const NotFound = () => {
  return (
    <>
        <div className={`${styles.notFoundPageComponent}`}>
            <div className={`${styles.notFoundTitle}`}>
                <h1>404 Page Not Found!</h1>
            </div>
            <NavLink className={`${styles.notFoundBtn}`} to={'/home'}>Go Home</NavLink>
        </div>
        <Newsletter theme={'light'}/>
    </>
  )
}

export default NotFound