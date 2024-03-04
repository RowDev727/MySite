import styles from './Info.module.css'
import info_img from '../../assets/info_img.jpg'

const Info = () => {
    return (
        <div className={`${styles.infoContainer}`}>
            <div className={`${styles.infoSection} ${'container'}`}>
                <div className={`${styles.infoLeft}`}>
                    <img src={info_img}></img>
                </div>
                <div className={`${styles.infoRight}`}>
                    <p className={`${styles.title1}`}>Lorem ipsum dolor sit.</p>
                    <p className={`${styles.title2}`}>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum, recusandae ex quae qui dolorum incidunt error aliquam veritatis voluptate quibusdam unde expedita facilis rem repellendus ipsa reprehenderit ullam consequuntur! Animi magni autem beatae.</p>
                    <button className={`${styles.infoBtn}`}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Info