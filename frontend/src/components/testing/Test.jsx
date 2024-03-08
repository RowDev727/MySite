import './Test.css'
import { useState, useEffect } from 'react'

function Test() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('api/message/1').then(res => res.json()).then(data => {
      setName(data.user)
      setEmail(data.email)
      setMessage(data.message)
    })
  }, [])

  return (
    <div className="test-container">
      <div className="test-container-header">
        <h1>Contacts</h1>
      </div>
      <div className="test-container-body">
        <p>Name: {name}</p>
        <p>E-Mail: {email}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  )
}

export default Test
