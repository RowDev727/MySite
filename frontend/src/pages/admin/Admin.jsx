import styles from './Admin.module.css'
import { useState, useEffect } from 'react'

const About = () => {
  
    const [messages, setMessages] = useState([])
    // Fetch Messages from API
    useEffect(() => {
        fetch('api/messages').then(res => res.json()).then(data => {
        setMessages(data.messages)
        })
    }, [])

    return (
    <>
      <div className={`${styles.adminPageComponent}`}>
        <div className={`${styles.adminContainer} container`}>
          <h1 className={`${styles.adminTitle}`}>Admin Panel</h1>
          <div className={`${styles.adminGrid}`}>
            {
            messages.map((message) => (
                <div className={`${styles.adminCardContainer}`}>
                    <div className={`${styles.adminCard}`}>
                        <p>Name: {message.name}</p>
                        <p>Email: {message.email}</p>
                        <p>Message: {message.message.slice(0, 50)}...</p>
                    </div>
                    <div className={`${styles.adminCardButtons}`}>
                        <button className={`${styles.viewBtn}`}>View</button>
                        <button className={`${styles.deleteBtn}`}>Delete</button>
                    </div>
                </div>
            ))
            }


            
          </div>
        </div>
      </div>
    </>
  )
}

export default About