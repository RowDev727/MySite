import './Test.css'
import { useState, useEffect } from 'react'
import { ourTeam } from '../../data/ourTeam'

function Test() {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    //fetchMessages()
    fetch('api/messages').then(res => res.json()).then(data => {
      setMessages(data.messages)
      console.log(data.messages)
      console.log(messages)
    })
  }, [])

  const fetchMessages = async () => {
    const response = await fetch('/api/messages')
    const data = await response.json()
    console.log(data)
    console.log(data.messages)
    setMessages(data.messages)
    console.log(messages)
  }
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
      {
        messages.map((message) => (
          <p>{message.name}</p>
        ))
      }

      
      
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
