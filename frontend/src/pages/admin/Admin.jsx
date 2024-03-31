import styles from './Admin.module.css'
import { useState, useEffect } from 'react'
import Newsletter from '../../components/newsletter/Newsletter'
import useAuth from '../../hooks/useAuth'

const Admin = () => {
  
    const [messages, setMessages] = useState([])
    const { auth } = useAuth()
    // Fetch Messages from API
    try{
      useEffect(() => {
          const headers = { 'Authorization': 'Bearer ' + auth?.token}
          fetch('api/messages', { headers }).then(res => res.json()).then(data => {
          messages && setMessages(data.messages)
          })
      }, [])}
    catch (error) {
      console.log(error)
    }

    return (
    <>
      <div className={`${styles.adminPageComponent}`}>
        <div className={`${styles.adminContainer} container`}>
          <h1 className={`${styles.adminTitle}`}>Admin Panel</h1>
          <div className={`${styles.adminTableContainer}`}>
            <table className={`${styles.adminTable}`}>
                <thead>
                  <tr>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  messages && messages.map((message, index) => (
                    <tr key={index} className={`${styles.adminTableRow}`}>
                        <td>{message.name}</td>
                        <td>{message.email}</td>
                        <td>{message.message}</td>
                    </tr>
                ))
                  }
                </tbody>            
            </table>
          </div>
        </div>
      </div>
      <div className={`${styles.newsletterSection}`}><Newsletter theme={'light'} /></div>
    </>
  )
}

export default Admin