import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetch('api/get_user_by_id/3').then(res => res.json()).then(data => {
      setName(data.name)
      setEmail(data.email)
    })
  }, [])

  return (
    <div className="app-container">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default App
