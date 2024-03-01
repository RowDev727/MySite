import './Test.css'
import { useState, useEffect } from 'react'

function Test() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetch('api/get_user_by_id/3').then(res => res.json()).then(data => {
      setName(data.name)
      setEmail(data.email)
    })
  }, [])

  return (
    <div className="test-container">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Test
