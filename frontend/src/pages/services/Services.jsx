import styles from './Services.module.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { ourServices } from '../../data/ourServices'
import ServicesCard from '../../components/servicesCard/ServicesCard'
import { HiCodeBracket } from 'react-icons/hi2'

const Services = () => {
  return (
    <>
      <div className={`${styles.servicesPageComponent}`}>
        <div className={`${styles.servicesContainer} container`}>
          <h1 className={`${styles.servicesTitle}`}>Our Services</h1>
          <div className={`${styles.servicesRow}`}>
            {/* Display ServiceCard component for each service in ourServices.js */}
                {
                    ourServices.map(({icon, title, points}, index) => {
                        return (<ServicesCard key={index} icon={<HiCodeBracket/>} title={title} points={points}/>)
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