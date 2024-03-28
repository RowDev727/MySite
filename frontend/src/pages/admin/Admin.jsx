import styles from './Admin.module.css'
import { useState, useEffect } from 'react'
import Newsletter from '../../components/newsletter/Newsletter'

const Admin = () => {
  
    const [messages, setMessages] = useState([])
    // Fetch Messages from API
    try{
      useEffect(() => {
          fetch('api/messages').then(res => res.json()).then(data => {
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
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Message</th>

                </tr>
                {
                messages && messages.map((message) => (
                  <tr className={`${styles.adminTableRow}`}>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.message}</td>
                  </tr>
              ))
                }            
            </table>
          </div>
        </div>
      </div>
      <div className={`${styles.newsletterSection}`}><Newsletter theme={'light'} /></div>
    </>
  )
}

export default Admin