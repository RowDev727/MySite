import './Test.css'
import { useState, useEffect } from 'react'

function Test() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetch('api/contact').then(res => res.json()).then(data => {
      setName(data.user)
      setEmail(data.email)
    })
  }, [])

  return (
    <div className="test-container">
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
    </div>
  )
}

export default Test
