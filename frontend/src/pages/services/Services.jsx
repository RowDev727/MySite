import styles from './Services.module.css'
import Newsletter from '../../components/newsletter/Newsletter'

const Services = () => {
  return (
    <>
      <div className={`${styles.servicesPageContainer}`}>
        <div className={`${styles.servicesContainer} container`}>
          <h1>Services</h1>
        </div>
      </div>
      <div><Newsletter theme={'light'}/></div>
    </>
  )
}

export default Services