import styles from './Projects.module.css'
import Newsletter from '../../components/newsletter/Newsletter'

const Projects = () => {
  return (
    <>
      <div className={`${styles.projectsPageContainer}`}>
        <div className={`${styles.projectsContainer} container`}>
          <h1>Projects</h1>
        </div>
      </div>
      <div><Newsletter theme={'light'}/></div>
    </>
  )
}

export default Projects