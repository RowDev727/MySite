import './Test.css'
import { useState, useEffect } from 'react'
import { ourTeam } from '../../data/ourTeam'

function Test() {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  // Fetch Messages from API
  useEffect(() => {
    fetch('api/messages').then(res => res.json()).then(data => {
      setMessages(data.messages)

    })
  }, [])
  // Fetch message by id
  // useEffect(() => {
  //   fetch('api/message/1').then(res => res.json()).then(data => {
  //     setName(data.user)
  //     setEmail(data.email)
  //     setMessage(data.message)
  //   })
  // }, [])

  return (
    <div className="test-container">
      <h1>Contacts</h1>
      <div>
        {
          messages.map((message) => (
            <div className='card'>
              <p>{message.name}</p>
              <p>{message.email}</p>
              <p>{message.message}</p>
            </div>
          ))
        }
      </div>
      

      
      
      {/* <div className="test-container-header">
        <h1>Our Team!</h1>
      </div>
      <div className="test-container-body">
        <p>Name: {name}</p>
        <p>E-Mail: {email}</p>
        <p>Message: {message}</p>
        {
          ourTeam.map(({name, img, description}, index) => {
              return (
                  <div className="card">
                    <p>Name: {name}</p>
                    <p>Image: {img}</p>
                    <p>Description: {description}</p>
                  </div>
              )
          })
        }
      </div> */}
    </div>
  )
}

export default Test
