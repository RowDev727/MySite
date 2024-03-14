import styles from './Services.module.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { ourServices } from '../../data/ourServices'
import ServicesCard from '../../components/servicesCard/ServicesCard'

const Services = () => {
  return (
    <>
      <div className={`${styles.servicesPageComponent}`}>
        <div className={`${styles.servicesContainer} container`}>
          <h3 className={`${styles.servicesTitle}`}>Our Services</h3>
          <h1 className={`${styles.servicesSubTitle}`}>What we offer</h1>
          <div className={`${styles.servicesBody}`}>
            {/* Display ServiceCard component for each service in ourServices.js */}
            {
                ourServices.map(({icon, title, points}, index) => {
                    return (<ServicesCard key={index} icon={icon} title={title} points={points}/>)
                })
            }
          </div>
        </div>
      </div>
      <div><Newsletter theme={'light'}/></div>
    </>
  )
}

export default Services