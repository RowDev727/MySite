import styles from './Services.module.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { ourServices } from '../../data/ourServices.jsx'
import ServicesCard from '../../components/servicesCard/ServicesCard'


const Services = () => {
  return (
    <>
      <div className={`${styles.servicesPageComponent}`}>
        <div className={`${styles.servicesContainer} container`}>
          <h1 className={`${styles.servicesTitle}`}>Our Services</h1>
          <div className={`${styles.servicesRow}`}>
            {/* Display ServiceCard component for each service in ourServices.js */}
                {
                    ourServices.map(({Icon, title, points}, index) => {
                        return (
                          <div key={index}>
                            <ServicesCard Icon={Icon} title={title} points={points}/>
                          </div>
                        )
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